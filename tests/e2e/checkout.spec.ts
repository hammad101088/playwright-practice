import { test, expect } from "../../fixtures/auth.fixture";
import { HomePage } from "../../pages/HomePage";
import { CartPage } from "../../pages/CartPage";
import { CheckoutPage } from "../../pages/CheckoutPage";

test("E2E Checkout Flow", async ({ page, loginAsValidUser }) => {
  await loginAsValidUser();

  const home = new HomePage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await home.addFirstProductToCart();
  await home.goToCart();
  await cart.proceedToCheckout();

  await checkout.fillDetails("Mohamed", "Hammad", "12345");
  await checkout.finishOrder();

  await expect(checkout.getConfirmationMessage()).toHaveText("Thank you for your order!");
});
