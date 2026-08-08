# Schemas

Per-audience OpenAPI snapshots consumed by `starlight-openapi` at build time. Configured in
`astro.config.mjs`.

One JSON file per audience rather than a single aggregate, so the sidebar is organised as
Audience › Resource › Operation instead of one flat 80+ tag list.

| File | Produced by | Source app |
| --- | --- | --- |
| `reference`, `user`, `extranet`, `booking-engine`, `travel-agent`, `studio`, `social`, `link-manager`, `settings`, `payment` | `InventoryOpenApiSpecWriterTest` (surefire) | inventory-app |
| `channel-manager` | `IntegrationsOpenApiSpecWriterTest` (surefire) | integrations-app |
| `partner` | `PartnerOpenApiSpecWriter` (`exec:java` at `package`) | partner-app (gRPC, from protobuf descriptors) |

The authoritative group list lives in `scripts/sync-schemas.ts` and `astro.config.mjs` — keep the two in
sync when audiences are added or removed upstream.

## Nothing is fetched

These used to be pulled from a running deployment's `/v3/api-docs/<group>`. That failed in two ways and we
hit both:

- **It documents the last DEPLOY, not the code, and silently.** Production served the Partner spec with 2
  paths and 6 schemas for months while the code had 13 and 57. Nothing could distinguish "this API is
  small" from "this snapshot is old".
- **The snapshot carries whatever environment it was taken against.** Every schema except `partner` spent
  months telling integrators to authenticate at `https://dev-iam.wink.travel:9000/oauth2/token` and call
  hosts unreachable from outside the network, because someone synced against dev and committed it.

Every document is now a **build artifact** of the code it describes: generated with production values,
environment-independent by construction. There is no `--env` flag and no host to get wrong.

## Refreshing

Build the inputs in the monorepo checkout first. The springdoc generators stamp a placeholder version
unless asked for the real one, and the sync **rejects** a placeholder rather than putting `0.0.0-TEST` on
the docs version badge:

```bash
# in ../monorepo-java
mvnd test -pl apps/inventory-app,apps/integrations-app \
  -Dinventory.openapi.version=$(mvnd help:evaluate -Dexpression=project.version -q -DforceStdout) \
  -Dintegrations.openapi.version=$(mvnd help:evaluate -Dexpression=project.version -q -DforceStdout)
mvnd package -pl open-api/open-api-grpc -DskipTests   # partner bakes the version in automatically
```

Then, here:

```bash
npm run schemas:sync
```

Set `WINK_MONOREPO_PATH` if the two repos are not siblings.

A missing or placeholder input **fails the run** rather than quietly keeping the previous snapshot — that
is how a site ends up publishing a months-old contract without saying so.

## Expect one large, empty diff per surface

The generators canonicalise their output (schema properties are otherwise emitted in JVM reflection order,
which is not stable between builds). The first sync after a surface adopts canonicalisation reorders a lot
of lines while changing nothing: 11 of `channel-manager`'s 13 schemas moved. Confirm a diff is empty with a
deep key-sorted comparison, never a line count.

## Do not hand-edit

These files are generated. Edits will be overwritten on the next sync. If a schema needs to change, fix it
upstream and re-sync.
