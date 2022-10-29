import { test, expect } from "@playwright/test";

// https://playwright.dev/docs/test-parallel
test.describe.configure({ mode: "parallel" });

test.describe("home", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("home layout", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/sugardonblog/);
  });

  // navigation
  test("navigation", async ({ page }) => {
    const aboutLink = page.getByRole("navigation").getByText("sugardon blog");
    await aboutLink.click();
    await expect(page).not.toHaveURL("error");
  });
  test("navigation about", async ({ page }) => {
    const aboutLink = page.getByRole("navigation").getByText("About");
    await aboutLink.click();
    await expect(page).toHaveURL(/.*about/);
  });
  test("navigation articles", async ({ page }) => {
    const aboutButton = page.getByRole("navigation").getByText("Articles");
    await aboutButton.click();
    await expect(page).toHaveURL(/.*posts/);
  });

  // main
  test("main about", async ({ page }) => {
    const aboutButton = page.getByRole("main").getByText("About");
    await aboutButton.click();
    await expect(page).toHaveURL(/.*about/);
  });
});
