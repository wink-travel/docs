/*
 * Complete the v2 migration: simple "app/" → "portal/" prefix substitution.
 * Idempotent — safe to run multiple times.
 *
 * Also moves services/agency/what-is-agency.mdx → guides/hoteliers/creator-agency.mdx
 * and removes empty services/ dirs.
 */

import {
  existsSync,
  readFileSync,
  writeFileSync,
  readdirSync,
  statSync,
  mkdirSync,
  renameSync,
  rmdirSync,
} from "fs";
import { resolve, join, dirname, relative, posix } from "path";
import { fileURLToPath } from "url";
import { execFileSync } from "child_process";

const here = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(here, "..");
const docsBaseDir = join(rootDir, "src", "content", "docs");

const v1Mapping = JSON.parse(readFileSync(join(here, "migration-mapping.json"), "utf8"));
const locales: string[] = v1Mapping.locales;
const scopes = [docsBaseDir, ...locales.map((l) => join(docsBaseDir, l))];

const isTracked = (path: string): boolean => {
  try {
    execFileSync("git", ["ls-files", "--error-unmatch", path], {
      cwd: rootDir,
      stdio: "ignore",
    });
    return true;
  } catch {
    return false;
  }
};

const moveFile = (from: string, to: string): void => {
  mkdirSync(dirname(to), { recursive: true });
  if (isTracked(from)) {
    execFileSync("git", ["mv", from, to], { cwd: rootDir });
  } else {
    renameSync(from, to);
  }
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

// ── Step 1: move remaining app/* → portal/* for English + each locale ─────
let moveCount = 0;
for (const scope of scopes) {
  const appDir = join(scope, "app");
  if (!existsSync(appDir)) continue;
  for (const rel of walkMdx(appDir)) {
    const from = join(appDir, rel);
    const to = join(scope, "portal", rel);
    moveFile(from, to);
    moveCount++;
  }
}
console.log(`Moved ${moveCount} app→portal files`);

// ── Step 2: move services/agency/what-is-agency.mdx → guides/hoteliers/creator-agency.mdx
let agencyMoveCount = 0;
for (const scope of scopes) {
  const from = join(scope, "services/agency/what-is-agency.mdx");
  const to = join(scope, "guides/hoteliers/creator-agency.mdx");
  if (!existsSync(from)) continue;
  moveFile(from, to);
  agencyMoveCount++;
}
console.log(`Moved ${agencyMoveCount} agency files`);

// ── Step 3: rewrite all /app/ → /portal/ and the agency link target ───────
// Also normalize: /services/agency/what-is-agency → /guides/hoteliers/creator-agency.
const allFiles = walkMdx(docsBaseDir);
let rewriteCount = 0;
for (const rel of allFiles) {
  const abs = join(docsBaseDir, rel);
  const original = readFileSync(abs, "utf8");
  let updated = original;

  // /app/ → /portal/ (URL boundary preserved)
  updated = updated.replace(/(\/)(app)(?=\/)/g, (_full, slash) => `${slash}portal`);

  // /services/agency/what-is-agency[ /#? ] → /guides/hoteliers/creator-agency
  updated = updated.replace(
    /(\/)services\/agency\/what-is-agency(?=[/)#"'?\s]|$)/g,
    (_full, slash) => `${slash}guides/hoteliers/creator-agency`
  );

  if (updated !== original) {
    writeFileSync(abs, updated, "utf8");
    rewriteCount++;
  }
}
console.log(`Rewrote links in ${rewriteCount} files`);

// ── Step 4: remap hash-map keys: "app/" → "portal/", agency rename ───────
for (const locale of locales) {
  const hashPath = join(docsBaseDir, locale, ".file.hashes.json");
  if (!existsSync(hashPath)) continue;
  const original: Record<string, string> = JSON.parse(readFileSync(hashPath, "utf8"));
  const updated: Record<string, string> = {};
  let renamed = 0;
  for (const [key, value] of Object.entries(original)) {
    let newKey = key;
    if (key.startsWith("app/")) {
      newKey = "portal/" + key.slice("app/".length);
    } else if (key === "services/agency/what-is-agency.mdx") {
      newKey = "guides/hoteliers/creator-agency.mdx";
    }
    updated[newKey] = value;
    if (newKey !== key) renamed++;
  }
  if (renamed > 0) {
    writeFileSync(hashPath, JSON.stringify(updated, null, 2) + "\n", "utf8");
  }
}
console.log(`Hash maps remapped across ${locales.length} locales`);

// ── Step 5: remove empty app/ and services/ dirs ──────────────────────────
const removeEmptyRecursive = (dir: string): void => {
  if (!existsSync(dir)) return;
  const entries = readdirSync(dir);
  for (const e of entries) {
    const full = join(dir, e);
    if (statSync(full).isDirectory()) removeEmptyRecursive(full);
  }
  if (readdirSync(dir).length === 0) {
    try {
      rmdirSync(dir);
    } catch {
      /* ignore */
    }
  }
};
for (const scope of scopes) {
  removeEmptyRecursive(join(scope, "app"));
  removeEmptyRecursive(join(scope, "services"));
}

console.log("Done.");
