import { test } from "node:test";
import assert from "node:assert/strict";
import { isChurningChangelogPage } from "./changelog-churn.mjs";

test("isChurningChangelogPage excludes the capped application feed", () => {
  assert.equal(isChurningChangelogPage("/changelog/application/"), true);
  assert.equal(isChurningChangelogPage("/changelog/application/version/v2-0-0/"), true);
});

test("isChurningChangelogPage excludes the capped platform feed", () => {
  assert.equal(isChurningChangelogPage("/changelog/platform/version/v3-1-0/"), true);
});

test("isChurningChangelogPage keeps the deliberately uncapped partner-api feed", () => {
  assert.equal(isChurningChangelogPage("/changelog/partner-api/"), false);
  assert.equal(isChurningChangelogPage("/changelog/partner-api/version/v1-0-0/"), false);
});

test("isChurningChangelogPage keeps the hand-authored overview landing page", () => {
  assert.equal(isChurningChangelogPage("/changelog/overview/"), false);
});

test("isChurningChangelogPage keeps non-changelog pages", () => {
  assert.equal(isChurningChangelogPage("/products/booking-engine/"), false);
});
