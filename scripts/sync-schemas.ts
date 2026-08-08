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
// Failure mode: if a fetch fails (network error, 5xx, unparseable body), the existing
// snapshot is preserved so the build keeps working against the last-good copy, and the
// run still exits 0 — a backend restarting should not block a docs build.
//
// A 404 is treated differently and FAILS the run: springdoc serves a document for every
// registered group, so a 404 means the group id below no longer exists upstream. That is
// config drift, never transient, and silently keeping the old snapshot is how the site
// ends up publishing a months-old copy of an API that has since been renamed.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
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

// Served by integrations-app (INTEGRATIONS_BASE): the channel-manager / vendor-integration API
// (/api/channel-manager/**, entity-scoped config, Google Hotel).
//
// The backend group was renamed "partner" -> "channel-manager" (IntegrationsOpenApiConfig
// #channelManagerApi) so the group id matches the paths it documents and no longer collides with
// partner-app's Partner Integrator API. The group/audience remapping this pair used to perform now
// happens at the source, so both sides are identical -- keep the shape anyway, because it is what
// makes a future divergence a one-line change instead of a refactor.
const INTEGRATIONS_GROUPS: readonly { readonly group: string; readonly audience: string }[] = [
  { group: "channel-manager", audience: "channel-manager" },
];

// Served by the standalone partner-app (see PARTNER_BASE), not integrations-app. Renamed from
// "integrator" to "partner" backend-side (PartnerGrpcOpenApiConfig#GRPC_GROUP) once
// "partner" was freed up above.
//
// NOTE: this document now describes partner-app's gRPC surface, generated from the protobuf
// descriptors -- not the REST controllers under /api/partner/**, whose springdoc group was removed.
// The REST endpoints are still served; they are simply no longer documented, because gRPC is the
// transport integrators should build against and the REST controllers go away at cutover. Expect
// the refreshed snapshot to be far smaller and to contain gRPC-style paths
// (/wink.grpc.v1.Service/Method).
const PARTNER_GROUPS: readonly { readonly group: string; readonly audience: string }[] = [
  { group: "partner", audience: "partner" },
];

// A schema comes from one of two places, and the difference is architectural rather than incidental.
//
//   "url"  — springdoc assembles the document by scanning a RUNNING app's handler mappings, so the only
//            way to obtain it is to ask a deployment for it.
//   "file" — the document is a BUILD artifact of the code it describes, so no deployment is involved.
//
// partner-app is the second kind and is the reason this distinction exists. It is becoming gRPC-only;
// Cloud Run exposes one port, so once Netty takes it there is no servlet left to serve /v3/api-docs and a
// fetch-based sync would break exactly when the migration completes. Its spec is generated from the
// protobuf descriptors by PartnerOpenApiSpecWriter in monorepo-java (open-api/open-api-grpc).
type SchemaSource =
  | { readonly kind: "url"; readonly url: string }
  | { readonly kind: "file"; readonly path: string };

type SchemaTarget = {
  readonly name: string;
  readonly source: SchemaSource;
  readonly outFile: string;
};

const optionalEnvPath = (name: string, fallback: string): string => {
  const value = process.env[name];
  return value && value.trim().length > 0 ? value : fallback;
};

// Where monorepo-java is checked out, for the file-sourced schemas below. Override with
// WINK_MONOREPO_PATH when the two repos are not siblings; an absolute value wins, as resolve() gives
// an absolute segment precedence.
const MONOREPO_PATH = resolve(
  __dirname, "..", optionalEnvPath("WINK_MONOREPO_PATH", "../monorepo-java")
);

// The generated Partner document. NOT committed -- it is build output under target/, and monorepo-java
// gitignores that. Run this first, in the monorepo checkout:
//
//   mvnd package -pl open-api/open-api-grpc -DskipTests
//
// The file that IS committed there is the golden TEST fixture, built with placeholder values on
// purpose; publishing it would put "0.0.0-TEST" on the version badge, which persist() refuses to do.
const PARTNER_SCHEMA_FILE = resolve(
  MONOREPO_PATH, "open-api/open-api-grpc/target/openapi/partner.json"
);

