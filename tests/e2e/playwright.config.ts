import { type PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./src",
  timeout: 30000, // 30sec,
  // https://playwright.dev/docs/test-reporters#github-actions-annotations
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000",
    video: process.env.PLAYWRIGHT_ENABLE_REPORT ? "on" : "off",
    trace: process.env.PLAYWRIGHT_ENABLE_REPORT ? "on" : "off",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
};
export default config;
