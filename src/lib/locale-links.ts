/**
 * Prefixes an internal href with the current page's locale, so nav/footer
 * links on a translated page point at the translated page instead of
 * silently falling back to the English default (e.g. /fr/hotels/, not
 * /hotels/, from a French page).
 *
 * Mirrors UNTRANSLATED_DIRECTORIES in scripts/translate-i18n.ts: /api,
 * /blog and /changelog are generated from upstream sources / owned by a
 * plugin and only ever exist under the English root, so they're
 * deliberately left unprefixed here too. Static files served straight out
 * of `public/` (llms.txt) aren't part of the docs collection either and
 * are excluded the same way.
 */

const UNLOCALIZED_PATH_PREFIXES = ["/api/", "/blog/", "/changelog/"];
const UNLOCALIZED_EXACT_PATHS = new Set(["/llms.txt"]);

/**
 * @param href Bare, default-locale path (e.g. "/hotels/"), or any external/mailto href.
 * @param localePrefix Starlight's `starlightRoute.locale` for the current page —
 *   `undefined` for the root (English) locale, otherwise the URL segment (e.g. "fr").
 */
export const withLocalePrefix = (href: string, localePrefix: string | undefined): string => {
  if (!localePrefix || !href.startsWith("/")) return href;
  if (UNLOCALIZED_EXACT_PATHS.has(href)) return href;
  if (UNLOCALIZED_PATH_PREFIXES.some((prefix) => href.startsWith(prefix))) return href;
  return `/${localePrefix}${href}`;
};
