<!-- markdownlint-disable -->
### **🔍 Kata de Login: Iniciar Sesión en SauceDemo**

#### 📑 Instrucciones

1. **Objetivo**: Inicia sesión en SauceDemo con credenciales válidas.
2. **URL**: `https://www.saucedemo.com/`
3. **Credenciales**:
   - **Usuario**: `standard_user`
   - **Contraseña**: `secret_sauce`
4. **Pasos**:
   - Inicia sesión con las credenciales proporcionadas.
   - Valida que seas redirigido al inventario.

#### 📥 Respuesta

<details>
  <summary>Haz clic aquí para ver la respuesta</summary>

```typescript
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
```

</details>
