/*
 * Builds the `redirects:` object for astro.config.mjs from migration-mapping.json.
 *
 * Expands each move into per-locale entries (English + 43 locales) so any
 * pre-restructure URL — including translated variants — gets a redirect.
 *
 * For deleted docs, emits a redirect to the nearest surviving section index.
 */

import { readFileSync, readdirSync, statSync, existsSync } from "fs";
import { resolve, join, dirname, posix } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");
const docsBaseDir = join(rootDir, "src", "content", "docs");

const mapping = JSON.parse(
  readFileSync(join(__dirname, "migration-mapping.json"), "utf8")
);

// Redirect targets for deleted docs.
const deleteTargets = {
  "my-account/activity-stream": "/",
  "my-account/loyalty-points": "/",
  "my-account/notifications": "/",
  "my-account/reporting": "/portal/analytics",
  "payment/dashboard": "/portal/payment/withdraw-funds",
  "payment/receipts": "/portal/payment/withdraw-funds",
  "payment/bookings": "/portal/payment/withdraw-funds",
  "payment/what-is-trip-pay": "/",
  "payment/integration": "/",
  "payment/mapping": "/",
  "payment/verification": "/",
  "payment/tax-id": "/",
};

const walkMdx = (startDir) => {
  const out = [];
  const walk = (dir) => {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      const st = statSync(full);
      if (st.isDirectory()) walk(full);
      else if (/\.(md|mdx)$/.test(entry)) {
        const rel = full.slice(startDir.length + 1).split("\\").join("/");
        out.push(rel);
      }
    }
  };
  walk(startDir);
  return out;
};

const stripExt = (p) => p.replace(/\.(md|mdx)$/, "");

// Build core (old-path-no-ext → new-url) for English.
const core = new Map();

// dirMoves: walk the NEW dir to find files, then derive the old → new pair.
for (const [oldDir, newDir] of Object.entries(mapping.dirMoves)) {
  const newAbs = join(docsBaseDir, newDir);
  for (const rel of walkMdx(newAbs)) {
    const oldPath = stripExt(posix.join(oldDir, rel));
    const newPath = stripExt(posix.join(newDir, rel));
    core.set(oldPath, "/" + newPath);
  }
}

for (const [oldFile, newFile] of Object.entries(mapping.fileMoves)) {
  core.set(stripExt(oldFile), "/" + stripExt(newFile));
}

for (const [oldDel, target] of Object.entries(deleteTargets)) {
  core.set(oldDel, target);
}

/**
 * Astro `redirects:` config object. Keys MUST start with "/" and represent
 * the old URL; values are the destination.
 */
export function buildRedirects() {
  const out = {};
  const scopes = ["", ...mapping.locales.map((l) => `/${l}`)];

  for (const scope of scopes) {
    for (const [oldPath, dest] of core) {
      const oldUrl = `${scope}/${oldPath}`;
      // Prefix the destination with the locale scope too, unless it's already
      // an absolute redirect to "/" (the root home page).
      let scopedDest;
      if (dest === "/") {
        scopedDest = scope || "/";
      } else if (scope && dest.startsWith("/")) {
        scopedDest = `${scope}${dest}`;
      } else {
        scopedDest = dest;
      }
      out[oldUrl] = scopedDest;
    }
  }

  return out;
}

// When invoked directly, print stats so we can sanity-check.
if (import.meta.url === `file://${process.argv[1]}`) {
  const r = buildRedirects();
  console.log(`Generated ${Object.keys(r).length} redirect entries.`);
  console.log("Sample (first 5):");
  for (const [k, v] of Object.entries(r).slice(0, 5)) {
    console.log(`  ${k} -> ${v}`);
  }
}
