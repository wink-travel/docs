import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { blogSchema } from 'starlight-blog/schema';
import { changelogsLoader } from 'starlight-changelogs/loader';

// Cap a changelog to its most recent `max` releases. The GitHub provider
// fetches releases newest-first and calls `process` once per release at load
// time, so a per-changelog closure counter keeps the latest ones and drops
// deep history. Without this, ~295 releases × 41 locales × (version + compare)
// pages = ~27k pages (58% of the build) — almost all duplicated English release
// notes. Each `keepRecent(...)` call gets its own counter, so the capped
// changelogs are capped independently. Tune `max` to show more/less history.
//
// This applies to the application and platform feeds only. A dropped release is
// not merely hidden: the provider skips it entirely (`if (!processedTitle)
// return`), and `syncData` deletes every stored entry for the base before
// reinserting the survivors — so its `/version/<tag>` and compare routes stop
// being generated and 404. That is fine for app builds nobody deep-links, and
// wrong for a wire contract. See the partner-api entry below.
const keepRecent = (max: number) => {
  let n = 0;
  return ({ title }: { title: string }) => (n++ < max ? title : undefined);
};

export const collections = {
  docs: defineCollection({
    loader: docsLoader({
      // Strip the `.md`/`.mdx` file extension, but don’t lowercase
      generateId: ({ entry }) =>
        entry
          .split(".")
          .slice(0, -1)
          .join(".")
          .replace(/\/index$/i, ""),
    }),
    schema: docsSchema({
      extend: (context) =>
        blogSchema(context).extend({
          // Opt-in flag: render the new marketing navbar + footer (IA rebuild).
          // Set on all marketing splash pages. The legacy home (index.mdx) keeps
          // Starlight's default header/footer until it is replaced by home-v2.
          marketingNav: z.boolean().optional(),
        }),
    })
  }),
  changelogs: defineCollection({
    loader: changelogsLoader([
      {
        provider: 'github',
        base: 'changelog/application',
        title: 'Application',
        owner: 'wink-travel',
        repo: 'monorepo-typescript',
        token: import.meta.env.GH_API_TOKEN ?? process.env.GH_API_TOKEN,
        // Don't index changelog pages in Pagefind (search) — low value and the
        // volume choked the build's post-processing. See note above.
        pagefind: false,
        // Keep only the most recent releases; drop deep history (see note above).
        process: keepRecent(25),
      },
      {
        provider: 'github',
        base: 'changelog/platform',
        title: 'Platform',
        owner: 'wink-travel',
        repo: 'monorepo-java',
        token: import.meta.env.GH_API_TOKEN ?? process.env.GH_API_TOKEN,
        // Don't index changelog pages in Pagefind (search) — low value and the
        // volume choked the build's post-processing. See note above.
        pagefind: false,
        // Keep only the most recent releases; drop deep history (see note above).
        process: keepRecent(25),
      },
      {
        // The Partner API wire contracts (protobuf), published as a read-only
        // mirror of monorepo-java's proto sources. Unlike the two changelogs
        // above — which track internal app/platform releases — a release here
        // is a versioned public contract an integrator's generated client is
        // pinned to, so the release cadence is much slower: only changes that
        // actually shipped to production are tagged.
        provider: 'github',
        base: 'changelog/partner-api',
        title: 'Partner API',
        owner: 'wink-travel',
        repo: 'partner-api-proto',
        token: import.meta.env.GH_API_TOKEN ?? process.env.GH_API_TOKEN,
        // Don't index changelog pages in Pagefind (search) — low value and the
        // volume choked the build's post-processing. See note above.
        pagefind: false,
        // DELIBERATELY UNCAPPED — do not add `process: keepRecent(...)` here.
        // Every tag is a published wire contract that an integrator's generated
        // client is pinned to, so `/changelog/partner-api/version/v1-0-0` must
        // keep resolving for as long as anyone is on v1.0.0. Capping would make
        // the oldest contracts 404 exactly when someone on an old pin comes
        // looking for them. The page-count argument behind the cap does not
        // apply either: releases here are tagged only after a production
        // cutover, so this grows by a handful of releases a year, not ~295.
      },
    ]),
  }),
};
