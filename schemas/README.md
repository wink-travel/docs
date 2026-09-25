# Schemas

Per-audience OpenAPI snapshots consumed by `starlight-openapi` at build time. Configured in
`astro.config.mjs`.

One JSON file per audience rather than a single aggregate, so the sidebar is organised as
Audience › Resource › Operation instead of one flat 80+ tag list.

The files in this directory are the source of truth for the API reference and for the downloads
served at `/api/downloads/<audience>.json`. There is no sync script: update a snapshot by editing the
file here, and keep the audience list in `astro.config.mjs` in step when audiences are added or removed.

Audience ids match the upstream springdoc group ids one-for-one (`reference`, `user`, `extranet`,
`booking-engine`, `travel-agent`, `studio`, `social`, `link-manager`, `settings`, `payment`,
`channel-manager`, `partner`).
