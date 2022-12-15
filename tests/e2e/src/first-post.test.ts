import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "parallel" });

test.describe("first-post", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/posts/2022/12/01/introducing");
  });
  // TODO: check post title
  // test("title", async ({ page }) => {
  //   await expect(page).toHaveTitle(/sugardonblog/);
  // });
});

test.describe("first-post / mermaid", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/posts/2022/12/01/introducing");
  });

  test("mermaid", async ({ page }) => {
    const element = page.locator("text=なんか起きる");
    // check mermaid node is visible
    await expect(element).toHaveAttribute("class", "nodeLabel");
  });
});

test.describe("first-post / code", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/posts/2022/12/01/introducing");
  });

  test("language-ts", async ({ page }) => {
    // <code class="language-ts">
    await expect(page.locator(".language-ts")).toBeVisible();
  });
  test("language-go", async ({ page }) => {
    // <code class="language-go">
    await expect(page.locator(".language-go")).toBeVisible();
  });
});