// integrations-app's channel-manager document, generated the same way but by a different mechanism: a
// Spring MVC surface has no descriptor, so springdoc reads the annotations from a hand-assembled web
// context in IntegrationsOpenApiSpecWriterTest. Produced by SUREFIRE, so a `-DskipTests` build does not
// create it -- see the OpenAPI schema artifacts section in monorepo-java's CLAUDE.md.
const INTEGRATIONS_SCHEMA_DIR = resolve(MONOREPO_PATH, "apps/integrations-app/target/openapi");

const targets: readonly SchemaTarget[] = [
  ...INVENTORY_GROUPS.map((group) => ({
    name: group,
    source: { kind: "url" as const, url: `${API_BASE}/v3/api-docs/${group}` },
    outFile: `${group}.json`,
  })),
  // Read, not fetched -- same reasoning as partner below. INTEGRATIONS_BASE is deliberately unused.
  ...INTEGRATIONS_GROUPS.map(({ group, audience }) => ({
    name: audience,
    source: {
      kind: "file" as const,
      path: resolve(INTEGRATIONS_SCHEMA_DIR, `${group}.json`),
    },
    outFile: `${audience}.json`,
  })),
  // Read, not fetched, so PARTNER_BASE is deliberately unused here -- see SchemaSource. This works for
  // any commit without deploying it, but it does require that commit to have been BUILT: the file lives
  // under target/ and is not committed.
  ...PARTNER_GROUPS.map(({ audience }) => ({
    name: audience,
    source: { kind: "file" as const, path: PARTNER_SCHEMA_FILE },
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

// Distinguishes "upstream is having a moment" from "our config is wrong". Both keep the existing
// snapshot, but only the second is a bug we must not ship past.
type SyncResult = "refreshed" | "stale" | "unknown-group";

/**
 * The version PartnerOpenApiDocumentTest builds its golden fixture with. Matched exactly rather than by
 * substring: a real version is a semver from ${revision}, and a loose `includes("TEST")` would reject a
 * legitimate one that happened to contain it.
 */
const GOLDEN_FIXTURE_VERSION = "0.0.0-TEST";

/** Validates and writes one already-fetched/read document. Shared by both source kinds. */
const persist = (target: SchemaTarget, outPath: string, body: string): SyncResult => {
  let parsed: unknown;
  try {
    parsed = JSON.parse(body);
  } catch {
    console.warn(`  ✗ Not valid JSON — keeping existing snapshot`);
    return "stale";
  }
  if (!isOpenApiDoc(parsed)) {
    console.warn(`  ✗ Does not look like an OpenAPI/Swagger doc — keeping existing snapshot`);
    return "stale";
  }
  // The golden test fixture is deliberately built with placeholder values so a version bump does not
  // re-record it. Publishing that file instead of the real build output would put "0.0.0-TEST" on the
  // docs site's version badge and a fake issuer in the Authentication section.
  const info = (parsed as Record<string, unknown>).info as Record<string, unknown> | undefined;
  if (typeof info?.version === "string" && info.version === GOLDEN_FIXTURE_VERSION) {
    console.error(
      `  ✗ info.version is "${info.version}" — that is the golden TEST fixture, not the published build\n` +
      `    output. Read ${PARTNER_SCHEMA_FILE}, not src/test/resources.`
    );
    return "unknown-group";
  }
  const pretty = JSON.stringify(parsed, null, 2) + "\n";
  writeFileSync(outPath, pretty, "utf8");
  const paths = (parsed as Record<string, unknown>).paths as Record<string, unknown> | undefined;
  console.log(`  ✓ wrote ${target.outFile} (${paths ? Object.keys(paths).length : 0} path(s))`);
  return "refreshed";
};

/**
 * Reads a build-generated schema off disk.
 *
 * A missing file is treated like a 404, not like a network blip: it means the generator moved, was
 * renamed, or was never run for this checkout. That is config drift, never transient, and quietly keeping
 * the previous snapshot is how the site publishes a stale contract without saying so.
 */
const syncFromFile = (target: SchemaTarget, path: string, outPath: string): SyncResult => {
  process.stdout.write(`→ ${target.name}: READ ${path}\n`);
  if (!existsSync(path)) {
    console.error(
      `  ✗ No such file. This schema is generated by monorepo-java, not served by an app.\n` +
      `    Generate it with:\n` +
      `      mvnd package -pl open-api/open-api-grpc -DskipTests\n` +
      `    or point WINK_MONOREPO_PATH at your checkout. Keeping ${outPath}, but this run will fail.`
    );
    return "unknown-group";
  }
  try {
    return persist(target, outPath, readFileSync(path, "utf8"));
  } catch (err) {
    console.warn(`  ✗ ${err instanceof Error ? err.message : String(err)} — keeping existing snapshot`);
    return "stale";
  }
};

const syncOne = async (target: SchemaTarget): Promise<SyncResult> => {
  const outPath = resolve(SCHEMAS_DIR, target.outFile);
  if (target.source.kind === "file") {
    return syncFromFile(target, target.source.path, outPath);
  }
  const url = target.source.url;
  process.stdout.write(`→ ${target.name}: GET ${url}\n`);
  try {
    const res = await fetch(url, {
      headers: { Accept: "application/json" },
    });
    if (res.status === 404) {
      // springdoc serves a document for every registered group, so a 404 means the group id in
      // this file no longer exists upstream — a rename or a removed GroupedOpenApi bean. That is
      // never transient, and treating it as a warning is how the docs site silently serves a
      // months-old snapshot of an API that has since changed.
      console.error(
        `  ✗ HTTP 404 — no springdoc group at this URL. The group id in sync-schemas.ts is stale;\n` +
        `    check the GroupedOpenApi beans in monorepo-java (open-api/**, apps/*/config).\n` +
        `    Keeping the existing snapshot at ${outPath}, but this run will fail.`
      );
      return "unknown-group";
    }
    if (!res.ok) {
      console.warn(
        `  ✗ HTTP ${res.status} ${res.statusText} — keeping existing snapshot at ${outPath}`
      );
      return "stale";
    }
    return persist(target, outPath, await res.text());
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.warn(`  ✗ ${message} — keeping existing snapshot at ${outPath}`);
    return "stale";
  }
};

const main = async (): Promise<void> => {
  // partner prints its FILE, not PARTNER_BASE. Printing a host it no longer reads would suggest the
  // --env flag still selects the Partner source, which is exactly the confusion warned about below.
  console.log(
    `Syncing schemas from ${ENV}\n` +
    `  api          = ${API_BASE}\n` +
    `  integrations = ${INTEGRATIONS_SCHEMA_DIR} (build output, environment-independent)\n` +
    `  partner      = ${PARTNER_SCHEMA_FILE} (build output, environment-independent)\n`
  );

  // The Partner document is environment-INDEPENDENT, and silently so before this warning existed.
  // open-api-grpc's exec plugin builds it with the production issuer hardcoded, so `--env=staging`
  // still yields production token URLs in the Authentication section. That is correct for publishing
  // (the docs site documents production) but it means the flag does nothing for this one target, and a
  // reader running schemas:sync:staging would reasonably assume otherwise.
  if (ENV !== "production") {
    console.warn(
      `⚠ partner and integrations are read from build artifacts and ignore --env=${ENV}. Its Authentication section\n` +
      `  always carries the PRODUCTION issuer, because that is what open-api-grpc's exec plugin bakes\n` +
      `  in. Only the ${ENV} API and integrations schemas below are actually ${ENV}.\n`
    );
  }
  ensureDir(SCHEMAS_DIR);
  // Sequential to keep the log readable and avoid hammering the backend.
  const results: SyncResult[] = [];
  for (const target of targets) {
    results.push(await syncOne(target));
  }
  const okCount = results.filter((r) => r === "refreshed").length;
  const unknownGroups = results.filter((r) => r === "unknown-group").length;
  console.log(`\nDone: ${okCount}/${targets.length} schemas refreshed.`);
  if (okCount < targets.length) {
    console.log(
      "Note: failed fetches do not overwrite existing snapshots. Re-run when upstream recovers."
    );
  }
  if (unknownGroups > 0) {
    // Exit non-zero so a group rename cannot slip through a green run. Transient failures still
    // exit 0 — the point is to fail on config drift, not on a backend restarting.
    console.error(
      `\n✗ ${unknownGroups} group id(s) no longer exist upstream. Fix the ids in this file before ` +
      `publishing; the site would otherwise build against stale snapshots without saying so.`
    );
    process.exit(1);
  }
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
