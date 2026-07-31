/*
 * Copyright (c) wink.travel 2026
 */
// Fetches per-group OpenAPI schema snapshots from the springdoc endpoints and writes
// them to ./schemas/<group>.json for use by starlight-openapi at build time.
//
// We pull one document per springdoc group (e.g. /v3/api-docs/platform-analytics)
// rather than the single aggregate, so the docs sidebar is organised by audience
// instead of being one flat 80+ tag dump. The group ids here must stay in sync with
// INVENTORY_GROUPS / INTEGRATIONS_GROUPS / PARTNER_GROUPS in astro.config.mjs.
//
// Failure mode: if a fetch fails (non-2xx or network error), the existing snapshot
// is preserved so the build keeps working against the last-good copy.

import { existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

import { loadEnv } from "./load-env.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCHEMAS_DIR = resolve(__dirname, "..", "schemas");

// Must run before the WINK_* reads below.
loadEnv();

// Target environment. Choose with `--env=local|staging|production` (or `WINK_ENV`);
// defaults to production. Examples:
//   npm run schemas:sync                 # production
//   npm run schemas:sync -- --env=staging
//   npm run schemas:sync:local           # convenience script
// Per-host overrides (WINK_API_BASE / WINK_PARTNER_BASE) still win if set.
// The `local` hosts use a self-signed dev cert — point NODE_EXTRA_CA_CERTS at the dev CA
// (e.g. NODE_EXTRA_CA_CERTS=/path/to/wink.crt) rather than disabling TLS verification.
// Three source apps, each serving its own springdoc groups:
//   api          = inventory-app        (the audiences in INVENTORY_GROUPS)
//   integrations = integrations-app     (the channel-manager API; see INTEGRATIONS_GROUPS)
//   partner      = partner-app          (the Partner Integrator API; see PARTNER_GROUPS)
// partner-app is its own deployment; its per-env openapi.url is the source of truth for that host.
const ENVIRONMENTS = {
  local: {
    api: "https://dev-api.wink.travel:8443",
    integrations: "https://dev-api.wink.travel:8445",
    partner: "https://dev-api.wink.travel:8446",
  },
  staging: {
    api: "https://staging-api.wink.travel",
    integrations: "https://staging-integrations.wink.travel",
    partner: "https://staging-partner.wink.travel",
  },
  production: {
    api: "https://api.wink.travel",
    integrations: "https://integrations.wink.travel",
    partner: "https://partner.wink.travel",
  },
} as const;

type EnvName = keyof typeof ENVIRONMENTS;

const resolveEnv = (): EnvName => {
  const flag = process.argv.find((a) => a.startsWith("--env="))?.split("=")[1];
  const raw = (flag ?? process.env.WINK_ENV ?? "production").toLowerCase();
  const aliases: Record<string, EnvName> = {
    local: "local", dev: "local",
    staging: "staging", stage: "staging",
    production: "production", prod: "production",
  };
  const env = aliases[raw];
  if (!env) {
    console.error(`✗ Unknown environment "${raw}". Use one of: local, staging, production.`);
    process.exit(1);
  }
  return env;
};

const ENV = resolveEnv();
const API_BASE = process.env.WINK_API_BASE ?? ENVIRONMENTS[ENV].api;
const INTEGRATIONS_BASE = process.env.WINK_INTEGRATIONS_BASE ?? ENVIRONMENTS[ENV].integrations;
const PARTNER_BASE = process.env.WINK_PARTNER_BASE ?? ENVIRONMENTS[ENV].partner;

// springdoc audience group ids per API. Keep in sync with astro.config.mjs.
// One document per audience -> sidebar is Audience › Resource(tag) › Operation.
const INVENTORY_GROUPS: readonly string[] = [
  "reference", "extranet", "booking-engine", "studio", "social", "link-manager", "settings", "payment", "user", "travel-agent",
];

// Served by integrations-app (INTEGRATIONS_BASE). Its springdoc group is named "partner"
// (.group("partner") in IntegrationsOpenApiConfig) but the content is the channel-manager /
// vendor-integration API (/api/channel-manager/**, entity-scoped config, Google Hotel). Map it to
// the "channel-manager" audience so it does NOT collide with partner-app's Partner Integrator API.
const INTEGRATIONS_GROUPS: readonly { readonly group: string; readonly audience: string }[] = [
  { group: "partner", audience: "channel-manager" },
];

// Served by the standalone partner-app (see PARTNER_BASE), not integrations-app.
// partner-app registers its springdoc group as "integrator" (.group("integrator") in
// PartnerOpenApiConfig); the docs audience/schema file is "partner". Map the two.
const PARTNER_GROUPS: readonly { readonly group: string; readonly audience: string }[] = [
  { group: "integrator", audience: "partner" },
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
  ...INTEGRATIONS_GROUPS.map(({ group, audience }) => ({
    name: audience,
    url: `${INTEGRATIONS_BASE}/v3/api-docs/${group}`,
    outFile: `${audience}.json`,
  })),
  ...PARTNER_GROUPS.map(({ group, audience }) => ({
    name: audience,
    url: `${PARTNER_BASE}/v3/api-docs/${group}`,
    outFile: `${audience}.json`,
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
  console.log(`Syncing schemas from ${ENV}\n  api          = ${API_BASE}\n  integrations = ${INTEGRATIONS_BASE}\n  partner      = ${PARTNER_BASE}\n`);
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
