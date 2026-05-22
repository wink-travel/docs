# Schemas

OpenAPI snapshots consumed by `starlight-openapi` at build time. Configured in `astro.config.mjs`.

| File | Source URL | Plugin `base` |
| --- | --- | --- |
| `api.json` | `https://api.wink.travel/v3/api-docs` | `api` |
| `integrations.json` | `https://integrations.wink.travel/v3/api-docs` | `integrations-api` |

## Refreshing

```bash
npm run schemas:sync
```

`scripts/sync-schemas.ts` GETs each URL and overwrites the matching JSON file. If a fetch fails (non-2xx, network error, non-JSON body, missing `openapi`/`swagger` field) the existing snapshot is left in place — the build keeps working against the last-good copy.

Override the source URLs via env if you need to point at staging:

```bash
WINK_API_SCHEMA_URL=https://staging.api.wink.travel/v3/api-docs \
WINK_INTEGRATIONS_SCHEMA_URL=https://staging.integrations.wink.travel/v3/api-docs \
  npm run schemas:sync
```

## Do not hand-edit

These files are generated. Edits will be overwritten on the next sync. If a schema needs to change, fix it upstream and re-sync.

## `api.json` stub

`api.json` currently ships as a minimal valid OpenAPI 3.1 stub because the upstream `https://api.wink.travel/v3/api-docs` endpoint was returning HTTP 500 when this directory was seeded. Re-run `npm run schemas:sync` once upstream is healthy to replace it with the real spec.
