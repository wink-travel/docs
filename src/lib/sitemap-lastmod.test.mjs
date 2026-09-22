import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { toPathname, buildLastmodIndex, makeLastmodLookup } from "./sitemap-lastmod.mjs";

test("toPathname collapses the collection root to /", () => {
  assert.equal(toPathname("index.mdx"), "/");
});

test("toPathname strips the extension and adds a trailing slash", () => {
  assert.equal(toPathname("products/booking-engine.mdx"), "/products/booking-engine/");
});

test("toPathname collapses a directory index file", () => {
  assert.equal(toPathname("products/index.mdx"), "/products/");
});

test("toPathname collapses a directory index file regardless of case", () => {
  assert.equal(toPathname("products/Index.mdx"), "/products/");
});

test("toPathname leaves a locale prefix untouched", () => {
  assert.equal(toPathname("fr/products/booking-engine.mdx"), "/fr/products/booking-engine/");
});

test("buildLastmodIndex returns empty byPath/english maps, not a bare Map, when git is unavailable", () => {
  // Running from a directory outside any git repo makes `git log` fail,
  // exercising the same catch branch a shallow checkout or missing .git would.
  const originalCwd = process.cwd();
  const dir = mkdtempSync(path.join(tmpdir(), "sitemap-lastmod-"));
  try {
    process.chdir(dir);
    const index = buildLastmodIndex();
    assert.ok(index.byPath instanceof Map, "byPath should be a Map");
    assert.ok(index.english instanceof Map, "english should be a Map");
    assert.equal(index.byPath.size, 0);
    assert.equal(index.english.size, 0);
  } finally {
    process.chdir(originalCwd);
    rmSync(dir, { recursive: true, force: true });
  }
});

test("makeLastmodLookup does not throw when git is unavailable", () => {
  const originalCwd = process.cwd();
  const dir = mkdtempSync(path.join(tmpdir(), "sitemap-lastmod-"));
  try {
    process.chdir(dir);
    const lastmodFor = makeLastmodLookup();
    assert.equal(lastmodFor("https://wink.travel/products/booking-engine/"), undefined);
  } finally {
    process.chdir(originalCwd);
    rmSync(dir, { recursive: true, force: true });
  }
});

test("makeLastmodLookup returns the direct date for an exact pathname match", () => {
  const lastmodFor = makeLastmodLookup({
    byPath: new Map([["/products/booking-engine/", "2024-01-01T00:00:00Z"]]),
    english: new Map(),
  });
  assert.equal(lastmodFor("https://wink.travel/products/booking-engine/"), "2024-01-01T00:00:00Z");
});

test("makeLastmodLookup prefers a locale's own translated date over the English fallback", () => {
  const lastmodFor = makeLastmodLookup({
    byPath: new Map([["/fr/products/booking-engine/", "2024-02-02T00:00:00Z"]]),
    english: new Map([["/products/booking-engine/", "2024-01-01T00:00:00Z"]]),
  });
  assert.equal(lastmodFor("https://wink.travel/fr/products/booking-engine/"), "2024-02-02T00:00:00Z");
});

test("makeLastmodLookup falls back to the English date for an untranslated locale URL", () => {
  const lastmodFor = makeLastmodLookup({
    byPath: new Map(),
    english: new Map([["/products/extranet/", "2024-03-03T00:00:00Z"]]),
  });
  assert.equal(lastmodFor("https://wink.travel/de/products/extranet/"), "2024-03-03T00:00:00Z");
});

test("makeLastmodLookup returns undefined for a URL with no known date", () => {
  const lastmodFor = makeLastmodLookup({ byPath: new Map(), english: new Map() });
  assert.equal(lastmodFor("https://wink.travel/nonexistent/"), undefined);
});

test("makeLastmodLookup returns undefined instead of throwing on an unparsable URL", () => {
  const lastmodFor = makeLastmodLookup({ byPath: new Map(), english: new Map() });
  assert.equal(lastmodFor("not a url"), undefined);
});
