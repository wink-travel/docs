import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { checkOrigin } from "./origin.js";

const check = (origin?: string) => checkOrigin({ headers: { origin } });

describe("checkOrigin", () => {
  for (const origin of [
    "https://wink.travel",
    "https://www.wink.travel",
    "https://wink-travel.translate.goog",
  ]) {
    it(`allows and echoes ${origin}`, () => {
      assert.deepEqual(check(origin), { allowed: true, header: origin });
    });
  }

  it("allows a missing Origin without echoing a header", () => {
    assert.deepEqual(check(undefined), { allowed: true, header: null });
    assert.deepEqual(check(""), { allowed: true, header: null });
  });

  for (const origin of [
    "null",
    "http://wink.travel",
    "https://wink.travel.evil.com",
    "https://evilwink.travel",
    "https://wink-academy.web.app",
    "https://wink-academy.firebaseapp.com",
    "https://evil-example-com.translate.goog",
    "http://wink-travel.translate.goog",
    "https://x.wink-travel.translate.goog",
  ]) {
    it(`refuses ${origin}`, () => {
      assert.deepEqual(check(origin), { allowed: false });
    });
  }
});
