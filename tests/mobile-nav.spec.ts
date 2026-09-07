/**
 * Regression coverage for the mobile hamburger menu: the panel
 * (`[data-mobile-panel]` in MarketingNav.astro) is absolutely positioned
 * inside Starlight's fixed `.header`. A fixed subtree is painted relative to
 * the viewport, not the document flow, so overflow inside it never grows the
 * page's scroll height — scrolling the page did nothing, and the panel had
 * no scroll container of its own, so once the link list ran taller than the
 * screen (About, five solutions, seven products, Agentic AI, Pricing, three
 * resources, plus the Login/Sign up CTAs easily do), everything past the
 * fold was permanently unreachable. Fixed by bounding the panel's height and
 * giving it `overflow-y-auto` — see MarketingNav.astro.
 *
 * Runs once (the "mobile-nav" project in playwright.config.ts, Pixel 7),
 * not across the full viewport×theme matrix — this exercises interaction
 * and layout mechanics, not a per-theme visual regression.
 */
import { test, expect } from "@playwright/test";

test.describe("mobile hamburger menu", () => {
  test("opens, and scrolling the menu itself reveals the Sign up CTA", async ({ page }) => {
    await page.goto("/", { waitUntil: "load" });

    const toggle = page.locator("[data-mobile-toggle]");
    const panel = page.locator("[data-mobile-panel]");

    await expect(panel).toBeHidden();
    await toggle.click();
    await expect(panel).toBeVisible();
    await expect(toggle).toHaveAttribute("aria-expanded", "true");

    // The panel must be its own scroll container — not just tall enough for
    // its content — or content past the viewport edge is unreachable no
    // matter how far the surrounding page scrolls (the bug this guards).
    const isScrollable = await panel.evaluate((el) => el.scrollHeight > el.clientHeight);
    test.skip(!isScrollable, "menu content fits without scrolling on this viewport");

    const signUp = panel.getByRole("link", { name: "Sign up" });
    await expect(signUp).not.toBeInViewport();

    // Scrolling the wider page must NOT be what reveals the rest of the
    // menu — that's exactly the failure mode being guarded against.
    await page.mouse.wheel(0, 2000);
    await expect(signUp).not.toBeInViewport();

    // Scrolling the panel itself is what should work.
    await panel.evaluate((el) => el.scrollTo({ top: el.scrollHeight }));
    await expect(signUp).toBeInViewport();
  });
});
