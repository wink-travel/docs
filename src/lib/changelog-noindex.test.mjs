import { test } from "node:test";
import assert from "node:assert/strict";
import { isNoindexChangelogPage } from "./changelog-noindex.mjs";

test("isNoindexChangelogPage covers the capped application and platform feeds", () => {
  assert.equal(isNoindexChangelogPage("/changelog/application/"), true);
  assert.equal(isNoindexChangelogPage("/changelog/application/version/v2-0-0/"), true);
  assert.equal(isNoindexChangelogPage("/changelog/platform/version/v3-1-0/"), true);
});

test("isNoindexChangelogPage covers the partner-api feed", () => {
  assert.equal(isNoindexChangelogPage("/changelog/partner-api/"), true);
  assert.equal(isNoindexChangelogPage("/changelog/partner-api/version/v1-0-0/"), true);
});

test("isNoindexChangelogPage covers the overview page and the section root", () => {
  assert.equal(isNoindexChangelogPage("/changelog/overview/"), true);
  assert.equal(isNoindexChangelogPage("/changelog/"), true);
  assert.equal(isNoindexChangelogPage("/changelog"), true);
});

test("isNoindexChangelogPage covers locale-prefixed paths and full sitemap URLs", () => {
  assert.equal(isNoindexChangelogPage("/fr/changelog/application/"), true);
  assert.equal(isNoindexChangelogPage("https://wink.travel/zh-CN/changelog/overview/"), true);
});

test("isNoindexChangelogPage leaves non-changelog pages indexable", () => {
  assert.equal(isNoindexChangelogPage("/products/booking-engine/"), false);
  assert.equal(isNoindexChangelogPage("/blog/changelog-highlights/"), false);
  assert.equal(isNoindexChangelogPage("https://wink.travel/"), false);
});
