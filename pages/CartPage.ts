import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  async proceedToCheckout() {
    await this.click("#checkout");
  }
}
