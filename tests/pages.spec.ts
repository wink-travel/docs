/**
 * Full-site smoke matrix: every English (root-locale) page, rendered under
 * this project's viewport + color scheme (see playwright.config.ts — this
 * spec runs once per matrix project, so once per viewport×theme combo).
 *
 * Routes are discovered straight from src/content/docs/ (see
 * tests/utils/discover-routes.ts), so a page added or removed there is
 * picked up automatically — nothing to update here.
 */
import { test, expect } from "@playwright/test";

import { discoverEnglishRoutes } from "./utils/discover-routes";

const routes = discoverEnglishRoutes();

test.describe("page renders cleanly", () => {
  for (const route of routes) {
    test(route, async ({ page }) => {
      const consoleErrors: string[] = [];
      const pageErrors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") consoleErrors.push(msg.text());
      });
      page.on("pageerror", (err) => pageErrors.push(err.message));

      const response = await page.goto(route, { waitUntil: "load" });
      expect(response, `no response for ${route}`).not.toBeNull();
      expect(response!.status(), `HTTP ${response!.status()} for ${route}`).toBeLessThan(400);

      // The page rendered something real, not a blank or broken shell.
      await expect(page.locator("body")).toBeVisible();
      expect((await page.title()).length, `empty <title> on ${route}`).toBeGreaterThan(0);

      // Most common responsive-layout regression: content wider than the viewport.
      const hasHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      );
      expect(hasHorizontalOverflow, `horizontal overflow on ${route}`).toBe(false);

      // Starlight's inline theme-init script stamps data-theme from
      // prefers-color-scheme before first paint (see ThemeProvider.astro) —
      // confirm it actually followed this project's emulated color scheme.
      const themeMatchesColorScheme = await page.evaluate(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return document.documentElement.dataset.theme === (prefersDark ? "dark" : "light");
      });
      expect(themeMatchesColorScheme, `data-theme didn't follow prefers-color-scheme on ${route}`).toBe(
        true,
      );

      expect(consoleErrors, `console errors on ${route}:\n${consoleErrors.join("\n")}`).toEqual([]);
      expect(pageErrors, `uncaught page errors on ${route}:\n${pageErrors.join("\n")}`).toEqual([]);
    });
  }
});
