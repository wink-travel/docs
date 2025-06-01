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
import cliProgress from "cli-progress";
import { TranslationServiceClient } from "@google-cloud/translate"; // Google Translate API
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import rehypeParse from "rehype-parse";
import remarkMdx from "remark-mdx";
import { visit } from "unist-util-visit";
import type { Node } from "unist";
// import { JSDOM } from 'jsdom'; // Optional, if you want more DOM-like behavior

import { createHash } from "crypto";

const HASH_ALGO = "sha256";
const HASH_FILE_NAME = ".file.hashes.json";

type HashMap = Record<string, string>;
type Frontmatter = Record<string, any>;

// this is out Google Project ID
const projectId = "staging-iko-travel";
const parent = `projects/${projectId}/locations/global`;

/**
 *  Optional. The `model` type requested for this translation.
 *  The format depends on model type:
 *  - AutoML Translation models:
 *    `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}`
 *  - General (built-in) models:
 *    `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`,
 *  - Translation LLM models:
 *    `projects/{project-number-or-id}/locations/{location-id}/models/general/translation-llm`,
 *  For global (non-regionalized) requests, use `location-id` `global`.
 *  For example,
 *  `projects/{project-number-or-id}/locations/global/models/general/nmt`.
 *  If not provided, the default Google model (NMT) will be used
 */
const model = `${parent}/models/general/nmt`;
const mimeType = "text/plain";

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
const rootDir = resolve(__dirname, "..");
const docsBaseDir = join(rootDir, "src", "content", "docs");

// here is where to find the source file path (English base translation)
const sourceLanguageCode = "en";

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

// Initialize Google Translate client
const translationClient = new TranslationServiceClient();

// Load a file if it exists; otherwise return an empty object
const createDirectory = (filePath: string): void => mkdirSync(filePath);

// Load a file if it exists; otherwise return an empty object
const readFiles = (filePath: string): Array<string> => readdirSync(filePath);

// Load a file if it exists; otherwise return an empty object
const readFile = (filePath: string): any =>
  existsSync(filePath)
    ? readFileSync(filePath, "utf8")
    : new Error(`Unable to find file ${filePath}`);

