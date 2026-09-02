/**
 * Shared i18n constants — the single source of truth for "which locales does
 * this site have" and "which top-level docs directories are deliberately
 * never translated". Both scripts/translate-i18n.ts (the translation
 * pipeline) and the Playwright suite (tests/utils/discover-routes.ts) import
 * from here, so the locale list and exclusions can't drift between what gets
 * translated and what gets tested. No side effects on import — safe to pull
 * into a test process without OPENAI_API_KEY set.
 */

export interface TargetLanguage {
  id: string;
  label: string;
}

// Keep in sync with the `locales` map in astro.config.mjs.
export const targetLanguages: TargetLanguage[] = [
  { id: "id", label: "Bahasa Indonesia" },
  { id: "ms", label: "Bahasa Malaysia" },
  { id: "bg", label: "Български" },
  { id: "ca", label: "Català" },
  { id: "cs", label: "Čeština" },
  { id: "da", label: "Dansk" },
  { id: "de", label: "Deutsch" },
  { id: "es", label: "Español" },
  { id: "es-AR", label: "Español (AR)" },
  { id: "es-MX", label: "Español (MX)" },
  { id: "tl", label: "Filipino" },
  { id: "fi", label: "Suomi" },
  { id: "fr", label: "Français" },
  { id: "el", label: "Ελληνικά" },
  { id: "he", label: "עברית" },
  { id: "hi", label: "हिन्दी" },
  { id: "hr", label: "Hrvatski" },
  { id: "hu", label: "Magyar" },
  { id: "is", label: "Íslenska" },
  { id: "it", label: "Italiano" },
  { id: "ja", label: "日本語" },
  { id: "ko", label: "한국어" },
  { id: "lv", label: "Latviski" },
  { id: "lt", label: "Lietuvių" },
  { id: "nl", label: "Nederlands" },
  { id: "no", label: "Norsk" },
  { id: "pl", label: "Polski" },
  { id: "pt-BR", label: "Português (BR)" },
  { id: "pt-PT", label: "Português (PT)" },
  { id: "ro", label: "Română" },
  { id: "ru", label: "Русский" },
  { id: "sk", label: "Slovenčina" },
  { id: "sl", label: "Slovenščina" },
  { id: "sr", label: "Srpski" },
  { id: "sv", label: "Svenska" },
  { id: "th", label: "ภาษาไทย" },
  { id: "tr", label: "Türkçe" },
  { id: "uk", label: "Українська" },
  { id: "vi", label: "Tiếng Việt" },
  { id: "ar", label: "العربية" },
  { id: "zh-CN", label: "简体中文" },
  { id: "zh-TW", label: "繁體中文" },
];

// Top-level directories under src/content/docs that are never machine-translated.
// `api` and `changelog` are generated from upstream sources, and `blog` is owned
// by the starlightBlog plugin.
export const UNTRANSLATED_DIRECTORIES = new Set(["api", "blog", "changelog"]);
