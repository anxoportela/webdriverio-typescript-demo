import { expect } from "@wdio/globals";

describe('Iniciar sesión en SauceDemo', () => {
  it('Debería iniciar sesión con éxito', async () => {
    await browser.url('https://www.saucedemo.com/');
    await $('#user-name').setValue('standard_user');
    await $('#password').setValue('secret_sauce');
    await $('#login-button').click();

    await expect(await browser.getUrl()).toMatch(/inventory\.html/);
  });
});
