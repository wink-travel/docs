/*
 * Fixes broken internal links across all .md/.mdx files in src/content/docs/.
 * The fix table maps an old URL pattern → a new URL.
 *
 * Each replacement is anchored at the start of a URL substring (preceded by "/"),
 * preserving any locale prefix (e.g. /fr/developers/apis → /fr/api).
 *
 * Patterns are applied in order — most specific FIRST.
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "fs";
import { resolve, join, dirname } from "path";
import { fileURLToPath } from "url";

const here = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(here, "..");
const docsBaseDir = join(rootDir, "src", "content", "docs");

// Order matters: more specific patterns first.
const fixes = [
  // Channel Manager API was a section of the deleted /developers/apis doc.
  // It maps to the separate OpenAPI plugin route.
  { from: "/developers/apis/#channel-manager-api", to: "/integrations-api" },
  // All other /developers/apis/#... anchors point to sections of the deleted
  // file. The OpenAPI Platform reference is the closest replacement.
  { from: "/developers/apis/#analytics-api", to: "/api" },
  { from: "/developers/apis/#experiences-api", to: "/api" },
  { from: "/developers/apis/#monetize-api", to: "/api" },
  { from: "/developers/apis/#property-booking-api", to: "/api" },
  { from: "/developers/apis/#facilities-api", to: "/api" },
  { from: "/developers/apis/#distribution-api", to: "/api" },
  { from: "/developers/apis/#inventory-api", to: "/api" },
  { from: "/developers/apis/#winklinks-api", to: "/api" },
  { from: "/developers/apis/#affiliate-api", to: "/api" },
  { from: "/developers/apis/#travel-agent-api", to: "/api" },
  { from: "/developers/apis/#sales-channel-api", to: "/api" },
  { from: "/developers/apis/#browse-api", to: "/api" },
  { from: "/developers/apis/#payment-api", to: "/api" },
  // Bare /developers/apis → /api/
  { from: "/developers/apis", to: "/api" },
  // /developers/applications was deleted long ago. The current docs for OAuth
  // app creation live under app settings.
  { from: "/developers/applications", to: "/app/settings/applications" },
  // /studio/customization was always broken — the customization feature is
  // now app/settings/branding.
  { from: "/studio/customization", to: "/app/settings/branding" },
  // /my-account/customizations (plural typo) → same target.
  { from: "/my-account/customizations", to: "/app/settings/branding" },
  // /my-account/create-an-account → /app/create-account.
  { from: "/my-account/create-an-account", to: "/app/create-account" },
  // /managed-social/what-is-managed-social → /app/social/what-is-social.
  { from: "/managed-social/what-is-managed-social", to: "/app/social/what-is-social" },
  // /user/* legacy URLs.
  { from: "/user/invites", to: "/app/invite" },
  { from: "/user/register", to: "/account/register" },
  { from: "/user/analytics", to: "/app/analytics" },
  // /studio/agency-representation → /app/settings/agency-representation.
  { from: "/studio/agency-representation", to: "/app/settings/agency-representation" },
  // URL-encoded filename from a guide that previously had a space.
  { from: "/guides/finding%20an-influencer", to: "/guides/hoteliers/finding-an-influencer" },
];

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

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

const applyFixes = (content) => {
  let out = content;
  for (const { from, to } of fixes) {
    // Match "/<from>" preceded by anything, followed by a URL boundary.
    // We strip the leading "/" from `from` to make the regex robust to
    // locale prefixes like /fr/developers/apis.
    const stripped = from.replace(/^\//, "");
    const re = new RegExp(`(/)(${escapeRegex(stripped)})(?=[/)#"'?\\s]|$)`, "g");
    out = out.replace(re, (_full, slash) => `${slash}${to.replace(/^\//, "")}`);
  }
  return out;
};

const all = walkMdx(docsBaseDir);
let fixedCount = 0;
for (const rel of all) {
  const abs = join(docsBaseDir, rel);
  const original = readFileSync(abs, "utf8");
  const updated = applyFixes(original);
  if (updated !== original) {
    writeFileSync(abs, updated, "utf8");
    fixedCount++;
  }
}
console.log(`Fixed broken links in ${fixedCount} files`);
