import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  retries: 1,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: process.env.BASE_URL || "https://www.saucedemo.com",
    headless: true,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  }
});
