/**
 * Token Analyzer for Docs
 *
 * Purpose:
 * - Recursively scans source docs (excluding locale folders) and reports
 *   per-file token counts, largest file, and total tokens.
 * - Helps choose safe models and batch sizes for translation.
 *
 * Usage:
 *   node scripts/token-analyzer.ts
 *   OPENAI_TRANSLATION_MODEL=gpt-5-mini node scripts/token-analyzer.ts
 *
 * Notes:
 * - Skips locale directories (e.g., fi, es-MX) and only analyzes English sources.
 * - Uses js-tiktoken with the gpt-5-mini tokenizer for estimates.
 */
import { join, resolve } from "path";
import { readdirSync, statSync, readFileSync } from "fs";
import { encodingForModel } from "js-tiktoken";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, "..");

const rootDir = resolve(__dirname, "..");
const docsBaseDir = join(rootDir, "src", "content", "docs");

const MODEL = process.env.OPENAI_TRANSLATION_MODEL ?? "gpt-4o"; // chosen translation model

// Locale directories like 'es', 'pt-BR', 'zh-CN', etc.
function isLocaleDir(name: string): boolean {
  // Match 'xx' or 'xx-YY' style codes (e.g., es, fr, pt-BR, zh-CN)
  if (/^[a-z]{2}(-[A-Z]{2})?$/.test(name)) return true;
  // Some locales might include additional segments (e.g., es-MX)
  if (/^[a-z]{2}(-[A-Z]{2}){1,2}$/.test(name)) return true;
  return false;
}

function walk(dir: string, files: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) {
      // Skip locale-specific folders at any level under docsBaseDir
      if (isLocaleDir(entry)) continue;
      walk(p, files);
    } else if (/\.(md|mdx|markdown|html|txt)$/i.test(entry)) {
      files.push(p);
    }
  }
  return files;
}

function estimateTokens(text: string): number {
  // Use a concrete tokenizer id accepted by js-tiktoken types
  const enc = encodingForModel("gpt-5-mini");
  const tokens = enc.encode(text);
  return tokens.length;
}

function main() {
  const files = walk(docsBaseDir);
  let maxTokens = 0;
  let largestFile = "";
  let totalTokens = 0;

  for (const f of files) {
    const content = readFileSync(f, "utf8");
    const n = estimateTokens(content);
    totalTokens += n;
    if (n > maxTokens) {
      maxTokens = n;
      largestFile = f;
    }
    console.log(`${n.toString().padStart(8)} tokens  ${f}`);
  }
  console.log("\nSummary:");
  console.log(`Files: ${files.length}`);
  console.log(`Largest file: ${largestFile} (${maxTokens} tokens)`);
  console.log(`Total tokens across docs: ${totalTokens}`);
  console.log(`Model/tokenizer: ${MODEL} (using gpt-5-mini tokenizer)`);
  console.log(`Note: per-request limit is ~128k tokens for GPT-4o/GPT-4.1.`);
}

main();
