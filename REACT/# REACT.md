# REACT

Aquí tienes un **protocolo paso a paso** para empezar a trabajar con **React** en **Visual Studio Code (VS Code)**:

---

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

## **9. Crear Componentes**

Los componentes en React son funciones que retornan JSX.






Aquí tienes un formulario de **Login** simple en la página principal de tu proyecto en **React con Vite**. 

---

### **1️⃣ Reemplaza `App.jsx` con este código:**
```jsx
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
```

---

### **2️⃣ Crea `App.css` para los estilos**
Si aún no tienes este archivo en `src/`, créalo y agrégale este CSS:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-group label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
```

---

### **3️⃣ Importa `App.css` en `App.jsx`**
Asegúrate de que `App.jsx` tenga esta línea al inicio:
```jsx
import "./App.css";
```

---

### **4️⃣ Ejecuta tu app**
Si ya tienes el servidor en ejecución, debería actualizarse automáticamente. Si no, ejecuta:
```sh
npm run dev
```

¡Listo! Ahora tienes un **formulario de login** simple con React en tu página principal. 🚀🎉