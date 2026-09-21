#!/usr/bin/env node
/**
 * Refuses a Firebase deploy when `dist/` is not a complete site.
 *
 * `firebase deploy` replaces the whole hosting bucket, so anything missing
 * locally is deleted in production. Two ways that has nearly happened here:
 *
 *   1. Pagefind is the site's only search (DocSearch is commented out). A
 *      corrupt npm cache entry left `@pagefind/darwin-arm64` without its
 *      binary, the `astro:build:done` hook failed, and `dist/pagefind` was
 *      never written — while the build still exited 0.
 *   2. `astro build` exits 0 even when pages fail to render. A build has come
 *      out nearly empty at exit 0 before.
 *
 * Both are invisible in the build's exit code and obvious here, one second
 * before the upload that would make them permanent.
 *
 * Bypass with SKIP_DEPLOY_PREFLIGHT=1 when you genuinely intend a partial
 * deploy.
 */
import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

if (process.env.SKIP_DEPLOY_PREFLIGHT === "1") {
  console.log("predeploy: skipped (SKIP_DEPLOY_PREFLIGHT=1)");
  process.exit(0);
}

const DIST = "dist";
/** A healthy build is ~27,000 pages. A floor well under that still catches an empty dist. */
const MIN_PAGES = 1000;

const problems = [];

function countHtml(dir) {
  let n = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) n += countHtml(path);
    else if (entry.name.endsWith(".html")) n++;
  }
  return n;
}

if (!existsSync(DIST)) {
  problems.push([`${DIST}/ does not exist.`, "Run `npm run build` first."]);
} else {
  const pages = countHtml(DIST);
  if (pages < MIN_PAGES) {
    problems.push([
      `${DIST}/ holds only ${pages.toLocaleString()} HTML files (expected well over ${MIN_PAGES.toLocaleString()}).`,
      "The build exited 0 but did not render. Check the build log for [ERROR] lines — the exit code does not report them.",
    ]);
  }

  const pagefind = join(DIST, "pagefind", "pagefind.js");
  if (!existsSync(pagefind) || statSync(pagefind).size === 0) {
    problems.push([
      "dist/pagefind/pagefind.js is missing — this deploy would remove search from the live site.",
      "Pagefind's platform binary failed to install. Repair the npm cache entry and reinstall:\n" +
        "        npm pack @pagefind/darwin-arm64@1.5.2 && npm ci   (adjust the platform if not darwin-arm64)\n" +
        "      then rebuild and confirm the log says 'Finished building search index'.",
    ]);
  }

  if (!existsSync(join(DIST, "sitemap-index.xml"))) {
    problems.push([
      "dist/sitemap-index.xml is missing.",
      "The sitemap is written in astro:build:done; if it is absent that hook did not finish.",
    ]);
  }
}

if (problems.length === 0) {
  console.log("predeploy: dist/ looks complete (pages, search index, sitemap).");
  process.exit(0);
}

console.error(`\npredeploy: refusing to deploy — ${problems.length} problem(s) with dist/\n`);
for (const [what, fix] of problems) {
  console.error(`  ✗ ${what}`);
  console.error(`      ${fix}\n`);
}
console.error("Deploy replaces the entire hosting bucket, so these would take effect in production.");
console.error("Set SKIP_DEPLOY_PREFLIGHT=1 to override deliberately.\n");
process.exit(1);
