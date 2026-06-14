# Schemas

Per-group OpenAPI snapshots consumed by `starlight-openapi` at build time. Configured in
`astro.config.mjs`.

One JSON file per springdoc group (e.g. `platform-analytics.json`) rather than a single aggregate,
so the docs sidebar is organised by audience (Platform / Supplier / Consumer / Affiliate / Account,
and the Integrations API) instead of one flat 80+ tag list. Each file is fetched from
`<host>/v3/api-docs/<group>`:

| Group prefix | Host | Plugin `base` |
| --- | --- | --- |
| `platform-*`, `supplier-*`, `consumer-*`, `affiliate-*`, `account-*` | `https://api.wink.travel` | `api/<group>` |
| `partner-*` | `https://integrations.wink.travel` | `integrations-api/<group>` |

The authoritative group list lives in `scripts/sync-schemas.ts` and `astro.config.mjs` — keep the two
in sync when groups are added or removed upstream.

## Refreshing

```bash
npm run schemas:sync
```

`scripts/sync-schemas.ts` GETs each per-group URL and overwrites the matching `<group>.json`. If a
fetch fails (non-2xx, network error, non-JSON body, missing `openapi`/`swagger` field) the existing
snapshot is left in place — the build keeps working against the last-good copy.

Override the source hosts via env to point at staging or a local dev instance:

```bash
WINK_API_BASE=https://dev-api.wink.travel:8443 \
WINK_INTEGRATIONS_BASE=https://dev-api.wink.travel:8445 \
  npm run schemas:sync
```

For a self-signed dev certificate, prefer trusting the dev CA locally; only as a last resort prefix
the command with `NODE_TLS_REJECT_UNAUTHORIZED=0` (never commit that — production sync uses fully
verified HTTPS).

## Do not hand-edit

These files are generated. Edits will be overwritten on the next sync. If a schema needs to change,
fix it upstream and re-sync.
