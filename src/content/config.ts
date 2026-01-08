import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { blogSchema } from 'starlight-blog/schema'

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
};
