### **🔍 Kata de Pruebas de Componentes: Validar Funcionalidades del Header**

#### 📑 Instrucciones

1. **Objetivo**: Verifica que los elementos del header (logo, menú de usuario, carrito) funcionen correctamente.
2. **URL**: `https://www.saucedemo.com/`
3. **Pasos**:
   - Inicia sesión.
   - Verifica que el logo sea visible.
   - Haz clic en el menú de usuario y verifica que se abra y cierre correctamente.
   - Verifica que el icono del carrito esté visible.

#### 📥 Respuesta

<details>
  <summary>Haz clic aquí para ver la respuesta</summary>

```typescript
import { expect } from "@wdio/globals";

describe('Pruebas de componentes del header', () => {
  it('Debería mostrar el logo, funcionar el menú de usuario y mostrar el carrito', async () => {
    await browser.url('https://www.saucedemo.com/');
    await $('#user-name').setValue('standard_user');
    await $('#password').setValue('secret_sauce');
    await $('#login-button').click();

    // Verificar que el logo esté visible
    await expect($('.app_logo')).toBeDisplayed();

    // Abrir y cerrar el menú de usuario
    await $('#react-burger-menu-btn').click();
    await expect($('#logout_sidebar_link')).toBeDisplayed();
    await $('#react-burger-cross-btn').click();
    await expect($('#logout_sidebar_link')).not.toBeDisplayed();

    // Verificar que el carrito esté visible
    await expect($('.shopping_cart_link')).toBeDisplayed();
  });
});

```

</details>
