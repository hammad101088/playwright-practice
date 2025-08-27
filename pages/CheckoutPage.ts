import { BasePage } from "./BasePage";

export class CheckoutPage extends BasePage {
  async fillDetails(firstName: string, lastName: string, zip: string) {
    await this.type("#first-name", firstName);
    await this.type("#last-name", lastName);
    await this.type("#postal-code", zip);
    await this.click("#continue");
  }

  async finishOrder() {
    await this.click("#finish");
  }

  getConfirmationMessage() {
    return this.page.locator(".complete-header");
  }
}
