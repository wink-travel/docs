const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/** Hostnames a Turnstile token may have been issued for. */
const ALLOWED_HOSTNAMES: readonly string[] = [
  "wink.travel",
  "www.wink.travel",
  "wink-travel.translate.goog",
];

export type TurnstileResult =
  | { status: "verified" }
  /** The token is missing, invalid, expired, reused or for another hostname. */
  | { status: "rejected" }
  /** Cloudflare could not be reached; the caller must fail closed. */
  | { status: "unavailable" };

interface VerifyOptions {
  token: unknown;
  secret: string;
  remoteIp?: string;
  fetchImpl?: typeof fetch;
}

interface SiteverifyResponse {
  success?: boolean;
  hostname?: string;
}

export async function verifyTurnstile({
  token,
  secret,
  remoteIp,
  fetchImpl = fetch,
}: VerifyOptions): Promise<TurnstileResult> {
  if (typeof token !== "string" || token.trim() === "") {
    return { status: "rejected" };
  }

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) {
    body.set("remoteip", remoteIp);
  }

  try {
    const response = await fetchImpl(SITEVERIFY_URL, { method: "POST", body });
    if (!response.ok) {
      console.error("Turnstile siteverify returned HTTP", response.status);
      return { status: "unavailable" };
    }

    const result = (await response.json()) as SiteverifyResponse;
    const hostnameOk =
      typeof result.hostname === "string" && ALLOWED_HOSTNAMES.includes(result.hostname);

    return result.success === true && hostnameOk ? { status: "verified" } : { status: "rejected" };
  } catch (error) {
    console.error("Turnstile siteverify failed:", error);
    return { status: "unavailable" };
  }
}
