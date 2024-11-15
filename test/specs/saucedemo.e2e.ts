import { expect } from "@wdio/globals";

describe('Manejo de errores en login', () => {
  it('Debería mostrar un mensaje de error para credenciales incorrectas', async () => {
    await browser.url('https://www.saucedemo.com/');
    await $('#user-name').setValue('incorrect_user');
    await $('#password').setValue('wrong_password');
    await $('#login-button').click();

    const errorMessage = await $('.error-message-container').getText();
    expect(errorMessage).toContain('Username and password do not match');
  });
});
