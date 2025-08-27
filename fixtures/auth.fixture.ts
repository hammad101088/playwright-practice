import { test as base } from "@playwright/test";
import users from "../data/users.json";

export const test = base.extend<{
  loginAsValidUser: () => Promise<void>;
}>({
  loginAsValidUser: async ({ page }, use) => {
    await page.goto("/");
    await page.fill("#user-name", users.validUser.username);
    await page.fill("#password", users.validUser.password);
    await page.click("#login-button");
    await use(async () => {});
  },
});

export { expect } from "@playwright/test";
