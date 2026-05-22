/*
 * Migration v2: rename app/ → portal/, move services/agency/what-is-agency
 * → guides/hoteliers/creator-agency, delete empty services/.
 *
 * Builds the URL map BEFORE applying moves (lesson learned from v1).
 */

import {
  existsSync,
  readFileSync,
  writeFileSync,
  readdirSync,
  statSync,
  mkdirSync,
} from "fs";
import { resolve, join, dirname, relative, posix } from "path";
import { fileURLToPath } from "url";
import { execFileSync } from "child_process";

const here = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(here, "..");
const docsBaseDir = join(rootDir, "src", "content", "docs");

const APPLY = process.argv.includes("--apply");

const v1Mapping = JSON.parse(
  readFileSync(join(here, "migration-mapping.json"), "utf8")
);
const locales: string[] = v1Mapping.locales;

const dirMoves: Record<string, string> = {
  app: "portal",
};

const fileMoves: Record<string, string> = {
  "services/agency/what-is-agency.mdx": "guides/hoteliers/creator-agency.mdx",
};

// Directories to delete after moves complete.
const dirDeletes = ["services"];

const gitMv = (from: string, to: string): void => {
  if (!APPLY) {
    console.log(`  [dry] git mv "${relative(rootDir, from)}" "${relative(rootDir, to)}"`);
    return;
  }
  mkdirSync(dirname(to), { recursive: true });
  execFileSync("git", ["mv", from, to], { cwd: rootDir });
};

const walkMdx = (startDir: string, base = startDir): string[] => {
  const out: string[] = [];
  if (!existsSync(startDir)) return out;
  for (const entry of readdirSync(startDir)) {
    const full = join(startDir, entry);
    if (statSync(full).isDirectory()) out.push(...walkMdx(full, base));
    else if (/\.(md|mdx)$/.test(entry)) {
      out.push(relative(base, full).split("\\").join("/"));
    }
  }
  return out;
};

// ── Step 1: build URL map BEFORE applying moves ────────────────────────────
type UrlMap = Map<string, string>;
const urlMap: UrlMap = new Map();
const stripExt = (p: string): string => p.replace(/\.(md|mdx)$/, "");

for (const [oldDir, newDir] of Object.entries(dirMoves)) {
  const oldAbs = join(docsBaseDir, oldDir);
  if (!existsSync(oldAbs)) continue;
  for (const rel of walkMdx(oldAbs)) {
    urlMap.set(stripExt(posix.join(oldDir, rel)), stripExt(posix.join(newDir, rel)));
  }
}
for (const [oldFile, newFile] of Object.entries(fileMoves)) {
  urlMap.set(stripExt(oldFile), stripExt(newFile));
}

console.log(`Mode: ${APPLY ? "APPLY" : "DRY-RUN"}`);
console.log(`URL map: ${urlMap.size} entries`);

// ── Step 2: file moves for English + each locale ──────────────────────────
const allMoves: Array<{ from: string; to: string }> = [];
const scopes: Array<{ root: string }> = [
  { root: docsBaseDir },
  ...locales.map((l) => ({ root: join(docsBaseDir, l) })),
];

for (const { root } of scopes) {
  for (const [oldDir, newDir] of Object.entries(dirMoves)) {
    const oldAbs = join(root, oldDir);
    if (!existsSync(oldAbs)) continue;
    for (const rel of walkMdx(oldAbs)) {
      allMoves.push({
        from: join(root, oldDir, rel),
        to: join(root, newDir, rel),
      });
    }
  }
  for (const [oldFile, newFile] of Object.entries(fileMoves)) {
    const fromAbs = join(root, oldFile);
    if (!existsSync(fromAbs)) continue;
    allMoves.push({ from: fromAbs, to: join(root, newFile) });
  }
}
console.log(`Move ops: ${allMoves.length}`);
if (APPLY) {
  for (const { from, to } of allMoves) gitMv(from, to);
}

// ── Step 3: rewrite internal links across the whole tree ───────────────────
const sorted = [...urlMap.keys()].sort((a, b) => b.length - a.length);
const rewriteLinks = (content: string): string => {
  let out = content;
  for (const oldUrl of sorted) {
    const newUrl = urlMap.get(oldUrl)!;
    const escaped = oldUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(/)(${escaped})(?=[/)#"'?\\s]|$)`, "g");
    out = out.replace(re, (_full, slash) => `${slash}${newUrl}`);
  }
  return out;
};

let rewriteCount = 0;
const allFiles = walkMdx(docsBaseDir);
for (const rel of allFiles) {
  const abs = join(docsBaseDir, rel);
  const original = readFileSync(abs, "utf8");
  const rewritten = rewriteLinks(original);
  if (rewritten !== original) {
    if (APPLY) writeFileSync(abs, rewritten, "utf8");
    rewriteCount++;
  }
}
console.log(`Link rewrites: ${rewriteCount} files`);

// ── Step 4: remap hash keys per locale ─────────────────────────────────────
for (const locale of locales) {
  const hashPath = join(docsBaseDir, locale, ".file.hashes.json");
  if (!existsSync(hashPath)) continue;
  const original: Record<string, string> = JSON.parse(readFileSync(hashPath, "utf8"));
  const updated: Record<string, string> = {};
  let renamed = 0;
  for (const [key, value] of Object.entries(original)) {
    const keyNoExt = stripExt(key);
    if (urlMap.has(keyNoExt)) {
      const newKeyNoExt = urlMap.get(keyNoExt)!;
      const ext = key.match(/\.(md|mdx)$/)?.[0] ?? "";
      updated[newKeyNoExt + ext] = value;
      renamed++;
    } else {
      updated[key] = value;
    }
  }
  if (renamed > 0 && APPLY) {
    writeFileSync(hashPath, JSON.stringify(updated, null, 2) + "\n", "utf8");
  }
}
console.log(`Hash maps remapped: ${locales.length} locales`);

// ── Step 5: delete empty dirs ──────────────────────────────────────────────
if (APPLY) {
  const findEmpty = (dir: string): string[] => {
    const out: string[] = [];
    const walk = (d: string): boolean => {
      if (!existsSync(d) || !statSync(d).isDirectory()) return false;
      const entries = readdirSync(d);
      let allEmpty = entries.length > 0;
      for (const e of entries) {
        const full = join(d, e);
        if (statSync(full).isDirectory()) {
          if (!walk(full)) allEmpty = false;
        } else {
          allEmpty = false;
        }
      }
      if (entries.length === 0 || allEmpty) {
        out.push(d);
        return true;
      }
      return false;
    };
    walk(dir);
    return out;
  };

  for (const { root } of scopes) {
    for (const dirName of dirDeletes) {
      const abs = join(root, dirName);
      if (existsSync(abs)) {
        // Remove the directory if it's empty (post-move).
        const empties = findEmpty(abs);
        for (const e of empties.reverse()) {
          try {
            // rmdirSync via fs
            const { rmdirSync } = require("fs");
            rmdirSync(e);
          } catch {
            // ignore — leave for find -empty -delete later
          }
        }
      }
    }
  }
}

console.log(`Done. ${APPLY ? "Applied." : "Dry-run only — re-run with --apply."}`);
