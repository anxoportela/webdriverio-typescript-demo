import { expect } from "@wdio/globals";

describe('Carrito de compras', () => {
  it('Debería añadir un producto al carrito', async () => {
    await browser.url('https://www.saucedemo.com/');
    await $('#user-name').setValue('standard_user');
    await $('#password').setValue('secret_sauce');
    await $('#login-button').click();

    await $('.inventory_item button').click();
    const cartBadge = await $('.shopping_cart_badge');

    await expect(cartBadge).toHaveText('1');
  });
});
