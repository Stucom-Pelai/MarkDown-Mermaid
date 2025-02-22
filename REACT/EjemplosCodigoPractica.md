
# Ejemplos de código para la práctica

Utiliza estos ejemplos en tu proyecto REACT para validar su validez

## Componente para leer un json que cree el cuestionario

Aquí tienes un ejemplo de cómo podrías crear un componente en **React + TypeScript** que lee un archivo **JSON** con los datos necesarios para construir un cuestionario. Este ejemplo está diseñado para que el componente lea los elementos de un archivo JSON, los procese y renderice un cuestionario dinámico con las preguntas y opciones correspondientes.

### **Estructura del JSON**

Supongamos que el archivo JSON tiene la siguiente estructura:

```json
{
  "cuestionario": {
    "titulo": "Cuestionario de ejemplo",
    "preguntas": [
      {
        "id": "nombre",
        "tipo": "text",
        "pregunta": "¿Cuál es tu nombre?",
        "respuesta": ""
      },
      {
        "id": "edad",
        "tipo": "number",
        "pregunta": "¿Cuántos años tienes?",
        "respuesta": ""
      },
      {
        "id": "sexo",
        "tipo": "select",
        "pregunta": "¿Cuál es tu sexo?",
        "opciones": ["Masculino", "Femenino", "Otro"],
        "respuesta": ""
      }
    ]
  }
}
```

#### **Componente en React + TypeScript que lee desde un JSON**

Primero, crea un archivo JSON en tu proyecto (por ejemplo, `cuestionario.json`) y luego crea el siguiente componente para leer y mostrar las preguntas del cuestionario.

#### **Código del Componente:**

```tsx
import React, { useState, useEffect } from 'react';

// Definimos los tipos del JSON para asegurar que el componente tiene los datos correctos.
interface Pregunta {
  id: string;
  tipo: 'text' | 'number' | 'select';
  pregunta: string;
  opciones?: string[];
  respuesta: string;
}

interface Cuestionario {
  titulo: string;
  preguntas: Pregunta[];
}

const CuestionarioComponent: React.FC = () => {
  // 1. Estado para almacenar los datos del cuestionario
  const [cuestionario, setCuestionario] = useState<Cuestionario | null>(null);

  // 2. Estado para manejar las respuestas del cuestionario
  const [respuestas, setRespuestas] = useState<{ [key: string]: string }>({});

  // 3. Leemos el archivo JSON al cargar el componente
  useEffect(() => {
    const fetchCuestionario = async () => {
      try {
        const response = await fetch('/path/to/cuestionario.json');  // Ruta del archivo JSON
        const data: Cuestionario = await response.json();
        setCuestionario(data);  // Guardamos los datos en el estado
      } catch (error) {
        console.error('Error al cargar el cuestionario:', error);
      }
    };

    fetchCuestionario();
  }, []);  // Solo se ejecuta una vez cuando el componente se monta

  // 4. Función para manejar el cambio de respuestas
  const handleRespuestaChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, id: string) => {
    setRespuestas((prevRespuestas) => ({
      ...prevRespuestas,
      [id]: e.target.value,
    }));
  };

  // 5. Función para manejar el envío del cuestionario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Respuestas enviadas:', respuestas);
    // Aquí podrías hacer algo con las respuestas, como enviarlas a un servidor.
  };

  // 6. Renderizamos el cuestionario dinámicamente
  if (!cuestionario) {
    return <div>Cargando cuestionario...</div>;
  }

  return (
    <div>
      <h2>{cuestionario.titulo}</h2>
      <form onSubmit={handleSubmit}>
        {cuestionario.preguntas.map((pregunta) => (
          <div key={pregunta.id}>
            <label>{pregunta.pregunta}</label>
            {pregunta.tipo === 'text' || pregunta.tipo === 'number' ? (
              <input
                type={pregunta.tipo}
                value={respuestas[pregunta.id] || ''}
                onChange={(e) => handleRespuestaChange(e, pregunta.id)}
              />
            ) : pregunta.tipo === 'select' ? (
              <select value={respuestas[pregunta.id] || ''} onChange={(e) => handleRespuestaChange(e, pregunta.id)}>
                <option value="">Selecciona una opción</option>
                {pregunta.opciones?.map((opcion, index) => (
                  <option key={index} value={opcion}>
                    {opcion}
                  </option>
                ))}
              </select>
            ) : null}
          </div>
        ))}
        <button type="submit">Enviar Respuestas</button>
      </form>
    </div>
  );
};

export default CuestionarioComponent;
```

