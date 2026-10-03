/**
 * Guards for AI-translated MDX. The translator is told to preserve markup
 * exactly, but it still rewrites markdown-sensitive characters:
 *   - `&ast;` (a footnote marker) becomes a raw `*`, which MDX then pairs into
 *     an emphasis span crossing a `</span>` boundary;
 *   - the range "15–25%" becomes `15~25%`, which pairs with an earlier `~15%`
 *     into a strikethrough span that crosses a `</span>` boundary.
 * Either one breaks `astro build` for the whole site, one locale at a time.
 *
 * Plain `.mjs` (not `.ts`) so `node --test` can import it directly and so
 * `@mdx-js/mdx` loads through native ESM — see the note in check-mdx.mjs about
 * tsx's CJS interop failing to resolve it.
 */

const AST_ENTITY = "&ast;";
// A single `*` that is neither half of `**` bold nor part of a `/* ... */` JSX comment delimiter.
const LONE_ASTERISK = /(?<![*/])\*(?![*/])/g;
const DIGIT_TILDE_DIGIT = /(\d)~(?=\d)/g;

/**
 * Puts `&ast;` back wherever the English source used it and the translation
 * replaced it with a raw `*`.
 *
 * Same line count: aligns by line index. Different line count (the model
 * sometimes drops or merges a line, which used to leave every raw `*` in
 * place and fail the compile on both attempts): falls back to restoring every
 * line holding a lone `*`, but only when that is unambiguous — the source has
 * no lone `*` of its own (no real italics to protect) and the number of such
 * translated lines equals the number of source lines using `&ast;`. Anything
 * else is returned unchanged for the MDX compile check to catch.
 */
export function restoreAstEntities(source, translated) {
  const sourceLines = source.split("\n");
  const translatedLines = translated.split("\n");
  const restore = (line) => line.replace(LONE_ASTERISK, AST_ENTITY);

  if (sourceLines.length === translatedLines.length) {
    return translatedLines
      .map((line, i) => (sourceLines[i].includes(AST_ENTITY) ? restore(line) : line))
      .join("\n");
  }

  const hasLoneAsterisk = (line) => new RegExp(LONE_ASTERISK.source).test(line);
  if (sourceLines.some(hasLoneAsterisk)) return translated;
  const expected = sourceLines.filter((line) => line.includes(AST_ENTITY)).length;
  const actual = translatedLines.filter(hasLoneAsterisk).length;
  if (expected === 0 || expected !== actual) return translated;

  return translatedLines.map((line) => (hasLoneAsterisk(line) ? restore(line) : line)).join("\n");
}

/**
 * Rewrites `15~25%` to `15–25%` (en dash). Some languages, Korean especially,
 * write numeric ranges with a tilde, and two tildes in one paragraph render as
 * strikethrough. Skipped when the source itself uses a digit~digit range.
 */
export function normalizeDigitTildeRanges(source, translated) {
  if (/\d~\d/.test(source)) return translated;
  return translated.replace(DIGIT_TILDE_DIGIT, "$1–");
}

/**
 * Compiles `text` with the MDX compiler plus remark-gfm. GFM matters: Astro's
 * pipeline enables it, and the bare compiler does not parse `~text~`
 * strikethrough, so without it the tilde bug above compiles "cleanly" here and
 * only fails in `astro build`. Returns `{ ok: true }` or `{ ok: false, error }`
 * — never throws on bad MDX.
 */
export async function validateMdx(text) {
  const { compile } = await import("@mdx-js/mdx");
  const { default: remarkGfm } = await import("remark-gfm");
  try {
    await compile(text, { jsx: true, remarkPlugins: [remarkGfm] });
    return { ok: true };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : String(error) };
  }
}
