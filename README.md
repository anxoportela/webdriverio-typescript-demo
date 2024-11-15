### **🔍 Kata Avanzada: Validar Orden de Productos**

#### 📑 Instrucciones

1. **Objetivo**: Ordena los productos por precio de menor a mayor y valida el orden.
2. **URL**: `https://www.saucedemo.com/`
3. **Pasos**:
   - Inicia sesión.
   - Ordena los productos por precio ascendente.
   - Verifica que los precios estén en orden.

#### 📥 Respuesta

<details>
  <summary>Haz clic aquí para ver la respuesta</summary>

```typescript
import { expect } from "@wdio/globals";

describe("Validar orden de productos", () => {
  it("Debería ordenar productos de menor a mayor precio", async () => {
    await browser.url("https://www.saucedemo.com/");
    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");
    await $("#login-button").click();
    await $(".product_sort_container").selectByVisibleText(
      "Price (low to high)"
    );
    const prices = await $$(".inventory_item_price");
    const priceValues: number[] = [];
    for (let i = 0; i < prices.getElements.length; i++) {
      const priceText = await prices[i].getText();
      const price = parseFloat(priceText.replace("$", "").trim());
      priceValues.push(price);
    }
    const isSorted = priceValues.every(
      (val, i, arr) => !i || arr[i - 1] <= val
    );
    expect(isSorted).toBe(true);
  });
});

```

</details>
