/*
 * Copyright (c) wink.travel 2025
 */
// Import required modules
import {
  existsSync,
  readFileSync,
  writeFileSync,
  readdirSync,
  statSync,
  mkdirSync,
} from "fs";
import { resolve, join, dirname } from "path";
import { fileURLToPath } from "url";
import cliProgress from "cli-progress";
import OpenAI from "openai";

import { createHash } from "crypto";

const HASH_ALGO = "sha256";
const HASH_FILE_NAME = ".file.hashes.json";

type HashMap = Record<string, string>;

// Helper filesystem utilities
const createDirectory = (filePath: string): void => mkdirSync(filePath);
const readFiles = (filePath: string): Array<string> => readdirSync(filePath);
const readFile = (filePath: string): any =>
  existsSync(filePath)
    ? readFileSync(filePath, "utf8")
    : new Error(`Unable to find file ${filePath}`);
const writeFile = (filePath: string, content: string): void => {
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, content + "\n", { encoding: "utf8" });
};
const calculateFileHash = (content: string): string => {
  return createHash(HASH_ALGO).update(content).digest("hex");
};
const getLangHashFilePath = (langDirectory: string): string => {
  return join(langDirectory, HASH_FILE_NAME);
};
const loadHashMap = (langDirectory: string): HashMap => {
  const hashPath = getLangHashFilePath(langDirectory);
  if (existsSync(hashPath)) {
    return JSON.parse(readFile(hashPath));
  }
  return {};
};

// here are all our apps that need translation and use JSON i18n resource bundles
const directories = [
  "agency",
  "booking-engine",
  "corporate",
  "developers",
  "extranet",
  "getting-started",
  "guides",
  "link-manager",
  "managed-social",
  "payment",
  "studio",
  "travel-agent",
  "user",
  "webinars",
];

// some environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, "..");
const docsBaseDir = join(rootDir, "src", "content", "docs");


const OPENAI_TRANSLATION_MODEL =
  process.env.OPENAI_TRANSLATION_MODEL ?? "gpt-5-mini";
