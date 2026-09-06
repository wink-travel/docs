import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { blogSchema } from 'starlight-blog/schema';
import { changelogsLoader } from 'starlight-changelogs/loader';

// Cap each changelog to its most recent `max` releases. The GitHub provider
// fetches releases newest-first and calls `process` once per release at load
// time, so a per-changelog closure counter keeps the latest ones and drops
// deep history. Without this, ~295 releases × 41 locales × (version + compare)
// pages = ~27k pages (58% of the build) — almost all duplicated English release
// notes. Each `keepRecent(...)` call gets its own counter, so the two
// changelogs are capped independently. Tune `max` to show more/less history.
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
        owner: 'wink-travel',
        repo: 'partner-api-proto',
        token: import.meta.env.GH_API_TOKEN ?? process.env.GH_API_TOKEN,
        // Don't index changelog pages in Pagefind (search) — low value and the
        // volume choked the build's post-processing. See note above.
        pagefind: false,
        // Keep only the most recent releases; drop deep history (see note above).
        process: keepRecent(25),
      },
    ]),
  }),
};
