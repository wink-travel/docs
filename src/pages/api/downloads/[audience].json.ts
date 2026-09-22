import type { APIRoute } from 'astro';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Serves each ./schemas/<audience>.json snapshot verbatim as a downloadable file, so
// integrators can grab the raw OpenAPI document instead of only browsing the rendered
// reference pages. Reads from the schemas/ build artifacts directly (rather than a copy
// under public/) so a download can never drift from what npm run schemas:sync last wrote.
const SCHEMAS_DIR = fileURLToPath(new URL('../../../../schemas/', import.meta.url));

export function getStaticPaths() {
  return readdirSync(SCHEMAS_DIR)
    .filter((file) => file.endsWith('.json'))
    .map((file) => ({ params: { audience: file.replace(/\.json$/, '') } }));
}

export const GET: APIRoute = ({ params }) => {
  const body = readFileSync(`${SCHEMAS_DIR}${params.audience}.json`, 'utf-8');
  return new Response(body, {
    headers: {
      'Content-Type': 'application/json',
      'Content-Disposition': `attachment; filename="${params.audience}.json"`,
    },
  });
};
