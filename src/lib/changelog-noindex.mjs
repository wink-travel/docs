/**
 * Which pages are kept out of search: every page under `/changelog/`, in every
 * locale, gets `noindex,nofollow` and is left out of the sitemap.
 *
 * The changelogs only show recent release entries (`keepRecent(...)` in
 * src/content.config.ts retires older application and platform releases on
 * every release), so they are not pages worth ranking. This deliberately
 * covers partner-api and the hand-authored overview too: partner-api's old
 * `/version/<tag>` pages stay reachable for integrators pinned to a tag, they
 * just aren't submitted for indexing.
 *
 * Shared by astro.config.mjs's sitemap filter and custom-head.astro's robots
 * meta so the two can't drift out of sync. Accepts a pathname or a full URL.
 */
const CHANGELOG_SEGMENT = /\/changelog(\/|$)/;

export function isNoindexChangelogPage(pathOrUrl) {
  return CHANGELOG_SEGMENT.test(pathOrUrl);
}
