### **🔍 Kata de Proceso de Checkout: Completar una Compra**

#### 📑 Instrucciones

1. **Objetivo**: Simula un proceso de compra completo.
2. **URL**: `https://www.saucedemo.com/`
3. **Pasos**:
   - Añade un producto al carrito.
   - Procede a **checkout**.
   - Ingresa información de envío y finaliza la compra.
   - Verifica el mensaje de confirmación.

### 📥 Respuesta

<details>
  <summary>Haz clic aquí para ver la respuesta</summary>

```typescript
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

```

</details>
