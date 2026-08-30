/**
 * Regression coverage for the locale-prefixing bug fixed this session:
 * MarketingNav/MarketingFooter used to hardcode English hrefs, so every
 * translated page's nav pointed back at the English site instead of staying
 * in-locale. See src/lib/locale-links.ts.
 *
 * Two layers:
 *  1. Pure-function cases against withLocalePrefix — fast, precise, and
 *     doesn't depend on any page having been translated yet.
 *  2. A live nav/footer check against a real page, for whichever locale has
 *     one — none does yet (the marketing IA rebuild is English-only pending
 *     an `npm run i18n:all` run), so today every case below reports
 *     "skipped, no target yet". This activates itself automatically once
 *     translations exist — nothing to update here.
 *
 * Runs once (the "locales" project in playwright.config.ts) — see that
 * file for why this isn't repeated across the viewport×theme matrix.
 */
import { test, expect } from "@playwright/test";

import { withLocalePrefix } from "../src/lib/locale-links";
import { discoverLocaleMarketingNavRoutes, locales } from "./utils/discover-routes";

test.describe("withLocalePrefix (unit)", () => {
  const cases: Array<{
    name: string;
    href: string;
    localePrefix: string | undefined;
    expected: string;
  }> = [
    { name: "ordinary path gets prefixed", href: "/hotels/", localePrefix: "fr", expected: "/fr/hotels/" },
    { name: "root locale (undefined) passes through", href: "/hotels/", localePrefix: undefined, expected: "/hotels/" },
    { name: "homepage", href: "/", localePrefix: "de", expected: "/de/" },
    { name: "/api/ is never localized", href: "/api/overview", localePrefix: "fr", expected: "/api/overview" },
    { name: "/blog/ is never localized", href: "/blog/", localePrefix: "fr", expected: "/blog/" },
    { name: "/changelog/ is never localized", href: "/changelog/overview/", localePrefix: "fr", expected: "/changelog/overview/" },
    { name: "llms.txt is never localized", href: "/llms.txt", localePrefix: "fr", expected: "/llms.txt" },
    { name: "external URL passes through untouched", href: "https://app.wink.travel", localePrefix: "fr", expected: "https://app.wink.travel" },
    { name: "mailto: passes through untouched", href: "mailto:press@wink.travel", localePrefix: "fr", expected: "mailto:press@wink.travel" },
  ];

  for (const c of cases) {
    test(c.name, () => {
      expect(withLocalePrefix(c.href, c.localePrefix)).toBe(c.expected);
    });
  }
});

test.describe("marketing nav/footer stay within the current locale (live)", () => {
  for (const locale of locales) {
    test(locale.id, async ({ page }) => {
      const [target] = discoverLocaleMarketingNavRoutes(locale.id);
      test.skip(!target, `no marketingNav page translated for locale "${locale.id}" yet`);
      if (!target) return;

      await page.goto(target, { waitUntil: "load" });
      const hrefs = await page
        .locator('.marketing-nav a[href^="/"], footer a[href^="/"]')
        .evaluateAll((els) => els.map((el) => el.getAttribute("href")));

      const missingLocalePrefix = hrefs.filter(
        (href) =>
          href &&
          !href.startsWith(`/${locale.id}/`) &&
          !href.startsWith("/api/") &&
          !href.startsWith("/blog/") &&
          !href.startsWith("/changelog/") &&
          href !== "/llms.txt",
      );
      expect(
        missingLocalePrefix,
        `nav/footer links not locale-prefixed on ${target}:\n${missingLocalePrefix.join("\n")}`,
      ).toEqual([]);
    });
  }
});
