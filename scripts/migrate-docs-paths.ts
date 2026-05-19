/*
 * One-time docs reorganization migration.
 *
 * Moves files, renames hash-map keys per locale, rewrites internal MDX links,
 * and applies deletions. Reads canonical mapping from migration-mapping.json.
 *
 * Usage:
 *   tsx scripts/migrate-docs-paths.ts            # dry-run (default)
 *   tsx scripts/migrate-docs-paths.ts --apply    # actually mutate the tree
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

type Mapping = {
  locales: string[];
  dirMoves: Record<string, string>;
  fileMoves: Record<string, string>;
  deletes: string[];
  newDirs: string[];
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");
const docsBaseDir = join(rootDir, "src", "content", "docs");
const mappingPath = join(__dirname, "migration-mapping.json");

const APPLY = process.argv.includes("--apply");

const mapping: Mapping = JSON.parse(readFileSync(mappingPath, "utf8"));

const log = (...args: unknown[]): void => {
  console.log(...args);
};

const gitMv = (from: string, to: string): void => {
  if (!APPLY) {
    log(`  [dry] git mv "${from}" "${to}"`);
    return;
  }
  mkdirSync(dirname(to), { recursive: true });
  execFileSync("git", ["mv", from, to], { cwd: rootDir });
};

const gitRm = (path: string): void => {
  if (!APPLY) {
    log(`  [dry] git rm "${path}"`);
    return;
  }
  execFileSync("git", ["rm", path], { cwd: rootDir });
};

const writeJsonStable = (filePath: string, value: unknown): void => {
  const content = JSON.stringify(value, null, 2) + "\n";
  if (!APPLY) {
    log(`  [dry] write ${filePath} (${content.length} bytes)`);
    return;
  }
  writeFileSync(filePath, content, "utf8");
};

const writeText = (filePath: string, content: string): void => {
  if (!APPLY) {
    log(`  [dry] write ${filePath} (${content.length} bytes)`);
    return;
  }
  writeFileSync(filePath, content, "utf8");
};

/**
 * Walk a directory recursively, returning all .md/.mdx file paths
 * relative to the starting directory (POSIX-style separators).
 */
const walkMdx = (startDir: string): string[] => {
  const out: string[] = [];
  const walk = (dir: string): void => {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      const st = statSync(full);
      if (st.isDirectory()) {
        walk(full);
      } else if (/\.(md|mdx)$/.test(entry)) {
        out.push(relative(startDir, full).split("\\").join("/"));
      }
    }
  };
  walk(startDir);
  return out;
};

/**
 * Expand the canonical mapping into a flat list of source→dest file moves,
 * resolved per locale (including English at the root).
 *
 * For directory moves, this recursively walks the source directory and
 * applies the prefix transformation to each file.
 */
type FileMove = { from: string; to: string };

const expandMoves = (): FileMove[] => {
  const moves: FileMove[] = [];

  // For each "scope" (English at docsBaseDir, plus each locale subdir):
  const scopes: Array<{ root: string; prefix: string }> = [
    { root: docsBaseDir, prefix: "" },
    ...mapping.locales.map((locale) => ({
      root: join(docsBaseDir, locale),
      prefix: `${locale}/`,
    })),
  ];

  for (const { root, prefix } of scopes) {
    // Directory moves: walk each old dir and emit per-file moves.
    for (const [oldDir, newDir] of Object.entries(mapping.dirMoves)) {
      const oldAbs = join(root, oldDir);
      if (!existsSync(oldAbs)) continue;
      for (const rel of walkMdx(oldAbs)) {
        const fromRel = posix.join(oldDir, rel);
        const toRel = posix.join(newDir, rel);
        moves.push({ from: join(root, fromRel), to: join(root, toRel) });
      }
    }

    // Explicit file moves.
    for (const [oldFile, newFile] of Object.entries(mapping.fileMoves)) {
      const fromAbs = join(root, oldFile);
      if (!existsSync(fromAbs)) continue;
      moves.push({ from: fromAbs, to: join(root, newFile) });
    }
  }

  return moves;
};

/**
 * Build a URL→URL mapping (no extension) for link rewriting.
 * E.g. "extranet/what-is-extranet.md" → "app/extranet/what-is-extranet"
 */
const buildUrlMap = (): Map<string, string> => {
  const map = new Map<string, string>();

  const addPath = (oldRel: string, newRel: string): void => {
    const oldUrl = oldRel.replace(/\.(md|mdx)$/, "");
    const newUrl = newRel.replace(/\.(md|mdx)$/, "");
    map.set(oldUrl, newUrl);
  };

  // Dir moves: walk the English source dir to know the file inventory,
  // then map each file path.
  for (const [oldDir, newDir] of Object.entries(mapping.dirMoves)) {
    const englishDirAbs = join(docsBaseDir, oldDir);
    if (!existsSync(englishDirAbs)) continue;
    for (const rel of walkMdx(englishDirAbs)) {
      addPath(posix.join(oldDir, rel), posix.join(newDir, rel));
    }
  }

  for (const [oldFile, newFile] of Object.entries(mapping.fileMoves)) {
    addPath(oldFile, newFile);
  }

  return map;
};

/**
 * Rewrite every occurrence of /<oldUrl> in content with /<newUrl>,
 * preserving any locale prefix (/fr/extranet/... → /fr/app/extranet/...).
 *
 * Matches /<oldUrl> when followed by a boundary char or end of string,
 * so /extranet doesn't accidentally match /extranet-extra.
 */
