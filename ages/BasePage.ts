import { Page } from "@playwright/test";

export class BasePage {
  constructor(protected page: Page) {}

  async click(selector: string) {
    await this.page.click(selector);
  }

  async type(selector: string, text: string) {
    await this.page.fill(selector, text);
  }

  async getText(selector: string) {
    return this.page.textContent(selector);
  }
}
