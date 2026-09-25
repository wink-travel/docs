import * as Sentry from "@sentry/astro";

Sentry.init({
  dsn: "https://fd1b761501034410efa19310b3472225@o237992.ingest.us.sentry.io/4512146511757312",
  // Define how likely traces are sampled. Adjust this value in production,
  // or use tracesSampler for greater control.
  tracesSampleRate: 1.0,
});
