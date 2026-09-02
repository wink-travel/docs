/**
 * Regression coverage for the BreadcrumbList bug Google Search Console caught
 * ("Missing field 'item' (in 'itemListElement')", first detected 2026-09-01).
 *
 * Two independent defects, both fixed in src/components/marketing/
 * BreadcrumbJsonLd.astro and ResourceSchema.astro:
 *
 *  1. INVALID MARKUP. The /products/* pages passed their middle crumb as
 *     `{ name: "Products" }` with no URL, so the emitted ListItem had no
 *     `item`. Google allows that ONLY on the final crumb (the current page);
 *     on a middle crumb it invalidates the entire BreadcrumbList. 264 pages
 *     (6 product pages x 44 locales) shipped invalid.
 *
 *  2. WRONG LOCALE. Crumb URLs were authored as absolute English URLs, and
 *     translate-i18n.ts copies absolute URLs verbatim, so every translated
 *     page's trail pointed at the English site. Crumbs are now authored as
 *     site-relative paths and localized by the component.
 *
 * BreadcrumbJsonLd throws at build time if a non-final crumb has no path, so
 * defect 1 cannot reach production again. That guard can't see defect 2 --
 * a locale prefix is a rendering concern -- which is what this suite covers.
 *
 * Runs once (the "locales" project in playwright.config.ts), not across the
 * viewport x theme matrix: JSON-LD is identical at every viewport.
 */
import { test, expect } from "@playwright/test";

import { discoverBreadcrumbRoutes } from "./utils/discover-routes";

// A sample, not all 43 locales: the markup comes from two shared components,
// so one root locale plus a Latin, a CJK and an RTL locale exercises every
// code path. The full sweep would be ~1,600 redundant requests.
const SAMPLED_LOCALES: Array<string | undefined> = [undefined, "fr", "ja", "ar"];

interface ListItem {
  "@type"?: string;
  position?: number;
  name?: string;
  item?: unknown;
}

/** Every BreadcrumbList in a document, including ones nested inside an @graph. */
function collectBreadcrumbLists(node: unknown, found: Record<string, unknown>[] = []) {
  if (Array.isArray(node)) {
    node.forEach((child) => collectBreadcrumbLists(child, found));
  } else if (node && typeof node === "object") {
    const obj = node as Record<string, unknown>;
    if (obj["@type"] === "BreadcrumbList") found.push(obj);
    Object.values(obj).forEach((child) => collectBreadcrumbLists(child, found));
  }
  return found;
}

function parseJsonLd(html: string): unknown[] {
  const blocks: unknown[] = [];
  const re = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(html))) {
    blocks.push(JSON.parse(match[1] as string));
  }
  return blocks;
}

for (const locale of SAMPLED_LOCALES) {
  const label = locale ?? "root (en)";
  const routes = discoverBreadcrumbRoutes(locale);

  test.describe(`BreadcrumbList structured data — ${label}`, () => {
    test.skip(routes.length === 0, `no breadcrumb-bearing routes for ${label} yet`);

    for (const route of routes) {
      test(`${route} emits a valid, in-locale breadcrumb`, async ({ request }) => {
        const response = await request.get(route);
        expect(response.status(), `${route} should render`).toBe(200);

        const lists = collectBreadcrumbLists(parseJsonLd(await response.text()));
        expect(lists.length, `${route} should emit a BreadcrumbList`).toBeGreaterThan(0);

        for (const list of lists) {
          const items = list.itemListElement as ListItem[];
          expect(Array.isArray(items) && items.length > 0).toBe(true);

          items.forEach((entry, i) => {
            const isLast = i === items.length - 1;
            const where = `${route} crumb ${i + 1} ("${entry.name}")`;

            expect(entry.position, `${where} position`).toBe(i + 1);
            expect(entry.name, `${where} needs a name`).toBeTruthy();

            if (isLast) {
              // The current page: Google expects no `item` here.
              expect(entry.item, `${where} is last and must omit item`).toBeUndefined();
              return;
            }

            // Every other crumb MUST carry an absolute `item` — this is the
            // exact field Search Console reported as missing.
            expect(typeof entry.item, `${where} must have an item URL`).toBe("string");
            const url = new URL(entry.item as string);
            expect(url.origin, `${where} item origin`).toBe("https://wink.travel");

            // ...pointing inside the page's own locale, not back at English.
            if (locale) {
              expect(url.pathname, `${where} must stay in /${locale}/`).toMatch(
                new RegExp(`^/${locale}/`),
              );
            } else {
              expect(url.pathname, `${where} must not be locale-prefixed`).not.toMatch(
                /^\/[a-z]{2}(-[A-Za-z]{2})?\//,
              );
            }
          });
        }
      });
    }
  });
}
