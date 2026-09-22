/**
 * Which changelog pages churn and should stay out of the sitemap / get
 * `noindex`.
 *
 * `keepRecent(25)` in src/content.config.ts retires old releases from the
 * application and platform feeds on every release: a dropped release's
 * `/version/<tag>` and compare pages stop being generated and 404, so an
 * indexed URL decays into a dead link. partner-api is deliberately
 * uncapped — every tag is a published wire contract an integrator's client
 * is pinned to, and it must stay indexable forever. `/changelog/overview/`
 * is a hand-authored, permanent landing page, not a generated release page.
 * Neither churns, so neither is excluded here.
 *
 * Shared by astro.config.mjs's sitemap filter and custom-head.astro's
 * noindex check so the two can't drift out of sync.
 */
const CHURNING_BASES = ["application", "platform"];

export function isChurningChangelogPage(pathname) {
  return CHURNING_BASES.some((base) => pathname.includes(`/changelog/${base}/`));
}
