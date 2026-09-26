const ALLOWED_ORIGINS: readonly string[] = [
  "https://wink.travel",
  "https://www.wink.travel",
  // Google Translate serves wink.travel from this exact per-site subdomain.
  // Pinned, never suffix-matched: every translated site gets its own
  // *.translate.goog host, so a suffix would admit origins we do not control.
  "https://wink-travel.translate.goog",
];

export type OriginCheck =
  /** Proceed. `header` is the value to echo back, or null when there is no Origin to echo. */
  | { allowed: true; header: string | null }
  | { allowed: false };

/**
 * Origin is a browser-side guard only: any script can send or omit it. It stops
 * other websites from driving a visitor's browser at this endpoint; it is NOT
 * abuse protection. That is the job of the Turnstile check and Cloudflare rate
 * limit, which apply to every request whatever its Origin.
 */
export function checkOrigin(request: { headers: { origin?: string } }): OriginCheck {
  const origin = request.headers.origin;

  // A missing Origin is a header stripped by a privacy setting, VPN, corporate
  // proxy or in-app browser -- or a non-browser client. Refusing it lost real
  // enquiries, and it stopped no script, so it is allowed and left to Turnstile.
  if (origin === undefined || origin === "") {
    return { allowed: true, header: null };
  }

  if (ALLOWED_ORIGINS.includes(origin)) {
    return { allowed: true, header: origin };
  }

  // Present but unknown, including the literal "null" of a sandboxed iframe.
  return { allowed: false };
}
