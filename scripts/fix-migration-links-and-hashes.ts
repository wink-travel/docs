/*
 * Post-hoc fix for migrate-docs-paths.ts: rebuilds the URL map by walking
 * the *new* destination directories (which now contain the moved files),
 * then applies link rewrites and hash-map key renames.
 *
 * Safe to run multiple times — replacements are idempotent and matched on
 * old paths; once links are rewritten they no longer match.
 */

import {
  existsSync,
  readFileSync,
  writeFileSync,
  readdirSync,
  statSync,
} from "fs";
import { resolve, join, dirname, relative, posix } from "path";
import { fileURLToPath } from "url";

type Mapping = {
  locales: string[];
  dirMoves: Record<string, string>;
  fileMoves: Record<string, string>;
  deletes: string[];
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");
const docsBaseDir = join(rootDir, "src", "content", "docs");
const mappingPath = join(__dirname, "migration-mapping.json");

const mapping: Mapping = JSON.parse(readFileSync(mappingPath, "utf8"));

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

/**
 * Build URL map old → new by walking the NEW destination dirs
 * (files now live there after migration).
 */
const buildUrlMap = (): Map<string, string> => {
  const map = new Map<string, string>();
  const addPath = (oldRel: string, newRel: string): void => {
    map.set(oldRel.replace(/\.(md|mdx)$/, ""), newRel.replace(/\.(md|mdx)$/, ""));
  };

  // For each dirMove, walk the NEW dir at English root and emit reverse mapping.
  for (const [oldDir, newDir] of Object.entries(mapping.dirMoves)) {
    const newDirAbs = join(docsBaseDir, newDir);
    for (const rel of walkMdx(newDirAbs)) {
      addPath(posix.join(oldDir, rel), posix.join(newDir, rel));
    }
  }

  for (const [oldFile, newFile] of Object.entries(mapping.fileMoves)) {
    addPath(oldFile, newFile);
  }

  return map;
};

const rewriteLinks = (content: string, urlMap: Map<string, string>): string => {
  const sorted = [...urlMap.keys()].sort((a, b) => b.length - a.length);
  let out = content;
  for (const oldUrl of sorted) {
    const newUrl = urlMap.get(oldUrl)!;
    const escaped = oldUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = new RegExp(`(/)(${escaped})(?=[/)#"'?\\s]|$)`, "g");
    out = out.replace(re, (_full, slash) => `${slash}${newUrl}`);
  }
  return out;
};

const main = (): void => {
  const urlMap = buildUrlMap();
  console.log(`URL map: ${urlMap.size} entries`);

  // Walk entire docs tree and rewrite links.
  const all = walkMdx(docsBaseDir);
  let rewriteCount = 0;
  for (const rel of all) {
    const abs = join(docsBaseDir, rel);
    const original = readFileSync(abs, "utf8");
    const rewritten = rewriteLinks(original, urlMap);
    if (rewritten !== original) {
      writeFileSync(abs, rewritten, "utf8");
      rewriteCount++;
    }
  }
  console.log(`Rewrote links in ${rewriteCount} files`);

  // Remap hash maps in each locale.
  let totalRenamed = 0;
  let totalDeleted = 0;
  for (const locale of mapping.locales) {
    const hashPath = join(docsBaseDir, locale, ".file.hashes.json");
    if (!existsSync(hashPath)) continue;
    const original: Record<string, string> = JSON.parse(readFileSync(hashPath, "utf8"));
    const updated: Record<string, string> = {};
    let renamed = 0;
    let deleted = 0;
    for (const [key, value] of Object.entries(original)) {
      const keyNoExt = key.replace(/\.(md|mdx)$/, "");
      if (urlMap.has(keyNoExt)) {
        const newKeyNoExt = urlMap.get(keyNoExt)!;
        const ext = key.match(/\.(md|mdx)$/)?.[0] ?? "";
        updated[newKeyNoExt + ext] = value;
        renamed++;
      } else if (mapping.deletes.some((d) => d.replace(/\.(md|mdx)$/, "") === keyNoExt)) {
        deleted++;
      } else {
        updated[key] = value;
      }
    }
    if (renamed === 0 && deleted === 0) continue;
    writeFileSync(hashPath, JSON.stringify(updated, null, 2) + "\n", "utf8");
    console.log(`  ${locale}: renamed ${renamed}, dropped ${deleted}`);
    totalRenamed += renamed;
    totalDeleted += deleted;
  }
  console.log(`Total: renamed ${totalRenamed} hash keys, dropped ${totalDeleted}`);
};

main();
