/*
 * Copyright (c) wink.travel 2026
 */
// Fetches per-group OpenAPI schema snapshots from the springdoc endpoints and writes
// them to ./schemas/<group>.json for use by starlight-openapi at build time.
//
// We pull one document per springdoc group (e.g. /v3/api-docs/platform-analytics)
// rather than the single aggregate, so the docs sidebar is organised by audience
// instead of being one flat 80+ tag dump. The group ids here must stay in sync with
// INVENTORY_GROUPS / INTEGRATIONS_GROUPS in astro.config.mjs.
//
// Failure mode: if a fetch fails (non-2xx or network error), the existing snapshot
// is preserved so the build keeps working against the last-good copy.

import { existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCHEMAS_DIR = resolve(__dirname, "..", "schemas");

// Base hosts that serve `/v3/api-docs/<group>`. Override via env to point at staging
// or a local dev instance, e.g.
//   WINK_API_BASE=https://dev-api.wink.travel:8443 \
//   WINK_INTEGRATIONS_BASE=https://dev-api.wink.travel:8445 npm run schemas:sync
// (for a self-signed dev cert also set NODE_TLS_REJECT_UNAUTHORIZED=0).
const API_BASE = process.env.WINK_API_BASE ?? "https://api.wink.travel";
const INTEGRATIONS_BASE =
  process.env.WINK_INTEGRATIONS_BASE ?? "https://integrations.wink.travel";

// springdoc group ids per API. Keep in sync with astro.config.mjs.
const INVENTORY_GROUPS: readonly string[] = [
  "platform-analytics", "platform-user-settings", "platform-managing-entity",
  "platform-ping", "platform-reference", "platform-public", "platform-misc",
  "supplier-property", "supplier-property-register", "supplier-facilities",
  "supplier-experiences", "supplier-monetize", "supplier-inventory-distribution",
  "supplier-booking", "supplier-profile",
  "consumer-booking", "consumer-inventory", "consumer-engine",
  "consumer-travel-agent", "consumer-account",
  "affiliate-browse", "affiliate-inventory-curation", "affiliate-shareable-link",
  "affiliate-lists", "affiliate-social", "affiliate-sales-channel",
  "affiliate-reporting", "affiliate-winklinks",
  "account-payment", "account-booking", "account-settings",
];

const INTEGRATIONS_GROUPS: readonly string[] = [
  "partner-channel-manager", "partner-services", "partner-channel-manager-account",
  "partner-google", "partner-ping",
];

type SchemaTarget = {
  readonly name: string;
  readonly url: string;
  readonly outFile: string;
};

const targets: readonly SchemaTarget[] = [
  ...INVENTORY_GROUPS.map((group) => ({
    name: group,
    url: `${API_BASE}/v3/api-docs/${group}`,
    outFile: `${group}.json`,
  })),
  ...INTEGRATIONS_GROUPS.map((group) => ({
    name: group,
    url: `${INTEGRATIONS_BASE}/v3/api-docs/${group}`,
    outFile: `${group}.json`,
  })),
];

const ensureDir = (dir: string): void => {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
};

const isOpenApiDoc = (value: unknown): boolean => {
  if (typeof value !== "object" || value === null) return false;
  const obj = value as Record<string, unknown>;
  return typeof obj.openapi === "string" || typeof obj.swagger === "string";
};

const syncOne = async (target: SchemaTarget): Promise<boolean> => {
  const outPath = resolve(SCHEMAS_DIR, target.outFile);
  process.stdout.write(`→ ${target.name}: GET ${target.url}\n`);
  try {
    const res = await fetch(target.url, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) {
      console.warn(
        `  ✗ HTTP ${res.status} ${res.statusText} — keeping existing snapshot at ${outPath}`
      );
      return false;
    }
    const body = await res.text();
    let parsed: unknown;
    try {
      parsed = JSON.parse(body);
    } catch {
      console.warn(`  ✗ Response was not valid JSON — keeping existing snapshot`);
      return false;
    }
    if (!isOpenApiDoc(parsed)) {
      console.warn(
        `  ✗ Response does not look like an OpenAPI/Swagger doc — keeping existing snapshot`
      );
      return false;
    }
    const pretty = JSON.stringify(parsed, null, 2) + "\n";
    writeFileSync(outPath, pretty, "utf8");
    const paths = (parsed as Record<string, unknown>).paths as
      | Record<string, unknown>
      | undefined;
    const count = paths ? Object.keys(paths).length : 0;
    console.log(`  ✓ wrote ${target.outFile} (${count} path(s))`);
    return true;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.warn(`  ✗ ${message} — keeping existing snapshot at ${outPath}`);
    return false;
  }
};

const main = async (): Promise<void> => {
  ensureDir(SCHEMAS_DIR);
  // Sequential to keep the log readable and avoid hammering the backend.
  const results: boolean[] = [];
  for (const target of targets) {
    results.push(await syncOne(target));
  }
  const okCount = results.filter(Boolean).length;
  console.log(`\nDone: ${okCount}/${targets.length} schemas refreshed.`);
  if (okCount < targets.length) {
    console.log(
      "Note: failed fetches do not overwrite existing snapshots. Re-run when upstream recovers."
    );
  }
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
