import { defineConfig, devices } from "@playwright/test";

const PORT = 4321;
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
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"], ["html", { open: "never" }]],
  timeout: 30_000,
  expect: { timeout: 10_000 },
  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
  },

  // Points at `astro dev`, not a production build: this repo's build has a
  // pre-existing, unrelated bug (broken relative import path in translated
  // developers/webhook-events.mdx pages, predating this test suite) that
  // currently fails `astro build` outright. `astro dev` renders each route
  // on demand, so it isn't blocked by that — switch this to
  // `npm run preview` (after `npm run build`) once that bug is fixed, for
  // closer-to-production testing.
  webServer: {
    command: `npm run dev -- --port ${PORT}`,
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
  ],
});
