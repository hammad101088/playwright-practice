import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
  async addFirstProductToCart() {
    await this.click(".inventory_item button");
  }

  async goToCart() {
    await this.click(".shopping_cart_link");
  }
}
