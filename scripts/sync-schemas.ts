/*
 * Copyright (c) wink.travel 2026
 */
// Fetches OpenAPI schema snapshots from production endpoints and writes them
// to ./schemas/ for use by starlight-openapi at build time.
//
// Failure mode: if a fetch fails (non-2xx or network error), the existing
// snapshot is preserved so the build keeps working against the last-good copy.

import { existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCHEMAS_DIR = resolve(__dirname, "..", "schemas");

type SchemaTarget = {
  readonly name: string;
  readonly url: string;
  readonly outFile: string;
};

const targets: readonly SchemaTarget[] = [
  {
    name: "Wink API",
    url: process.env.WINK_API_SCHEMA_URL ?? "https://api.wink.travel/v3/api-docs",
    outFile: "api.json",
  },
  {
    name: "Integrations API",
    url:
      process.env.WINK_INTEGRATIONS_SCHEMA_URL ??
      "https://integrations.wink.travel/v3/api-docs",
    outFile: "integrations.json",
  },
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
    const info = (parsed as Record<string, unknown>).info as
      | Record<string, unknown>
      | undefined;
    const version = typeof info?.version === "string" ? info.version : "?";
    const title = typeof info?.title === "string" ? info.title : "?";
    console.log(`  ✓ wrote ${target.outFile} (${title} v${version})`);
    return true;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.warn(`  ✗ ${message} — keeping existing snapshot at ${outPath}`);
    return false;
  }
};

const main = async (): Promise<void> => {
  ensureDir(SCHEMAS_DIR);
  const results = await Promise.all(targets.map(syncOne));
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
