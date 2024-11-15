import { expect } from "@wdio/globals";

describe('Proceso de compra', () => {
  it('Debería completar una compra', async () => {
    await browser.url('https://www.saucedemo.com/');
    await $('#user-name').setValue('standard_user');
    await $('#password').setValue('secret_sauce');
    await $('#login-button').click();

    await $('.inventory_item button').click();
    await $('.shopping_cart_link').click();
    await $('#checkout').click();

    await $('#first-name').setValue('Juan');
    await $('#last-name').setValue('Pérez');
    await $('#postal-code').setValue('12345');
    await $('#continue').click();
    await $('#finish').click();

    const confirmationMessage: string = await $('.complete-header').getText();
    expect(confirmationMessage).toHaveText('THANK YOU FOR YOUR ORDER');
  });
});
