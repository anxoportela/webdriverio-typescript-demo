### **🔍 Kata de Carrito de Compras: Añadir Producto al Carrito**

#### 📑 Instrucciones

1. **Objetivo**: Añade un producto al carrito y verifica que el contador del carrito se actualice.
2. **URL**: `https://www.saucedemo.com/`
3. **Pasos**:
   - Inicia sesión.
   - Selecciona un producto y agrégalo al carrito.
   - Valida que el carrito muestre "1".

### 📥 Respuesta

<details>
  <summary>Haz clic aquí para ver la respuesta</summary>

```typescript
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
```

</details>
