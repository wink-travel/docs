import { defineConfig, devices } from "@playwright/test";

// Deliberately not 4321: keeps this from colliding with (or accidentally
// reusing, via reuseExistingServer below) a separately-running `astro dev`.
const PORT = 4322;
const BASE_URL = `http://localhost:${PORT}`;

/**
 * Full page-render matrix: every discovered English route, crossed with
 * viewport size and color scheme. See tests/pages.spec.ts.
 */
const MATRIX_PROJECTS = [
  { name: "mobile-light", device: devices["Pixel 7"], colorScheme: "light" as const },
  { name: "mobile-dark", device: devices["Pixel 7"], colorScheme: "dark" as const },
  { name: "tablet-light", device: devices["iPad Mini"], colorScheme: "light" as const },
  { name: "tablet-dark", device: devices["iPad Mini"], colorScheme: "dark" as const },
  {
    name: "desktop-light",
    device: { viewport: { width: 1440, height: 900 } },
    colorScheme: "light" as const,
  },
  {
    name: "desktop-dark",
    device: { viewport: { width: 1440, height: 900 } },
    colorScheme: "dark" as const,
  },
];

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  // This suite hammers a single `astro preview` process with a lot of
  // parallel requests; under that load a page occasionally shows a genuine
  // but transient "request timed out" (confirmed: re-running any one of
  // these in isolation always passes, and it's never the same page twice).
  // Retries absorb that without masking a real, reproducible failure — a
  // page that fails all 3 attempts is a real bug, not contention.
  retries: 2,
  reporter: [["list"], ["html", { open: "never" }]],
  timeout: 30_000,
  expect: { timeout: 10_000 },
  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
  },

  // Points at `astro preview` (a static build), not `astro dev`: dev renders
  // each route on demand and doesn't hold up well under this suite's request
  // volume — a full locale run (~7,600 requests) pegged it at 100% CPU with
  // unbounded memory growth and it stopped responding. `npm run build` must
  // be run first; this just serves the resulting dist/.
  webServer: {
    command: `npm run preview -- --port ${PORT}`,
    url: BASE_URL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },

  projects: [
    // The full page/viewport/theme matrix — see tests/pages.spec.ts.
    ...MATRIX_PROJECTS.map(({ name, device, colorScheme }) => ({
      name,
      testMatch: /pages\.spec\.ts/,
      use: { ...device, colorScheme },
    })),
    // Locale coverage and the locale-link unit test run once each, not
    // multiplied across the 6 matrix projects above — see tests/locales.spec.ts
    // and tests/locale-links.spec.ts for why a single pass is the right amount
    // of coverage for these.
    {
      name: "locales",
      testMatch: /locale(s|-links)\.spec\.ts/,
      use: { ...devices["Desktop Chrome"], colorScheme: "light" },
    },
    // Mobile hamburger menu: interaction/layout mechanics, not a visual
    // regression sweep, so one real mobile device is enough — see
    // tests/mobile-nav.spec.ts. Needs an actual mobile viewport (the
    // hamburger only renders below the `lg` breakpoint), unlike the
    // "locales" project above.
    {
      name: "mobile-nav",
      testMatch: /mobile-nav\.spec\.ts/,
      use: { ...devices["Pixel 7"], colorScheme: "light" },
    },
  ],
});
