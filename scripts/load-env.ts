/*
 * Copyright (c) wink.travel 2026
 */
// Loads .env / .env.local for standalone scripts.
//
// Astro/Vite loads these files automatically, but scripts run under plain `tsx`
// get no such treatment, so anything reading process.env must call loadEnv()
// first. See scripts/translate-i18n.ts and scripts/sync-schemas.ts.

import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const ROOT_DIR = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// Precedence, strongest first: .env.local > .env > the ambient shell.
//
// Putting the files above the shell is deliberate and is the opposite of
// dotenv's default, which silently keeps any value already in process.env. That
// default makes a stale `export OPENAI_API_KEY=...` in a shell profile shadow
// the real key in .env.local, with no error and no warning — the script just
// authenticates as the wrong identity. Anchoring the repo's own config as the
// source of truth is worth losing the ability to shadow a key from the shell.
//
// Note `override: true` inverts the file ordering too: each file overwrites the
// previous, so the LAST path listed wins. Hence .env.local comes after .env.
//
// Only keys actually present in these files are affected, so one-off invocation
// vars that live nowhere but the shell — ONLY_LANG=fr, ONLY_DIR=agency — are
// untouched and still work as documented.
export const loadEnv = (): void => {
  dotenv.config({
    path: [join(ROOT_DIR, ".env"), join(ROOT_DIR, ".env.local")],
    override: true,
    quiet: true,
  });
};
