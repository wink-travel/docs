/*
 * Refresh stored hash values in every locale's .file.hashes.json so they
 * match the current English source content. Run after migrations that
 * rewrite English source (e.g. link path updates) but where translated
 * files have been updated to match.
 */

import { existsSync, readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { createHash } from "crypto";
import { resolve, join, dirname, relative } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");
const docsBaseDir = join(rootDir, "src", "content", "docs");

const mapping = JSON.parse(
  readFileSync(join(__dirname, "migration-mapping.json"), "utf8")
);

const walkMdx = (startDir: string, base = startDir): string[] => {
  const out: string[] = [];
  if (!existsSync(startDir)) return out;
  for (const entry of readdirSync(startDir)) {
    const full = join(startDir, entry);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walkMdx(full, base));
    else if (/\.(md|mdx)$/.test(entry)) {
      out.push(relative(base, full).split("\\").join("/"));
    }
  }
  return out;
};

// English source files only (skip locale dirs, blog, changelog).
const isLocaleDir = (name: string): boolean => mapping.locales.includes(name);

const englishFiles = walkMdx(docsBaseDir).filter((f) => {
  const top = f.split("/")[0];
  return !isLocaleDir(top) && top !== "blog" && top !== "changelog";
});

const sha256 = (content: string): string =>
  createHash("sha256").update(content).digest("hex");

let totalUpdated = 0;
for (const locale of mapping.locales as string[]) {
  const hashPath = join(docsBaseDir, locale, ".file.hashes.json");
  if (!existsSync(hashPath)) continue;
  const hashes: Record<string, string> = JSON.parse(readFileSync(hashPath, "utf8"));
  let updated = 0;
  for (const file of englishFiles) {
    const newHash = sha256(readFileSync(join(docsBaseDir, file), "utf8"));
    if (hashes[file] !== newHash && hashes[file] !== undefined) {
      hashes[file] = newHash;
      updated++;
    }
  }
  if (updated > 0) {
    writeFileSync(hashPath, JSON.stringify(hashes, null, 2) + "\n", "utf8");
    console.log(`${locale}: refreshed ${updated} hash entries`);
    totalUpdated += updated;
  }
}
console.log(`Total refreshed: ${totalUpdated}`);