const DOMAIN_CONTEXT =
  "Online travel platform: booking flows, inventory management, agency/extranet tools. Keep product names and key travel terms consistent.";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is required for translations");
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// List of target languages to translate into
const targetLanguages = [
  { id: "id", label: "Bahasa Indonesia" },
  { id: "ms", label: "Bahasa Malaysia" },
  { id: "bg", label: "Български" },
  { id: "ca", label: "Català" },
  { id: "cs", label: "Čeština" },
  { id: "da", label: "Dansk" },
  { id: "de", label: "Deutsch" },
  { id: "et", label: "Eesti" },
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

// Optional narrowing via environment variables for quicker tests
const ONLY_LANG = process.env.ONLY_LANG?.trim();
const ONLY_DIR = process.env.ONLY_DIR?.trim();

// Whole-file translation: send entire MDX including frontmatter and body
async function translateWholeFile(
  rawMdx: string,
  targetLanguageCode: string
): Promise<string | null> {
  const text = rawMdx?.trim();
  if (!text) return null;

  const langLabel =
    targetLanguages.find((l) => l.id === targetLanguageCode)?.label ??
    targetLanguageCode;

  const systemPrompt =
    "You are a professional localization engine for an online travel platform (booking, inventory, agency/extranet tools). " +
    "Translate from English to the target locale while preserving MDX/Markdown/HTML/JSX exactly. " +
    "Do not translate or modify code fences, inline code, import/export lines, tag names, or attribute names. " +
    "Do not alter URLs, slugs, filenames, or file paths. Only translate human-visible prose.";

  const userPrompt = [
    `Target language: ${langLabel} (${targetLanguageCode})`,
    "",
    "Rules (concise):",
    "- Preserve MDX/JSX/Markdown structure exactly.",
    "- Do NOT touch code blocks (```), inline code (`...`), {expressions}, tag names, attribute KEYS, IDs.",
    "- Do NOT alter href/src/id/data-* or class/className; never change URLs, slugs, filenames, or paths.",
    "- Headings: translate text but keep markers (#, ##, ###).",
    "- Emphasis titles: translate '**...**' or '*...*'; keep emphasis.",
    "- Lists: translate item text; keep bullets/numbering/indentation.",
    "- Frontmatter: translate 'title' and 'description' values only; keep YAML keys/shape.",
    "- Banners: translate multiline 'banner.content' prose fully.",
    "- Links: translate anchor text inside [ ]; NEVER change href inside ( ).",
    "- Components: translate human-visible props such as title, text, tagline, alt, aria-label; keep prop keys/names intact.",
    "  Examples: <Card title=\"...\" />, hero: { tagline: \"...\", actions: [{ text: \"...\" }] }.",
    "- Alt/captions: translate visible text; keep URLs/identifiers untouched.",
    "- Output ONLY the translated file; no commentary.",
    "",
    `Domain context: ${DOMAIN_CONTEXT}`,
    "",
    "File to translate:",
    "-------------------",
    text,
  ].join("\n");

  const maxRetries = 4;
  let attempt = 0;
  while (attempt <= maxRetries) {
    try {
      const resp = await openai.responses.create({
        model: OPENAI_TRANSLATION_MODEL,
        input: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        reasoning:{"effort":"minimal"},
      });
      const translated = resp.output_text?.trim();
      if (translated && translated.length > 0) return translated;
      console.warn(`[${targetLanguageCode}] Empty translation content returned`);
      return null;
    } catch (err: any) {
      const status = err?.status ?? err?.response?.status;
      const msg = err?.message ?? err?.response?.data ?? String(err);
      console.warn(`[${targetLanguageCode}] OpenAI error (status=${status}): ${msg}`);
      if (status === 429 || (status && status >= 500)) {
        const delayMs = Math.min(16000, 1000 * Math.pow(2, attempt));
        await new Promise((res) => setTimeout(res, delayMs));
        attempt++;
        continue;
      }
      break;
    }
  }
  console.warn(`[${targetLanguageCode}] Translation failed after retries, skipping file.`);
  return null;
}

const saveHashMap = (langDirectory: string, map: HashMap): void => {
  const hashPath = getLangHashFilePath(langDirectory);
  writeFile(hashPath, JSON.stringify(map, null, 2));
};

async function translateFile(
  fullPath: string,
  targetLang: string,
  fileName: string,
  relativePath: string, // NEW: relative to docs base
  langHashMap: HashMap
) {
  // console.log(`Translating source file to: ${targetLang}`);

  const stat = statSync(fullPath);

  if (!stat.isFile()) {
    console.log(`${fullPath} is not a file`);
    return;
  }

  // console.log(`Reading source file: ${fullPath}`);
  // here is our english file content
  const rawContent = readFile(fullPath);
  const currentHash = calculateFileHash(rawContent);

  const existingHash = langHashMap[relativePath];
  if (existingHash === currentHash) {
    console.log(
      `✅ Skipping ${targetLang}/${relativePath}, already up to date.`
    );
    return;
  }

  // Send whole file for translation
  const translatedFile = await translateWholeFile(rawContent, targetLang);
  if (translatedFile === null) {
    console.warn(`⚠️ Skipped ${targetLang}/${relativePath} due to translation failure.`);
    return;
  }

  console.log(`✍️ Writing translated file: ${fileName}`);
  writeFile(fileName, translatedFile);

  // ✅ Save hash in map
  langHashMap[relativePath] = currentHash;
}


async function translateFilesInDirectory(
  directory: string,
  targetLang: string,
  langHashMap: HashMap,
  bar?: cliProgress.SingleBar
) {
  // console.log(`Translating source file to: ${targetLang}`);

  const sourceDirectory = join(docsBaseDir, directory);

  const files = readFiles(sourceDirectory);

  for (const fileName of files) {
    const fullPath = join(sourceDirectory, fileName);
    const relativePath = join(directory, fileName);
    const targetFile = join(docsBaseDir, targetLang, directory, fileName);

    await translateFile(
      fullPath,
      targetLang,
      targetFile,
      relativePath,
      langHashMap
    );
    bar?.increment();
  }
}

/**
 * Main script runner
 * Loads source file, loops over target languages, translates, and writes files
 */
async function translateDocs() {
  const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  const dirList = ONLY_DIR ? [ONLY_DIR] : directories;
  const langList = ONLY_LANG
    ? targetLanguages.filter((l) => l.id === ONLY_LANG)
    : targetLanguages;

  // Pre-compute total files to process for accurate progress
  let totalFiles = 0;
  // index.mdx per language
  totalFiles += langList.length;
  // files in selected directories per language
  for (const directory of dirList) {
    const sourceDirectory = join(docsBaseDir, directory);
    const files = readFiles(sourceDirectory);
    totalFiles += files.length * langList.length;
  }
  bar.start(totalFiles, 0);

  // Loop over each target language
  for (const lang of langList) {
    // check if language folder already exists. If not -> create it
    const languageDirectory = join(docsBaseDir, lang.id);
    const langDirectoryExists = existsSync(languageDirectory);

    if (!langDirectoryExists) {
      console.log(`Creating missing directory: ${languageDirectory}...`);
      createDirectory(languageDirectory);
    } else {
      // console.log(`${languageDirectory} already exists`);
    }

    // ✅ Load hash map for this language
    const langHashMap = loadHashMap(languageDirectory);

    // we start by translating the index.mdx file located in the root folder
    const indexFile = join(docsBaseDir, "index.mdx");
    const targetFile = join(languageDirectory, "index.mdx");
    await translateFile(
      indexFile,
      lang.id,
      targetFile,
      "index.mdx",
      langHashMap
    );
    bar.increment();

    for (const directory of dirList) {
      console.log(`🔄 Translating files in directory: ${directory}...`);

      // Now we translate all the files in this directory for the specified language
      await translateFilesInDirectory(directory, lang.id, langHashMap, bar);
      console.log(
        `✅ Translation of directory ${directory} to "${lang.id}" complete.`
      );
    }

    // ✅ Save updated hash map
    saveHashMap(languageDirectory, langHashMap);
  }

  bar.stop();

  console.log("✅ All translations complete.");
}

// excute the magic
translateDocs().catch((err) => {
  console.error("❌ Failed to sync translations:", err);
  process.exit(1);
});
