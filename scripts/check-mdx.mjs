#!/usr/bin/env node
/**
 * MDX compile guard.
 *
 * `npm run check` (astro check) passes on a `.mdx` file that cannot actually
 * compile: it does type/schema diagnostics, not a real MDX→JSX compile pass.
 * `npm run build` is the only thing that catches a malformed file, and it is
 * an 8GB, ~10 minute build most people don't run before merging. That gap let
 * an i18n sync (68f39422) merge to master with five translated `pricing.mdx`
 * files carrying unescaped `*` where the English source uses `&ast;` — MDX's
 * remark parser read those as emphasis markers spanning two separate `<span>`
 * tags, which broke `astro build` outright. It sat on master undetected until
 * someone ran a full build by hand.
 *
 * This compiles every `.mdx` file with the MDX compiler plus remark-gfm (the
 * build enables GFM; without it `~a~` strikethrough is not parsed and the
 * Korean `15~25%` variant of this bug slips through) — no other Astro
 * plugins, no schemas, no network — so it runs in under a minute with no
 * secrets required, and is viable in CI on every push and PR. Plain `.mjs`,
 * like predeploy-check.mjs: `@mdx-js/mdx` pulls in a dependency chain that
 * `tsx`'s CJS-interop require fails to resolve, where native ESM `import`
 * (this file, run directly with `node`) does not.
 *
 * Deliberately does NOT exclude locale directories the way check-claims.ts
 * does: claims content is allowed to lag English until the release-time
 * translation pass, but a file that cannot compile is broken regardless of
 * which language it's in, and translation is exactly what caused this bug.
 */
import { compile } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const DOCS = join(ROOT, "src/content/docs");

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (name.endsWith(".mdx")) out.push(full);
  }
  return out;
}

const targets = walk(DOCS);

let failures = 0;
for (const file of targets) {
  const text = readFileSync(file, "utf8");
  try {
    await compile(text, { jsx: true, remarkPlugins: [remarkGfm] });
  } catch (error) {
    failures++;
    console.error(`✗ ${relative(ROOT, file)}`);
    console.error(`    ${error.message}\n`);
  }
}

console.log(
  failures === 0
    ? `✓ mdx guard: ${targets.length} .mdx files compiled cleanly`
    : `✗ mdx guard: ${failures} of ${targets.length} .mdx files failed to compile`,
);
process.exit(failures === 0 ? 0 : 1);
