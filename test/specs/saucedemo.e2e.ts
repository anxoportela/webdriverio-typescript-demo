import { expect } from "@wdio/globals";

describe("Página de inicio", () => {
  it("Debería tener el título correcto", async () => {
    await browser.url("https://www.saucedemo.com/");
    const title: string = await browser.getTitle();
    expect(title).toHaveText("Swag Labs");
  });
});