const rewriteLinks = (content: string, urlMap: Map<string, string>): string => {
  // Sort old URLs by length DESC so longer matches win over their prefixes.
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

/**
 * Apply hash-map key renames + deletions to a single locale's .file.hashes.json.
 */
const remapHashFile = (localeDir: string, urlMap: Map<string, string>): void => {
  const hashPath = join(localeDir, ".file.hashes.json");
  if (!existsSync(hashPath)) return;
  const original: Record<string, string> = JSON.parse(
    readFileSync(hashPath, "utf8")
  );
  const updated: Record<string, string> = {};
  const deletedKeys = new Set<string>();

  for (const [key, value] of Object.entries(original)) {
    const keyNoExt = key.replace(/\.(md|mdx)$/, "");
    if (urlMap.has(keyNoExt)) {
      const newKeyNoExt = urlMap.get(keyNoExt)!;
      const ext = key.match(/\.(md|mdx)$/)?.[0] ?? "";
      const newKey = newKeyNoExt + ext;
      updated[newKey] = value;
    } else {
      // Drop deleted entries; keep everything else.
      const isDeleted = mapping.deletes.some(
        (d) => d.replace(/\.(md|mdx)$/, "") === keyNoExt
      );
      if (isDeleted) {
        deletedKeys.add(key);
        continue;
      }
      updated[key] = value;
    }
  }

  if (JSON.stringify(original) === JSON.stringify(updated)) {
    return;
  }
  log(
    `  hash-map: ${relative(rootDir, hashPath)} (${
      Object.keys(original).length
    } → ${Object.keys(updated).length} keys, ${deletedKeys.size} deletes)`
  );
  writeJsonStable(hashPath, updated);
};

const ensureNewDirs = (): void => {
  // Touch parent dirs for English and each locale.
  const scopes = [docsBaseDir, ...mapping.locales.map((l) => join(docsBaseDir, l))];
  for (const scope of scopes) {
    for (const dir of mapping.newDirs) {
      const abs = join(scope, dir);
      if (!existsSync(abs) && APPLY) {
        mkdirSync(abs, { recursive: true });
      }
    }
  }
};

const main = (): void => {
  log(`Migration ${APPLY ? "APPLY" : "DRY-RUN"} starting…`);
  log(`Docs root: ${docsBaseDir}`);
  log(`Locales: ${mapping.locales.length}`);

  // Step 1: file moves
  log("\n=== Step 1: file moves ===");
  const moves = expandMoves();
  log(`Resolved ${moves.length} move operations`);
  for (const { from, to } of moves) {
    gitMv(from, to);
  }

  // Step 2: deletes
  log("\n=== Step 2: deletes ===");
  const scopes: Array<{ root: string; label: string }> = [
    { root: docsBaseDir, label: "<root>" },
    ...mapping.locales.map((l) => ({ root: join(docsBaseDir, l), label: l })),
  ];
  let deleteCount = 0;
  for (const { root } of scopes) {
    for (const rel of mapping.deletes) {
      const abs = join(root, rel);
      if (existsSync(abs)) {
        gitRm(abs);
        deleteCount++;
      }
    }
  }
  log(`Deleted ${deleteCount} files`);

  // Step 3: rewrite internal links across the entire docs tree
  log("\n=== Step 3: rewrite internal links ===");
  const urlMap = buildUrlMap();
  log(`Built URL map with ${urlMap.size} entries`);
  // After moves, files are at NEW paths — walk those.
  const allFiles = walkMdx(docsBaseDir);
  let rewriteCount = 0;
  for (const rel of allFiles) {
    const abs = join(docsBaseDir, rel);
    // In dry-run, source files are still at old paths. Skip files that don't
    // currently exist but would after apply. Read whatever's on disk.
    if (!existsSync(abs)) continue;
    const original = readFileSync(abs, "utf8");
    const rewritten = rewriteLinks(original, urlMap);
    if (rewritten !== original) {
      writeText(abs, rewritten);
      rewriteCount++;
    }
  }
  // Dry-run note: in dry-run, the moves haven't happened, so walkMdx returns
  // old paths. The rewrite still works against old-path files; output is
  // representative but not authoritative for new-path files.
  if (!APPLY) {
    // Also walk old-path locations to give a representative count.
    for (const { root } of scopes) {
      for (const [oldDir] of Object.entries(mapping.dirMoves)) {
        const dirAbs = join(root, oldDir);
        if (!existsSync(dirAbs)) continue;
        for (const rel of walkMdx(dirAbs)) {
          const abs = join(dirAbs, rel);
          const original = readFileSync(abs, "utf8");
          const rewritten = rewriteLinks(original, urlMap);
          if (rewritten !== original) rewriteCount++;
        }
      }
    }
  }
  log(`Rewrote links in ${rewriteCount} files`);

  // Step 4: hash-map remap per locale
  log("\n=== Step 4: hash-map key renames ===");
  for (const locale of mapping.locales) {
    remapHashFile(join(docsBaseDir, locale), urlMap);
  }

  // Step 5: ensure new directories exist (mostly for empty parents pre-content)
  log("\n=== Step 5: ensure new dirs ===");
  ensureNewDirs();

  log(`\nDone. Mode: ${APPLY ? "APPLY" : "DRY-RUN"}.`);
  if (!APPLY) {
    log("Re-run with --apply to mutate the working tree.");
  }
};

main();
