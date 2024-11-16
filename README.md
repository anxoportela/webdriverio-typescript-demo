<!-- markdownlint-disable -->
### **🔍 Kata de Validación de Productos: Verificar Precios y Nombres**

#### 📑 Instrucciones

1. **Objetivo**: Valida que los productos tengan precios y nombres visibles.
2. **URL**: `https://www.saucedemo.com/`
3. **Pasos**:
   - Inicia sesión.
   - Verifica que cada producto tenga un nombre y un precio con formato **$X.XX**.

#### 📥 Respuesta

<details>
  <summary>Haz clic aquí para ver la respuesta</summary>

```typescript
import { expect } from "@wdio/globals";

describe('Validación de productos', () => {
  it('Debería mostrar precios y nombres de productos', async () => {
    await browser.url('https://www.saucedemo.com/');
    await $('#user-name').setValue('standard_user');
    await $('#password').setValue('secret_sauce');
    await $('#login-button').click();

    const items = await $$('.inventory_item');
    for await (const item of items) {
      const name = await item.$('.inventory_item_name').getText();
      const price = await item.$('.inventory_item_price').getText();

      expect(name).not.toBe("");
      expect(/^\$\d+\.\d{2}$/.test(price)).toBe(true);
    }
  });
});

```

</details>
