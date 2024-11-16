<!-- markdownlint-disable -->
### **🔍 Kata de Manejo de Errores: Verificar Mensaje de Error en Login Fallido**

#### 📑 Instrucciones

1. **Objetivo**: Verifica el mensaje de error al usar credenciales incorrectas.
2. **URL**: `https://www.saucedemo.com/`
3. **Pasos**:
   - Intenta iniciar sesión con credenciales incorrectas.
   - Valida que se muestre un mensaje de error adecuado.

#### 📥 Respuesta

<details>
  <summary>Haz clic aquí para ver la respuesta</summary>

```typescript
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


```

</details>
