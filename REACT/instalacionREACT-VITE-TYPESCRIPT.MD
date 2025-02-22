
# Instalacion REACT-TYPSCRIPT+VITE

## **1. Instalar Node.js y npm**

React usa **Node.js** y **npm (Node Package Manager)** para manejar paquetes y dependencias.

🔹 **Descargar e instalar:**  
👉 [https://nodejs.org/](https://nodejs.org/) (Recomiendo la versión LTS para mayor estabilidad).

🔹 **Verificar instalación:**  

Abre una terminal y ejecuta:

```sh
node -v
npm -v
```

Si devuelve versiones, la instalación fue correcta.

---

## **2. Instalar Visual Studio Code**

🔹 **Descargar e instalar:**  
👉 [https://code.visualstudio.com/](https://code.visualstudio.com/)

🔹 **Extensiones recomendadas para React:**

- **ES7+ React/Redux/React-Native snippets**
- **Prettier - Code formatter** (para formateo automático)
- **React Developer Tools** (para depuración)

Para instalar extensiones, ve a **VS Code → Extensions (Ctrl + Shift + X)** y busca estos nombres.

---

## **3. Crear un Proyecto React con Vite (recomendado)**

React se puede crear con `create-react-app`, pero **Vite** es más rápido y ligero.

- **Comando para crear un nuevo proyecto con Vite:**

```sh
npm create vite@latest nombre-del-proyecto --template react
? Select a framework: › - Use arrow-keys. Return to submit.
    Vanilla
    Vue
❯   React
    Preact
    Lit
    Svelte
    Solid
    Qwik
    Angular
    Others

✔ Select a framework: › React
? Select a variant: › - Use arrow-keys. Return to submit.
❯   TypeScript
    TypeScript + SWC
    JavaScript
    JavaScript + SWC
    React Router v7 ↗
```

Reemplaza `nombre-del-proyecto` con el nombre que desees.


Las características que ebe

- **Entrar en la carpeta del proyecto:**

```sh
cd nombre-del-proyecto
```

🔹 **Instalar dependencias:**

```sh
npm install
```

---

## **4. Ejecutar el Servidor de Desarrollo**

Para ver la aplicación en el navegador, ejecuta:

```sh
npm run dev
```

Luego abre en el navegador la URL que aparece (por defecto `http://localhost:5173/`).

---

## **5. Estructura del Proyecto**

Después de crear el proyecto, verás una estructura como esta:
📂 nombre-del-proyecto
 ├── 📂 node_modules      # Paquetes instalados
 ├── 📂 public            # Archivos estáticos
 ├── 📂 src               # Código fuente
 │   ├── App.tsx          # Componente principal
 │   ├── main.tsx         # Punto de entrada
 │   ├── index.css        # Estilos globales
 ├── .gitignore           # Archivos ignorados por Git
 ├── package.json         # Configuración del proyecto
 ├── vite.config.js       # Configuración de Vite

---

## **6. Modificar el Proyecto**

- **Editar `App.jsx`:**  

Abre el archivo **`src/App.jsx`** y reemplázalo con algo simple:

```jsx
export default function App() {
  return (
    <div>
      <h1>¡Hola, React con Vite!</h1>
    </div>
  );
}
```

Guarda el archivo y revisa en el navegador.

---

## **7. Agregar Estilos**

Puedes editar **`src/index.css`** o crear archivos CSS separados y usarlos en los componentes.

Ejemplo en `App.jsx`:

```jsx
import "./App.css";

export default function App() {
  return <h1 className="titulo">¡Hola, React con Vite!</h1>;
}
```

Y en `App.css`:

```css
.titulo {
  color: blue;
  text-align: center;
}
```

---

## **8. Agregar Bootstrap o Tailwind (Opcional)**


Si quieres usar estilos predefinidos:

🔹 **Bootstrap:**

```sh
npm install bootstrap
```

Luego impórtalo en `main.jsx`:

```jsx
import "bootstrap/dist/css/bootstrap.min.css";
```

🔹 **Tailwind CSS:**  

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configura `tailwind.config.js` y usa sus clases en los componentes.

---



### Pasos iniciales para crear el entorno:

1. **Instalar NodeJS**: [NodeJS](https://nodejs.org/es/)

2. **Actualizar Create React App**:  

   ```bash
   npm install react-scripts@latest
   ```

3. **Crear un proyecto con Create React App**:  

   ```bash
   npx create-react-app nombre_del_proyecto --template typescript
   ```

4. **Iniciar un proyecto (situados dentro de la carpeta del proyecto)**:  

   ```bash
   npm start -o
   ```

5. **Encapsular un proyecto (situados dentro de la carpeta del proyecto)**:  
   ```bash
   npm run build
   ```

- Modificamos `App.tsx` para agregar y eliminar contenido en la aplicación web.

---