// Write a file back to disk
const writeFile = (filePath: string, content: string): void => {
  // Optionally create missing directories
  mkdirSync(dirname(filePath), { recursive: true });

  // Write file
  writeFileSync(filePath, content + "\n", {
    encoding: "utf8",
  });
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

const saveHashMap = (langDirectory: string, map: HashMap): void => {
  const hashPath = getLangHashFilePath(langDirectory);
  writeFile(hashPath, JSON.stringify(map, null, 2));
};

async function translateText(
  sourceText: string,
  targetLanguageCode: string
): Promise<string> {
  // console.log(`Translating: "${sourceText}" => Language: ${targetLanguageCode}`);

  // This is Google's ITranslateTextRequest object
  const request = {
    parent,
    model,
    mimeType,
    contents: [sourceText],
    sourceLanguageCode,
    targetLanguageCode,
  };

  // console.log('Translation request: ', request);

  // Translate only if new or changed
  const [response] = await translationClient.translateText(request);

  // console.log('Translation response', response);

  const result = response.translations?.[0]?.translatedText || "";

  // console.log('Translation result:', result);

  return result;
}

const walk = (
  tasks: Promise<void>[],
  node: any,
  targetLanguageCode: string
) => {
  console.log("walk node", node);

  if (node.type === "text") {
    const value = node.value.trim();
    if (value) {
      const p = translateText(value, targetLanguageCode).then((translated) => {
        node.value = translated;
      });
      tasks.push(p);
    }
  } else if (node.children && Array.isArray(node.children)) {
    node.children.forEach((child: any) =>
      walk(tasks, child, targetLanguageCode)
    );
  }
};

async function translateHtmlContent(
  html: string,
  targetLanguageCode: string
): Promise<string> {
  const processor = unified()
    .use(rehypeParse, { fragment: true })
    .use(remarkMdx)
    .use(remarkParse)
    .use(() => async (tree: Node) => {
      // Visit all text nodes
      const promises: Promise<void>[] = [];

      visit(tree, ["text", "mdxTextExpression"], (node: any) => {
        const text = node.value?.trim();
        if (text) {
          const p = translateText(text, targetLanguageCode).then(
            (translated) => {
              node.value = node.value.replace(text, translated);
            }
          );
          promises.push(p);
        }
      });

      visit(tree, ["mdxJsxFlowElement", "mdxJsxTextElement"], (node: any) => {
        if (Array.isArray(node.attributes)) {
          for (const attr of node.attributes) {
            if (
              attr.type === "mdxJsxAttribute" &&
              (attr.name === "alt" || attr.name === "title") &&
              typeof attr.value === "string" &&
              attr.value.trim() !== ""
            ) {
              const original = attr.value;
              const p = translateText(original, targetLanguageCode).then(
                (translated) => {
                  attr.value = translated;
                }
              );
              promises.push(p);
            }
          }
        }
      });

      await Promise.all(promises);
    })
    .use(remarkStringify);

  const file = await processor.process(html);
  return String(file);
}

// 🧠 Translate all text nodes in Markdown AST
async function translateMarkdownContent(
  markdown: string,
  targetLanguageCode: string
) {
  const processor = unified().use(remarkParse).use(remarkStringify);
  const ast = processor.parse(markdown);

  const promises: Promise<void>[] = [];

  visit(ast, (node: any) => {
    // console.log("Node type", node.type);
    // console.log("Node value", node.value);

    // Skip import/export statements
    if (/^\s*(import|export)\s/.test(node.value)) return;

    // Translate normal markdown text
    if (node.type === "text") {
      const original = node.value;
      const promise = translateText(original, targetLanguageCode).then(
        (translated) => {
          node.value = translated;
        }
      );
      promises.push(promise);
    }

    // Translate HTML nodes (e.g. <Card>text</Card>)
    if (node.type === "html") {
      const htmlContent = node.value;

      const promise = translateHtmlContent(
        htmlContent,
        targetLanguageCode
      ).then((translated) => {
        // console.log('translated html', translated);
        node.value = translated;
      });
      promises.push(promise);
    }
  });

  await Promise.all(promises);

  return processor.stringify(ast);
}

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

  // Split MDX into frontmatter and body
  const { data: frontmatter, content: markdownContent } = matter(rawContent);

  const translatedFrontmatter = await translateFrontmatter(
    frontmatter,
    targetLang
  );
  const translatedContent = await translateMarkdownContent(
    markdownContent,
    targetLang
  );

  // Recombine
  const finalContent = matter.stringify(
    translatedContent,
    translatedFrontmatter
  );

  // save translated content to file
  console.log(`✍️ Writing translated text to target file: ${fileName}`);
  writeFile(fileName, finalContent);

  // ✅ Save hash in map
  langHashMap[relativePath] = currentHash;
}

async function translateFrontmatter(
  obj: Frontmatter,
  targetLang: string
): Promise<Frontmatter> {
  const clone = structuredClone(obj); // or use JSON.parse(JSON.stringify(obj)) if needed

  const walk = async (value: any): Promise<any> => {
    if (typeof value === "string") {
      // Heuristic: avoid translating links or filenames
      if (
        value.startsWith("/") ||
        value.includes(".webp") ||
        value.includes(".mdx") ||
        value.match(/^[a-z0-9._-]+$/i) // plain slug
      ) {
        return value;
      }

      return await translateText(value, targetLang); // or real translation
    }

    if (Array.isArray(value)) {
      return Promise.all(value.map(walk));
    }

    if (typeof value === "object" && value !== null) {
      const entries = await Promise.all(
        Object.entries(value).map(async ([key, val]) => [key, await walk(val)])
      );
      return Object.fromEntries(entries);
    }

    return value; // leave other types alone
  };

  return await walk(clone);
}

async function translateFilesInDirectory(
  directory: string,
  targetLang: string,
  langHashMap: HashMap
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
  }
}

/**
 * Main script runner
 * Loads source file, loops over target languages, translates, and writes files
 */
async function translateDocs() {
  const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
  bar.start(directories.length * targetLanguages.length, 0);

  // Loop over each target language
  for (const lang of targetLanguages) {
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

    for (const directory of directories) {
      console.log(`🔄 Translating files in directory: ${directory}...`);

      // Now we translate all the files in this directory for the specified language
      await translateFilesInDirectory(directory, lang.id, langHashMap);
      bar.increment();
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
