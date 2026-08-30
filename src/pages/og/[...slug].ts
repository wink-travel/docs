import { OGImageRoute } from "astro-og-canvas";
import { getCollection } from "astro:content";

/** Matches a locale-prefixed id like "fr/hotels" or "zh-cn/about". */
const isLocale = (id: string) => /^[a-z]{2}(-[a-z]+)?\//i.test(id);

// Generate OG images only for default-locale marketing pages — keeps the count
// bounded (~34) so it doesn't multiply across 40+ locales and blow up the build.
const entries = await getCollection("docs");
const pages = Object.fromEntries(
  entries
    .filter((e) => e.data.marketingNav === true && !isLocale(e.id))
    .map((e) => [e.id, e.data])
);

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (_path, page: { title: string; description?: string }) => ({
    title: page.title,
    description: page.description ?? "",
    logo: { path: "./src/assets/og-wink-mark.png", size: [90] },
    bgGradient: [
      [33, 12, 64],
      [21, 6, 41],
    ],
    border: { color: [255, 107, 53], width: 24, side: "inline-start" },
    padding: 70,
    fonts: [
      "https://api.fontsource.org/v1/fonts/inter/latin-700-normal.ttf",
      "https://api.fontsource.org/v1/fonts/inter/latin-400-normal.ttf",
    ],
    font: {
      title: { color: [255, 255, 255], size: 68, weight: "Bold", lineHeight: 1.1, families: ["Inter"] },
      description: { color: [206, 196, 224], size: 30, lineHeight: 1.4, families: ["Inter"] },
    },
  }),
});
