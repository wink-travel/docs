/**
 * Locale coverage: every page that actually exists for each translated
 * locale today (translation coverage varies by page — see
 * tests/utils/discover-routes.ts). Runs once (the "locales" project in
 * playwright.config.ts, desktop/light) rather than across the full
 * viewport×theme matrix in pages.spec.ts — a translated page renders the
 * same components as its English source, so layout/theme regressions are
 * already caught there; this file is about translation/routing correctness.
 */
import { test, expect } from "@playwright/test";

import { discoverLocaleRoutes, locales } from "./utils/discover-routes";

for (const locale of locales) {
  const routes = discoverLocaleRoutes(locale.id);
  if (!routes.length) continue; // nothing translated for this locale yet

  test.describe(`${locale.id} (${locale.label})`, () => {
    for (const route of routes) {
      test(route, async ({ page }) => {
        const consoleErrors: string[] = [];
        page.on("console", (msg) => {
          if (msg.type() === "error") consoleErrors.push(msg.text());
        });

        const response = await page.goto(route, { waitUntil: "load" });
        expect(response, `no response for ${route}`).not.toBeNull();
        expect(response!.status(), `HTTP ${response!.status()} for ${route}`).toBeLessThan(400);

        // Starlight sets <html lang> to this locale's configured BCP-47 tag
        // (astro.config.mjs's `locales` map — lang always equals the locale key here).
        const lang = await page.locator("html").getAttribute("lang");
        expect(
          lang?.toLowerCase(),
          `<html lang="${lang}"> doesn't match locale "${locale.id}" on ${route}`,
        ).toBe(locale.id.toLowerCase());

        expect(consoleErrors, `console errors on ${route}:\n${consoleErrors.join("\n")}`).toEqual([]);
      });
    }
  });
}
