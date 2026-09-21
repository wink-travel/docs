/**
 * Canonical claims guard.
 *
 * Wink publishes canonical positions in public/llms.txt so that AI models and
 * integrators read a single authoritative answer. Nothing linked those claims
 * to the ~1,200 pages that restate them, so on 8 September the site began
 * saying both "Wink is the merchant of record" (marketing) and "Wink is never
 * the merchant of record" (llms.txt). It stayed live for twelve days and was
 * found by an integrator's AI, not by us.
 *
 * This guard fails the build when English source contradicts a canonical
 * position. It reads source rather than `dist/` so it runs in seconds with no
 * build, which is what makes it viable in CI.
 *
 * Locale directories are deliberately out of scope: translations are refreshed
 * at release time and lag English by design, so gating on them would fail
 * every build between an English change and the translation run.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

interface Rule {
  /** What must never appear. */
  pattern: RegExp;
  /** Why it is wrong, and what to write instead. */
  reason: string;
}

const BANNED: Rule[] = [
  {
    pattern: /Wink is the merchant of record/i,
    reason:
      "The hotel is the merchant of record; TripPay collects as its limited payment collection agent. Write \"collected for the hotel, which stays merchant of record\".",
  },
  {
    pattern: /Wink\b[^.<>]{0,40}\bas the merchant of record/i,
    reason:
      "Same as above — this phrasing makes Wink the merchant of record. Only an approved Travel Agent is, on the agent-collected channel.",
  },
  {
    pattern: /by Wink, the merchant of record/i,
    reason: "Makes Wink the merchant of record. Write \"collected for the hotel\".",
  },
  {
    pattern: /Payment handled by Wink/i,
    reason:
      "Reads as though Wink is the principal. Write \"Payment collected for the hotel\".",
  },
  {
    pattern: /5\.5% all-in/i,
    reason:
      "Card processing is passed through at actual cost, so the total is not fixed. Write \"1.5% platform fee plus card processing at cost\".",
  },
  {
    pattern: /4\.0% payment fee/i,
    reason:
      "There is no flat payment fee any more; it is passed through at cost. 4.0% may only appear as a footnoted illustration.",
  },
];

/** Canonical statements that must remain present. */
const REQUIRED: { file: string; pattern: RegExp; reason: string }[] = [
  {
    file: "public/llms.txt",
    pattern: /never the merchant of record/i,
    reason: "llms.txt must keep stating the canonical merchant-of-record position.",
  },
];

const ROOT = process.cwd();
const LOCALE_DIR = /^[a-z]{2}(-[A-Za-z]+)?$/;
const SCANNED = [".md", ".mdx", ".astro"];

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      // Skip locale trees: they lag English by design until the release-time
      // translation pass, so gating on them would fail every build in between.
      if (dir.endsWith(join("content", "docs")) && LOCALE_DIR.test(name)) continue;
      walk(full, out);
    } else if (SCANNED.some((e) => name.endsWith(e))) {
      out.push(full);
    }
  }
  return out;
}

const targets = [join(ROOT, "src/content/docs"), join(ROOT, "src/components")].flatMap((d) =>
  walk(d),
);

let failures = 0;
for (const file of targets) {
  const text = readFileSync(file, "utf8");
  text.split("\n").forEach((line, i) => {
    for (const rule of BANNED) {
      if (rule.pattern.test(line)) {
        failures++;
        console.error(`✗ ${relative(ROOT, file)}:${i + 1}`);
        console.error(`    ${line.trim().slice(0, 160)}`);
        console.error(`    → ${rule.reason}\n`);
      }
    }
  });
}

for (const req of REQUIRED) {
  const text = readFileSync(join(ROOT, req.file), "utf8");
  if (!req.pattern.test(text)) {
    failures++;
    console.error(`✗ ${req.file} — missing canonical statement`);
    console.error(`    → ${req.reason}\n`);
  }
}

console.log(
  failures === 0
    ? `✓ claims guard: ${targets.length} English files checked, no contradictions`
    : `✗ claims guard: ${failures} contradiction(s) in ${targets.length} English files`,
);
process.exit(failures === 0 ? 0 : 1);