#### **Explicación del Código:**

1. **Estado para almacenar el cuestionario**:
   - Usamos el estado `cuestionario` para guardar los datos que vienen del archivo JSON (título y preguntas).
   - Usamos `respuestas` para almacenar las respuestas del usuario.

2. **Lectura del archivo JSON**:
   - En el `useEffect`, usamos `fetch` para leer el archivo JSON desde el servidor (en este caso, el archivo se encuentra en la ruta `/path/to/cuestionario.json`).
   - Usamos `await response.json()` para parsear el contenido del archivo JSON y guardarlo en el estado `cuestionario`.

3. **Manejo de respuestas**:
   - La función `handleRespuestaChange` actualiza el estado de las respuestas del usuario cada vez que el usuario cambia una respuesta en el formulario.

4. **Renderizado dinámico del formulario**:
   - El formulario se renderiza dinámicamente basado en el array `preguntas` del JSON. Dependiendo del tipo de pregunta (`text`, `number`, `select`), se renderiza un `input`, un `select` u otro tipo de campo.
   - Para las preguntas de tipo `select`, se renderizan las opciones a partir de los valores en el array `opciones`.

5. **Envío del formulario**:
   - Cuando el usuario envía el formulario, la función `handleSubmit` captura las respuestas y las imprime en la consola (o podrías enviarlas a un servidor).

#### **Cómo utilizarlo**

1. Asegúrate de tener el archivo **JSON** (`cuestionario.json`) con el contenido adecuado.
2. Cambia la ruta de `fetch` para que apunte a la ubicación correcta de tu archivo JSON en el servidor.
3. Usa el componente `CuestionarioComponent` dentro de tu aplicación React.

### Renderizar un elemento del cuestionario

Aquí tienes un ejemplo de cómo podrías **traspasar** un formulario definido en JSON a un componente **React** que sea **viable**. Tomando el objeto JSON que proporcionaste, te mostraré cómo implementarlo en un componente de React que renderice un campo **`select`** con las opciones.

El registro json es el siguiente

```JSON 
{
  "id": "satisfaccion",
  "tipo": "select",
  "pregunta": "¿Qué tan satisfecho estás con el contenido del curso?",
  "opciones": ["1", "2", "3", "4", "5"]
}
```

#### **Ejemplo de Código en React**:

1. Vamos a utilizar el anterio JSON para generar el **campo de selección** en un formulario React.
2. Implementaremos un **estado** para guardar la respuesta del usuario.
3. Al enviar el formulario, se puede mostrar la respuesta seleccionada.

#### **Código en React**:

