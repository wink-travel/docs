/**
 * Discovers real page routes straight from src/content/docs/, so the
 * Playwright suite stays in sync automatically as pages are added, renamed,
 * or removed — no hand-maintained page list to go stale.
 *
 * Route IDs are derived with the same transform as src/content.config.ts's
 * `generateId` (strip the .md/.mdx extension, collapse a trailing "/index"
 * segment) — keep the two in sync if that transform ever changes.
 *
 * Deliberately walks the filesystem rather than importing Astro's content
 * collection API: these helpers run in the Playwright/Node process, not
 * inside an Astro build, and a plain fs walk needs no astro:content runtime.
 */
import { readdirSync, readFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

import { targetLanguages } from "../../src/lib/i18n-config.js";

// Resolved from the working directory Playwright runs in (the repo root,
// same as where playwright.config.ts itself resolves `webServer.command`
// from) rather than from this file's own location — avoids import.meta.url,
// which Playwright's default CJS test transform doesn't support here.
const DOCS_DIR = join(process.cwd(), "src", "content", "docs");

const LOCALE_IDS = new Set(targetLanguages.map((lang) => lang.id));

const isContentFile = (name: string): boolean =>
  (name.endsWith(".md") || name.endsWith(".mdx")) && !name.startsWith(".") && !name.startsWith("_");

const toId = (relativeFromDocsDir: string): string =>
  relativeFromDocsDir
    .split(sep)
    .join("/")
    .replace(/\.(mdx|md)$/i, "")
    // Collapse a trailing "/index" segment (nested indexes) or a bare "index"
    // (the collection-root homepage, which has no preceding directory).
    .replace(/(^|\/)index$/i, "");

const idToPath = (id: string): string => (id === "" ? "/" : `/${id}/`);

// Starlight's `draft: true` frontmatter flag excludes a page from production
// builds entirely (it 404s), while still rendering it in dev — see
// @astrojs/starlight/schema.ts. Route discovery must exclude these too, or
// this suite reports a real page as a 404 that Starlight is deliberately not
// building.
const isDraft = (file: string): boolean => /^draft:\s*true\s*$/m.test(readFileSync(file, "utf8"));

function collectContentFiles(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      collectContentFiles(full, out);
    } else if (entry.isFile() && isContentFile(entry.name) && !isDraft(full)) {
      out.push(full);
    }
  }
  return out;
}

const allRoutes: string[] = (() => {
  const files = collectContentFiles(DOCS_DIR);
  const ids = files.map((file) => toId(relative(DOCS_DIR, file)));
  return [...new Set(ids.map(idToPath))].sort();
})();

/** Root-locale (English) page routes — every path not under a locale-prefixed directory. */
export function discoverEnglishRoutes(): string[] {
  return allRoutes.filter((path) => !LOCALE_IDS.has(path.split("/")[1]));
}

/** Page routes that actually exist for one locale today (translation coverage varies by page). */
export function discoverLocaleRoutes(localeId: string): string[] {
  const prefix = `/${localeId}/`;
  return allRoutes.filter((path) => path.startsWith(prefix));
}

/** Every configured locale, id + display label (mirrors astro.config.mjs's `locales` map). */
export const locales = targetLanguages;

/**
 * Locale routes whose source file has `marketingNav: true` in frontmatter —
 * a cheap frontmatter grep, no page load needed. Used to find a live target
 * for the nav/footer locale-link regression test without visiting every
 * page in the locale hoping to find one.
 */
export function discoverLocaleMarketingNavRoutes(localeId: string): string[] {
  const localeDir = join(DOCS_DIR, localeId);
  let files: string[];
  try {
    files = collectContentFiles(localeDir);
  } catch {
    return [];
  }
  return files
    .filter((file) => /^marketingNav:\s*true\s*$/m.test(readFileSync(file, "utf8")))
    .map((file) => idToPath(toId(relative(DOCS_DIR, file))));
}

/**
 * Routes whose source file emits BreadcrumbList structured data, for one
 * locale ("" / undefined for the English root). A cheap source grep, the same
 * shape as discoverLocaleMarketingNavRoutes above — it keeps the structured
 * data suite in sync as pages gain or lose a breadcrumb, with no hand-kept list.
 *
 * Matches both emitters: <BreadcrumbJsonLd> on marketing pages and
 * <ResourceSchema> (whose @graph carries its own BreadcrumbList) on articles.
 */
export function discoverBreadcrumbRoutes(localeId?: string): string[] {
  const dir = localeId ? join(DOCS_DIR, localeId) : DOCS_DIR;
  let files: string[];
  try {
    files = collectContentFiles(dir);
  } catch {
    return [];
  }
  return files
    .filter((file) => /<(BreadcrumbJsonLd|ResourceSchema)\b/.test(readFileSync(file, "utf8")))
    .map((file) => idToPath(toId(relative(DOCS_DIR, file))))
    .filter((path) => (localeId ? true : !LOCALE_IDS.has(path.split("/")[1])))
    .sort();
}
