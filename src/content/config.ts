import { defineCollection } from "astro:content";
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
      extend: (context) => blogSchema(context)
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
      // {
      //   provider: 'github',
      //   base: 'changelog/platform',
      //   owner: 'wink-travel',
      //   repo: 'monorepo-java',
      //   token: import.meta.env.GH_API_TOKEN ?? process.env.GH_API_TOKEN,
      // },
    ]),
  }),
};
