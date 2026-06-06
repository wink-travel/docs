import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { blogSchema } from 'starlight-blog/schema';
import { changelogsLoader } from 'starlight-changelogs/loader';

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
          // Set on the new marketing splash pages only, so existing splash pages
          // (index/contact/team/jobs) keep Starlight's default header/footer.
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
      },
      {
        provider: 'github',
        base: 'changelog/platform',
        owner: 'wink-travel',
        repo: 'monorepo-java',
        token: import.meta.env.GH_API_TOKEN ?? process.env.GH_API_TOKEN,
      },
    ]),
  }),
};
