<!-- markdownlint-disable -->
### **🔍 Kata Básica: Abrir la Página y Verificar el Título**

#### 📑 Instrucciones

1. **Objetivo**: Abre la página principal de **SauceDemo** y verifica que el título sea correcto.
2. **URL**: `https://www.saucedemo.com/`
3. **Pasos**:
   - Navega a la página principal.
   - Valida que el título contenga la palabra **"Swag Labs"**.

#### 📥 Respuesta

<details>
  <summary>Haz clic aquí para ver la respuesta</summary>

```typescript
import { expect } from "@wdio/globals";

describe("Página de inicio", () => {
  it("Debería tener el título correcto", async () => {
    await browser.url("https://www.saucedemo.com/");
    const title: string = await browser.getTitle();
    expect(title).toHaveText("Swag Labs");
  });
});
```

</details>
