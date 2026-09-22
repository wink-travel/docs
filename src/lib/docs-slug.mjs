/**
 * Strip a docs content file's extension and collapse a trailing `/index`
 * segment, case-insensitively. This is the exact rule content.config.ts's
 * `generateId` uses to turn a collection-relative file path into a route id,
 * shared here so nothing downstream (sitemap lastmod lookup, etc.) computes
 * a different route for the same file.
 */
export function toDocsId(relativePath) {
  return relativePath
    .split(".")
    .slice(0, -1)
    .join(".")
    .replace(/\/index$/i, "");
}
