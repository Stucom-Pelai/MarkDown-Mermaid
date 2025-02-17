
# **Conclusión General**  

🔹 **Las funcionalidades principales están bien implementadas en general.**  
🔹 **Los problemas más comunes están relacionados con selectores poco robustos, manejo de `tabId` y errores en la detección de precios.**  
🔹 **Se recomienda mejorar la estabilidad de las extensiones corrigiendo los problemas detectados.**  

Las funcionalidades principales han sido implementadas correctamente en la mayoría de las entregas:  

✅ **SET BACKGROUND COLOR** – Correcto en todas las entregas. Se usa `document.body.style.backgroundColor`.  
✅ **SET COLOR LINKS** – Correcto, aunque en algunos casos se usa `window.location.reload()` para aplicar los cambios, lo que no es óptimo.  
✅ **REMOVE IMAGES** – Correcto, aunque algunos eliminan las imágenes con `.remove()`, mientras que otros solo las ocultan (`display: none`).  
✅ **MOSTRAR/OCULTAR PASSWORDS** – Correcto en la mayoría, pero algunos no utilizan el atributo `is_pass`, lo que dificulta alternar correctamente.  
✅ **STICKY MENU en Amazon** – Correcto en casi todas las entregas.  
✅ **INFORMACIÓN IMÁGENES** – Funciona bien, pero en muchas entregas el tooltip puede salirse de la pantalla o solaparse con otros elementos.  
✅ **PRECIO MÁS BAJO** – Implementado en general, pero con problemas en la detección del precio debido a formatos numéricos y selectores poco precisos.  

---

# **Errores Comunes y Mejoras Necesarias**  

📌 **1. Manejo de `tabId` en `chrome.scripting.executeScript`**  
🔹 **Problema**: `tabId` no siempre está definido en el momento de ejecutar los scripts, lo que genera errores.  
🔹 **Solución**: Asegurar que `tabId` se obtenga dentro de cada evento o usar `chrome.tabs.query` de forma síncrona.

```html
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete") {
        chrome.scripting.executeScript({
            target: { tabId },
            files: ["content.js"]
        });
    }
});
```

**2. Selección de elementos en Facebook**  
🔹 **Problema**: Se usan selectores como `document.querySelector("._8esj")`, que pueden cambiar con el tiempo.  
🔹 **Solución**: Aplicar los cambios a `document.body` o verificar la existencia del elemento antes de modificarlo.  

```html
function setBackgroundColor(color) {
    if (document.body) {
        document.body.style.backgroundColor = color;
    }
}
```

📌 **3. Tooltip de `INFORMACIÓN IMÁGENES` en Amazon**  
🔹 **Problema**: El tooltip puede quedar fuera de la pantalla si la imagen está cerca del borde.  
🔹 **Solución**: Ajustar dinámicamente la posición para que no se desborde.  

```html
 document.querySelectorAll("img").forEach(img => {
        img.addEventListener("mouseenter", (e) => {
            ....
            
            // Posicionar el tooltip dentro de la pantalla
            const rect = img.getBoundingClientRect();
            tooltip.style.top = `${Math.min(window.innerHeight - 30, rect.top + window.scrollY + 10)}px`;
            tooltip.style.left = `${Math.min(window.innerWidth - 150, rect.left + window.scrollX + 10)}px`;
            ....
            img.setAttribute("data-tooltip", "true");
        });

        
    });
```

📌 **4. Formato de precios en `PRECIO MÁS BAJO`**  
🔹 **Problema**: `parseFloat(price.replace(/[^0-9,.]/g, "").replace(",", "."))` puede fallar en algunas configuraciones regionales.  
🔹 **Solución**: Validar el formato antes de convertirlo, considerando distintos formatos decimales.  

```html
        let priceText = priceSpan.textContent.replace(/[^0-9,\.]/g, "").trim();
        priceText = priceText.replace(",", ".");
        
        // Validar diferentes formatos de precios
        const price = parseFloat(priceText);
        if (!isNaN(price) && price < lowestPrice) {
            lowestPrice = price;
            lowestProduct = priceSpan.closest(".s-result-item");
        }
```

📌 **5. Manejo del atributo `is_pass` en `MOSTRAR/OCULTAR PASSWORDS`**  
🔹 **Problema**: Algunos no usan el atributo `is_pass`, lo que impide alternar correctamente entre `password` y `text`.  
🔹 **Solución**: Asegurar que todos los inputs `type=password` tengan el atributo `is_pass` para un cambio consistente.  

```html
 document.querySelectorAll("input[type='password']").forEach(input => {
        if (!input.hasAttribute("data-is-pass")) {
            input.setAttribute("data-is-pass", "false");
        }
        const isPass = input.getAttribute("data-is-pass") === "true";
        input.setAttribute("data-is-pass", !isPass);
        input.type = isPass ? "password" : "text";
    });
```

📌 **6. Uso de `window.location.reload()` en `SET COLOR LINKS`**  
🔹 **Problema**: Algunos usan `window.location.reload()` para actualizar los enlaces, lo que no es eficiente.  
🔹 **Solución**: Guardar el color original en un `data-` atributo y restaurarlo sin recargar la página.  

```html
 if (!link.hasAttribute("data-original-color")) {
            link.setAttribute("data-original-color", link.style.color || "black");
        }
        link.style.color = color;
```

---
