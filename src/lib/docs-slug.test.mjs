import { test } from "node:test";
import assert from "node:assert/strict";
import { toDocsId } from "./docs-slug.mjs";

test("toDocsId strips the file extension", () => {
  assert.equal(toDocsId("products/booking-engine.mdx"), "products/booking-engine");
});

test("toDocsId collapses a trailing /index segment", () => {
  assert.equal(toDocsId("products/index.mdx"), "products");
});

test("toDocsId collapses a trailing /index segment regardless of case", () => {
  assert.equal(toDocsId("products/Index.mdx"), "products");
});

test("toDocsId leaves the collection-root index id alone", () => {
  assert.equal(toDocsId("index.mdx"), "index");
});
