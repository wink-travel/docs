import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { verifyTurnstile } from "./turnstile.js";

const jsonResponse = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status });

const verify = (token: unknown, fetchImpl: typeof fetch, remoteIp?: string) =>
  verifyTurnstile({ token, secret: "s3cret", remoteIp, fetchImpl });

describe("verifyTurnstile", () => {
  it("rejects a missing token without calling Cloudflare", async () => {
    let called = false;
    const fetchImpl = (async () => {
      called = true;
      return jsonResponse({ success: true });
    }) as typeof fetch;

    for (const token of [undefined, "", "   ", 42]) {
      assert.deepEqual(await verify(token, fetchImpl), { status: "rejected" });
    }
    assert.equal(called, false);
  });

  it("accepts a token Cloudflare validates for an allowed hostname", async () => {
    const fetchImpl = (async () =>
      jsonResponse({ success: true, hostname: "wink.travel" })) as typeof fetch;
    assert.deepEqual(await verify("tok", fetchImpl), { status: "verified" });
  });

  it("rejects a token issued for a different hostname", async () => {
    const fetchImpl = (async () =>
      jsonResponse({ success: true, hostname: "evil.example" })) as typeof fetch;
    assert.deepEqual(await verify("tok", fetchImpl), { status: "rejected" });
  });

  it("rejects a token Cloudflare refuses", async () => {
    const fetchImpl = (async () =>
      jsonResponse({ success: false, "error-codes": ["invalid-input-response"] })) as typeof fetch;
    assert.deepEqual(await verify("tok", fetchImpl), { status: "rejected" });
  });

  it("posts secret, token and remote ip to siteverify", async () => {
    let seen: { url: string; body: URLSearchParams } | undefined;
    const fetchImpl = (async (url: string, init: RequestInit) => {
      seen = { url, body: init.body as URLSearchParams };
      return jsonResponse({ success: true, hostname: "www.wink.travel" });
    }) as unknown as typeof fetch;

    await verify("tok", fetchImpl, "203.0.113.9");
    assert.equal(seen?.url, "https://challenges.cloudflare.com/turnstile/v0/siteverify");
    assert.equal(seen?.body.get("secret"), "s3cret");
    assert.equal(seen?.body.get("response"), "tok");
    assert.equal(seen?.body.get("remoteip"), "203.0.113.9");
  });

  it("fails closed as unavailable on network errors and non-2xx", async () => {
    const boom = (async () => {
      throw new Error("down");
    }) as typeof fetch;
    const fiveHundred = (async () => jsonResponse({}, 500)) as typeof fetch;
    assert.deepEqual(await verify("tok", boom), { status: "unavailable" });
    assert.deepEqual(await verify("tok", fiveHundred), { status: "unavailable" });
  });
});
