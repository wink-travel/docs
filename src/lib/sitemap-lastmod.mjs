/**
 * Per-URL `lastmod` dates for the sitemap, taken from git history.
 *
 * The sitemap shipped 16,138 URLs with no `<lastmod>` at all, so every page
 * looked equally undated to crawlers and answer engines, which weight
 * freshness. Astro has no built-in source for this: `@astrojs/sitemap` only
 * emits what `serialize` gives it.
 *
 * Dates come from the last commit that touched each content file — the honest
 * signal, and it needs no frontmatter discipline from authors. A URL with no
 * resolvable source file (API reference, changelog, generated routes) simply
 * gets no `lastmod`, which is valid: a partial sitemap is fine, a wrong date
 * is not.
 *
 * If git is unavailable the index comes back empty and the sitemap is exactly
 * what it is today, so a build can never fail over this.
 */
import { execSync } from "node:child_process";

const DOCS = "src/content/docs";
const LOCALE = /^([a-z]{2}(?:-[A-Za-z]{2,4})?)\//;

/** Collection-relative file path -> URL pathname, following Starlight's routing. */
function toPathname(relative) {
  let slug = relative.replace(/\.(md|mdx|markdoc)$/i, "");
  if (slug === "index") return "/";
  slug = slug.replace(/\/index$/, "");
  return `/${slug}/`;
}

function readGitDates() {
  const out = execSync(
    `git log --no-renames --pretty=format:%cI --name-only --diff-filter=ACMR -- ${DOCS}`,
    { encoding: "utf8", maxBuffer: 512 * 1024 * 1024 },
  );
  /** @type {Map<string,string>} newest commit date per file (log is newest-first) */
  const byFile = new Map();
  let date = null;
  for (const line of out.split("\n")) {
    const text = line.trim();
    if (!text) continue;
    if (/^\d{4}-\d{2}-\d{2}T/.test(text)) { date = text; continue; }
    if (date && text.startsWith(DOCS + "/") && !byFile.has(text)) byFile.set(text, date);
  }
  return byFile;
}

export function buildLastmodIndex() {
  let byFile;
  try {
    byFile = readGitDates();
  } catch (error) {
    console.warn(`[sitemap-lastmod] git unavailable, emitting no lastmod: ${error.message}`);
    return new Map();
  }

  /** @type {Map<string,string>} */
  const byPath = new Map();
  /** @type {Map<string,string>} English dates, keyed by their locale-less pathname */
  const english = new Map();

  for (const [file, date] of byFile) {
    const relative = file.slice(DOCS.length + 1);
    const pathname = toPathname(relative);
    byPath.set(pathname, date);
    if (!LOCALE.test(relative)) english.set(pathname, date);
  }

  // A locale URL with no translated file of its own is served from the English
  // content by Starlight's fallback, so it inherits the English date.
  for (const [pathname, date] of english) {
    byPath.set(pathname, date);
  }
  return { byPath, english };
}

/** Returns an ISO date for a sitemap URL, or undefined when none is known. */
export function makeLastmodLookup() {
  const { byPath, english } = buildLastmodIndex();
  return (url) => {
    let pathname;
    try { pathname = new URL(url).pathname; } catch { return undefined; }
    const direct = byPath.get(pathname);
    if (direct) return direct;
    const locale = pathname.match(/^\/([a-z]{2}(?:-[A-Za-z]{2,4})?)\//);
    if (locale) return english.get(pathname.slice(locale[1].length + 1));
    return undefined;
  };
}