```tsx
import React, { useState } from 'react';

const CuestionarioComponent: React.FC = () => {
  // Estado para almacenar la respuesta seleccionada
  const [respuesta, setRespuesta] = useState<string>('');

  // Manejo del cambio en el select
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRespuesta(e.target.value); // Actualizamos el estado con la opción seleccionada
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Respuesta seleccionada: ${respuesta}`);
  };

  // Opciones del select según el JSON
  const opciones = ["1", "2", "3", "4", "5"];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="satisfaccion">¿Qué tan satisfecho estás con el contenido del curso?</label>
          <select
            id="satisfaccion"
            value={respuesta} // El valor del select está ligado al estado
            onChange={handleChange} // Actualizamos el estado cuando el usuario selecciona una opción
            required
          >
            <option value="">Seleccione una opción</option> {/* Opción por defecto */}
            {opciones.map((opcion) => (
              <option key={opcion} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CuestionarioComponent;
```

### **Explicación del Código**

1. **Estado para la respuesta (`useState`)**:
   - Se crea un estado llamado **`respuesta`** para almacenar la opción seleccionada por el usuario.
   - Inicialmente, el valor de `respuesta` está vacío (`''`).

2. **Manejo de cambios en el `select`**:
   - La función **`handleChange`** se encarga de actualizar el estado **`respuesta`** cada vez que el usuario selecciona una opción del **`select`**.
   - El evento **`onChange`** se usa para detectar cambios en la selección y actualizar el estado.

3. **Renderizado de las opciones (`opciones`)**:
   - Las opciones del **`select`** se extraen del array **`opciones`** que se encuentra en el JSON (`["1", "2", "3", "4", "5"]`).
   - Usamos **`.map()`** para recorrer las opciones y generar un `<option>` para cada una de ellas.

4. **Envío del formulario**:
   - La función **`handleSubmit`** se ejecuta cuando el usuario envía el formulario. En este ejemplo, se muestra una alerta con la respuesta seleccionada.

### **¿Qué hace el componente?**

- El componente muestra una pregunta **select** donde el usuario puede elegir una opción de satisfacción (del 1 al 5).
- Cuando el formulario se envía, muestra la respuesta seleccionada en una alerta.

### **Resultado en el navegador**

1. El usuario verá la pregunta: **"¿Qué tan satisfecho estás con el contenido del curso?"**.
2. Podrá seleccionar entre las opciones del 1 al 5.
3. Al hacer clic en **"Enviar"**, la opción seleccionada será mostrada en una **alerta**.

---

## **Componente guardar y Recuperar Respuestas desde `localStorage`**

El siguiente código muestra solo cómo manejar la **lectura** y **escritura** de las respuestas usando **`localStorage`**, y asume que el formulario ya existe en tu aplicación.

### **Código para Guardar y Recuperar Datos en `localStorage`:**

```tsx
import React, { useState, useEffect } from 'react';

// Asumiendo que las respuestas iniciales ya existen
const CuestionarioComponent: React.FC = () => {
  // 1. Estado para almacenar las respuestas del cuestionario
  const [respuestas, setRespuestas] = useState<{ [key: string]: string }>({
    nombre: '',
    edad: '',
    sexo: '',
  });

  // 2. useEffect para cargar las respuestas desde localStorage cuando el componente se monta
  useEffect(() => {
    const storedRespuestas = localStorage.getItem('respuestasCuestionario');
    if (storedRespuestas) {
      setRespuestas(JSON.parse(storedRespuestas));  // Cargar respuestas desde localStorage
    }
  }, []);  // Solo se ejecuta una vez al montar el componente

  // 3. Función para manejar el cambio en los campos del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newRespuestas = { ...respuestas, [name]: value };
    setRespuestas(newRespuestas); // Actualizar el estado

    // 4. Guardar las respuestas actualizadas en localStorage
    localStorage.setItem('respuestasCuestionario', JSON.stringify(newRespuestas)); // Guardar respuestas en localStorage
  };

  return (
    <div>
      {/* Aquí ya tienes el formulario, el cual usará el estado y las funciones anteriores */}
      {/* Ejemplo de un campo */}
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={respuestas.nombre}
          onChange={handleInputChange}
        />
      </div>

      {/* Otros campos y el resto del formulario */}
    </div>
  );
};

export default CuestionarioComponent;
```

### **Explicación del Código localstorage:**

1. **Estado de Respuestas (`respuestas`)**:
   - Definimos un estado llamado `respuestas`, que es un objeto que almacenará las respuestas del cuestionario. Inicialmente, las respuestas son vacías.

2. **Recuperación de Datos desde `localStorage`**:
   - Usamos el `useEffect` para leer los datos del cuestionario guardados en **`localStorage`** cuando el componente se monta. Si ya existen respuestas guardadas, las cargamos en el estado `respuestas`.

3. **Manejo de Cambios en los Campos**:
   - En la función `handleInputChange`, cada vez que el usuario cambia el valor de un campo del formulario, actualizamos el estado `respuestas` y guardamos las respuestas modificadas en **`localStorage`** con `localStorage.setItem()`.

4. **Persistencia**:
   - Cada vez que el estado `respuestas` cambia (debido a la modificación de un campo), las nuevas respuestas se almacenan en **`localStorage`**. Esto asegura que los datos persistan incluso cuando se recargue la página o se cierre y reabra el navegador.

### **Cómo funciona `localStorage` en este código**

- **Guardar**: Cada vez que el usuario cambia una respuesta en el formulario, se guarda automáticamente en **`localStorage`**.
- **Recuperar**: Cuando el componente se monta, buscamos si ya existen respuestas en **`localStorage`** y, si es así, las cargamos para mostrarlas de nuevo en el formulario.

### **Prueba del Componente**

1. Completa los campos del formulario y presiona el botón "Enviar" o cualquier acción que el formulario realice.
2. Recarga la página (Ctrl + R o F5). Los campos se rellenarán automáticamente con las respuestas guardadas en **`localStorage`**.

---
