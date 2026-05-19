/*
 * One-time repair: undo double-prefixes accidentally introduced by re-running
 * the link-rewrite step (e.g. /app/app/extranet/ → /app/extranet/).
 *
 * Idempotent — safe to run multiple times.
 */

import { existsSync, readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { resolve, join, dirname, relative } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");
const docsBaseDir = join(rootDir, "src", "content", "docs");

const walkMdx = (startDir: string): string[] => {
  const out: string[] = [];
  const walk = (dir: string): void => {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      const st = statSync(full);
      if (st.isDirectory()) walk(full);
      else if (/\.(md|mdx)$/.test(entry)) {
        out.push(relative(startDir, full).split("\\").join("/"));
      }
    }
  };
  walk(startDir);
  return out;
};

const patterns: Array<[RegExp, string]> = [
  [/\/app\/app\//g, "/app/"],
  [/\/services\/services\//g, "/services/"],
  [/\/account\/account\//g, "/account/"],
];

const all = walkMdx(docsBaseDir);
let fixedCount = 0;
let totalReplacements = 0;
for (const rel of all) {
  const abs = join(docsBaseDir, rel);
  const original = readFileSync(abs, "utf8");
  let updated = original;
  let fileReplacements = 0;
  for (const [re, replacement] of patterns) {
    const before = updated;
    updated = updated.replace(re, () => {
      fileReplacements++;
      return replacement;
    });
  }
  if (updated !== original) {
    writeFileSync(abs, updated, "utf8");
    fixedCount++;
    totalReplacements += fileReplacements;
  }
}
console.log(`Fixed ${fixedCount} files, ${totalReplacements} total replacements`);
