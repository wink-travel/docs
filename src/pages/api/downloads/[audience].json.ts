import type { APIRoute } from 'astro';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

// Serves each ./schemas/<audience>.json snapshot verbatim as a downloadable file, so
// integrators can grab the raw OpenAPI document instead of only browsing the rendered
// reference pages. Reads from the schemas/ build artifacts directly (rather than a copy
// under public/) so a download can never drift from the snapshots in schemas/.
//
// Resolved from process.cwd(), not import.meta.url: `astro build` bundles this route
// into a chunk at a different directory depth than its source file, so a relative
// `../../../../` computed from import.meta.url resolved one directory too high in the
// production build (it only worked in dev, where nothing is bundled/moved) and made
// every request 404. astro dev/build always run with cwd at the project root.
const SCHEMAS_DIR = join(process.cwd(), 'schemas');

export function getStaticPaths() {
  return readdirSync(SCHEMAS_DIR)
    .filter((file) => file.endsWith('.json'))
    .map((file) => ({ params: { audience: file.replace(/\.json$/, '') } }));
}

export const GET: APIRoute = ({ params }) => {
  const body = readFileSync(join(SCHEMAS_DIR, `${params.audience}.json`), 'utf-8');
  return new Response(body, {
    headers: {
      'Content-Type': 'application/json',
      'Content-Disposition': `attachment; filename="${params.audience}.json"`,
    },
  });
};
