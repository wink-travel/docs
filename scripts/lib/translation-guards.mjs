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
// A single `*` that is neither half of `**` bold nor already part of an entity.
const LONE_ASTERISK = /(?<!\*)\*(?!\*)/g;
const DIGIT_TILDE_DIGIT = /(\d)~(?=\d)/g;

/**
 * Puts `&ast;` back on every line where the English source used it and the
 * translation replaced it with a raw `*`. Aligns by line index, so it only
 * acts when source and translation have the same number of lines; otherwise
 * it returns the translation unchanged and leaves the MDX compile check to
 * catch anything that broke.
 */
export function restoreAstEntities(source, translated) {
  const sourceLines = source.split("\n");
  const translatedLines = translated.split("\n");
  if (sourceLines.length !== translatedLines.length) return translated;

  return translatedLines
    .map((line, i) =>
      sourceLines[i].includes(AST_ENTITY) ? line.replace(LONE_ASTERISK, AST_ENTITY) : line,
    )
    .join("\n");
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
