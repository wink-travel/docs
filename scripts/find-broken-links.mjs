/*
 * Scan all .md/.mdx files in src/content/docs/ for internal links that point
 * to non-existent docs. Reports broken links grouped by file.
 */

import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { resolve, join, dirname } from "path";
import { fileURLToPath } from "url";

const here = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(here, "..");
const docsBaseDir = join(rootDir, "src", "content", "docs");

const mapping = JSON.parse(
  readFileSync(join(here, "migration-mapping.json"), "utf8")
);
const locales = new Set(mapping.locales);

const walkMdx = (startDir, base = startDir) => {
  const out = [];
  if (!existsSync(startDir)) return out;
  for (const entry of readdirSync(startDir)) {
    const full = join(startDir, entry);
    if (statSync(full).isDirectory()) out.push(...walkMdx(full, base));
    else if (/\.(md|mdx)$/.test(entry)) {
      out.push(full.slice(base.length + 1).split("\\").join("/"));
    }
  }
  return out;
};

const validPaths = new Set();
const englishFiles = walkMdx(docsBaseDir).filter((f) => !locales.has(f.split("/")[0]));
for (const file of englishFiles) {
  const noExt = file.replace(/\.(md|mdx)$/, "");
  validPaths.add(noExt);
  if (noExt.endsWith("/index")) validPaths.add(noExt.slice(0, -"/index".length));
}

const externalRoots = new Set(["api", "integrations-api", "blog", "changelog"]);

const { buildRedirects } = await import("./build-redirects.mjs");
const redirects = buildRedirects();
const redirectSources = new Set(Object.keys(redirects).map((k) => k.replace(/^\//, "")));

const isValid = (urlPath) => {
  const clean = urlPath.replace(/^\//, "").replace(/[?#].*$/, "").replace(/\/$/, "");
  if (clean === "") return true;
  const segs = clean.split("/");
  const rest = locales.has(segs[0]) ? segs.slice(1).join("/") : clean;
  if (validPaths.has(rest)) return true;
  if (externalRoots.has(rest.split("/")[0])) return true;
  if (redirectSources.has(clean) || redirectSources.has(rest)) return true;
  for (const ext of [".md", ".mdx"]) {
    if (existsSync(join(docsBaseDir, rest + ext))) return true;
    if (existsSync(join(docsBaseDir, rest, "index" + ext))) return true;
  }
  return false;
};

const linkPatterns = [
  /\]\((\/[^)\s]+)\)/g,
  /\bhref=(['"])(\/[^'"]+)\1/g,
  /\b(?:badgeHref|primaryButtonHref|secondaryButtonHref|previewHref)=(['"])(\/[^'"]+)\1/g,
];

const brokenByFile = new Map();
for (const file of englishFiles) {
  const content = readFileSync(join(docsBaseDir, file), "utf8");
  const seen = new Set();
  for (const re of linkPatterns) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(content)) !== null) {
      const last = m[m.length - 1];
      const href = last && last.startsWith("/") ? last : m[2];
      if (!href || !href.startsWith("/")) continue;
      if (seen.has(href)) continue;
      seen.add(href);
      if (!isValid(href)) {
        if (!brokenByFile.has(file)) brokenByFile.set(file, []);
        brokenByFile.get(file).push(href);
      }
    }
  }
}

const totalBroken = [...brokenByFile.values()].reduce((a, b) => a + b.length, 0);
console.log(`Files with broken links: ${brokenByFile.size}`);
console.log(`Total broken links: ${totalBroken}\n`);
for (const [file, links] of [...brokenByFile.entries()].sort()) {
  console.log(file);
  for (const link of links) console.log("  " + link);
}
