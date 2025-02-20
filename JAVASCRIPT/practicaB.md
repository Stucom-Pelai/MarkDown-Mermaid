
### **Práctica: Secuencia de Formularios con React + TypeScript**

**Contexto**:

- Supongamos que estamos creando una aplicación en React donde el usuario debe completar una serie de formularios de forma secuencial.
- La aplicación tiene múltiples formularios, y el usuario debe responder uno tras otro. El ciclo de vida de los formularios incluye pasar del uno al siguiente solo si el formulario actual es válido.
- Usaremos **`useState`** para gestionar los formularios y **`useEffect`** para realizar acciones adicionales, como pasar al siguiente formulario cuando se complete el formulario actual.

---
Tres roles:

- Formularios y navegación
- Generación de paginas: login, cuestionarios, resumen y almacenamiento local
- Validación de formularios


Registro con todas las respuestas


### **Estructura del escenario**:

1. **Múltiples Formularios**: 
   - La aplicación tiene 4  formularios: 
     1. **Formulario de información personal**
     2. **Formulario de evaluación académica** 
     3. **Formulario de preferencias en tecnología** 
     4. **Formulario de preferencias en cine** 

2. **Condición de Ciclo de Vida**:
   - El usuario solo puede avanzar al siguiente formulario si todos los campos del formulario actual están completos.
   - El avance de un formulario al siguiente está controlado por el estado del componente y se gestionará mediante el hook **`useState`**.
   - Después de completar un formulario, el componente desencadenará una acción para pasar al siguiente formulario.

3. **Uso de `useEffect`**:
   - **`useEffect`** puede utilizarse para manejar efectos secundarios, como la validación de formularios y la transición de un formulario al siguiente. Por ejemplo, cuando el estado de un formulario cambia (cuando se completan los campos), un efecto puede activar el paso al siguiente formulario.

4. **Control de la Secuencia**:
   - El ciclo de vida de cada formulario incluye pasos para:
     - Mostrar el formulario.
     - Validar las respuestas.
     - Pasar al siguiente formulario (si es válido).

---

Este escenario implica que cada formulario es una etapa dentro del ciclo de vida de la aplicación, con validaciones, transiciones y actualizaciones del estado, utilizando **`useState`** y **`useEffect`** 

Aquí tienes un **pseudocódigo** con una guía clara y estructurada para desarrollar el código completo de un sistema de formularios secuenciales en React con TypeScript.

---

### **Pseudocódigo para Formularios Secuenciales**

```plaintext
1. INICIO
   - Desarrollar una aplicación con múltiples formularios que se completan uno tras otro.

2. Definir la estructura del componente:
   - El componente principal manejará los formularios.
   - Cada formulario se presentará uno por uno, dependiendo del estado de la aplicación.

3. Definir los tipos de estado para cada formulario:
   - Crear un estado para el formulario actual (`formularioActual`), que controlará cuál de los formularios se mostrará en cada momento.
   - Crear estados para almacenar las respuestas de cada formulario:
     - Formulario de información personal .
     - Formulario de evaluación académica ,.
     - Formulario de tecnología.
     - Formulario de cine.
    
   - Crear un estado para manejar los mensajes de error si los campos no se completan correctamente.

4. Configurar la función `handleChange` para actualizar el estado de cada formulario cuando el usuario escriba en los campos de entrada.

5. Validar los campos de cada formulario:
   - Antes de avanzar al siguiente formulario, verificar que todos los campos del formulario actual estén completos.
   - Si no se completan correctamente, mostrar un mensaje de error.

6. Usar `useEffect` para gestionar el ciclo de vida del formulario:
   - Cuando el estado `formularioActual` cambia (por ejemplo, el usuario pasa de un formulario a otro), ejecutar una validación adicional si es necesario.

7. Manejar el avance entre formularios:
   - Si los campos del formulario actual son válidos, permitir que el usuario pase al siguiente formulario incrementando el valor de `formularioActual`.
   - Si el formulario actual está completo y el último formulario es enviado, mostrar un mensaje de "Formulario completado".

8. Mostrar los formularios y campos condicionalmente:
   - Usar condicionales para renderizar solo el formulario correspondiente, dependiendo del valor de `formularioActual`.

9. Mostrar los errores de validación:
   - Si hay algún error (por ejemplo, campos vacíos o contraseñas que no coinciden), mostrar el mensaje de error en la interfaz.

10. Nueva pantalla con los resultados de todos los cuestionarios
```

---

### **Instrucciones Formativas para Implementar el Pseudocódigo**

1. **Estructura del Componente**:
   - Crea un componente principal `FormularioSecuencial` que manejará el estado y el renderizado de los formularios.
   
2. **Estados en React**:
   - Usa `useState` para definir el estado de `formularioActual` (el formulario que se está mostrando actualmente) y los estados para cada formulario (personal, preferencias y contacto).
   
3. **Formularios con Inputs**:
   - Crea un formulario para cada sección (información personal, preferencias, contacto).
   - Usa inputs controlados (`value` y `onChange`) para manejar los valores ingresados por el usuario.
   
4. **Validaciones de Campos**:
   - Antes de pasar al siguiente formulario, valida si los campos están completos. Si no, muestra un mensaje de error.
   
5. **Ciclo de Vida con `useEffect`**:
   - Usa `useEffect` para ejecutar acciones cuando `formularioActual` cambie. Por ejemplo, puedes comprobar si los campos del formulario están completos al cambiar de un formulario a otro.
   
6. **Navegación entre Formularios**:
   - Cuando el usuario envíe un formulario, valida los campos. Si son correctos, cambia el estado de `formularioActual` para mostrar el siguiente formulario.
   
7. **Condicionales para Mostrar Formularios**:
   - Usa condicionales (`if` o un switch) para renderizar solo el formulario actual basado en el valor de `formularioActual`.

8. **Errores de Validación**:
   - Muestra los errores de validación si algún campo no se completa correctamente. Utiliza un estado `error` para almacenar los mensajes de error.

---

### **Consejos para Desarrollar el Código Completo**:

1. **Comienza con el primer formulario** (información personal). Define los campos que deben completarse y asegúrate de que el formulario avance solo cuando los campos estén completos.

2. **Pasa al siguiente formulario** (preferencias). Define un estado diferente para cada uno de los formularios y gestiona su visibilidad con el valor de `formularioActual`.

3. **Usa `useState` para controlar los valores** de cada campo y asegúrate de que cada formulario tiene un estado independiente para evitar confusión.

4. **Gestiona los mensajes de error** de manera clara, mostrando mensajes como "Por favor complete todos los campos" o "Las contraseñas no coinciden".

5. **Recuerda usar `useEffect`** para realizar alguna acción adicional cuando cambie el valor de `formularioActual`, como validaciones o manejo de estado.

---

Este pseudocódigo proporciona una guía paso a paso para desarrollar la funcionalidad de formularios secuenciales en una aplicación de React con TypeScript. A medida que avances, asegúrate de probar cada parte del formulario y validación para garantizar que todo funcione correctamente.

---

## Cuestionarios y validaciones

Aquí tienes una explicación detallada y clara para que tus alumnos comprendan los diferentes tipos de formularios y validaciones que se utilizan en los cuestionarios, tanto desde el punto de vista de la estructura del JSON como de la implementación en el frontend:

---

### **Tipos de Formularios y Campos en los Cuestionarios**

1. **Campos de Tipo `text`**:
   - **Descripción**: Este tipo de campo es para **entradas de texto simples**. Se utiliza cuando necesitamos que el usuario ingrese una palabra o una pequeña frase.
   - **Ejemplo**: Preguntar por el **nombre** o la **edad** del usuario.
   - **Validación**: Se puede aplicar una restricción sobre el **número de caracteres** que se puede ingresar. Por ejemplo, en el caso del nombre, podemos pedir que tenga entre 3 y 50 caracteres.
   
   ```json
   {
     "id": "nombre",
     "tipo": "text",
     "pregunta": "¿Cuál es tu nombre?",
     "restricciones": {
       "min": 3,
       "max": 50
     }
   }
   ```

2. **Campos de Tipo `textarea`**:
   - **Descripción**: Este tipo de campo se usa cuando se requiere que el usuario ingrese **más texto** o una respuesta más detallada. Es útil para comentarios, descripciones, o cualquier respuesta más extensa.
   - **Ejemplo**: Preguntar sobre **comentarios o sugerencias**.
   - **Validación**: Al igual que el campo `text`, se puede validar el número de caracteres, pero dado que el contenido puede ser más largo, las restricciones suelen ser mayores.
   
   ```json
   {
     "id": "comentarios",
     "tipo": "textarea",
     "pregunta": "¿Qué mejorarías en el curso?",
     "restricciones": {
       "min": 15,
       "max": 250
     }
   }
   ```

3. **Campos de Tipo `select`**:
   - **Descripción**: Este tipo de campo es una lista desplegable de opciones donde el usuario puede seleccionar una opción. Se utiliza cuando se desea limitar las respuestas a un conjunto de opciones predefinidas.
   - **Ejemplo**: Preguntar sobre **preferencias de sistema operativo** o **nivel de satisfacción**.
   - **Validación**: No se suele validar la longitud de la respuesta, pero sí se puede limitar las opciones, como en el caso de un **`select`** para la **película favorita**, donde el usuario debe elegir entre varias opciones.

   ```json
   {
     "id": "satisfaccion",
     "tipo": "select",
     "pregunta": "¿Qué tan satisfecho estás con el contenido del curso?",
     "opciones": ["1", "2", "3", "4", "5"]
   }
   ```

4. **Campos de Tipo `check`** (Casillas de verificación):
   - **Descripción**: Este tipo de campo se utiliza cuando queremos que el usuario seleccione una o varias opciones de una lista. Se muestra como casillas de verificación (checkboxes).
   - **Ejemplo**: Preguntar sobre los **dispositivos que usa regularmente** o las **películas que ha visto**.
   - **Validación**: Se puede validar la cantidad de opciones que el usuario puede seleccionar. Por ejemplo, podemos pedir que seleccione **hasta 2 dispositivos** o **una sola película**.
   - **Validación en el JSON**: Se puede especificar una validación como **`max_seleccionados`** para limitar la cantidad de opciones que el usuario puede marcar.

   ```json
   {
     "id": "productos",
     "tipo": "check",
     "pregunta": "¿Qué dispositivos usas regularmente?",
     "opciones": ["smartphone", "laptop", "tablet", "smartwatch"],
     "validacion": {
       "max_seleccionados": 2
     }
   }
   ```

---

### **Validaciones Comunes en Formularios**

1. **Restricción de Longitud (`min` y `max`)**:
   - **Descripción**: Se utiliza para limitar la **cantidad de caracteres** que el usuario puede ingresar. Es útil para asegurarse de que las respuestas sean adecuadas. Por ejemplo, no queremos que un nombre tenga solo un carácter o que un comentario sea excesivamente largo.
   - **Ejemplo**: En un campo de texto como **nombre**, podemos exigir que tenga entre 3 y 50 caracteres.
   
   ```json
   {
     "restricciones": {
       "min": 3,
       "max": 50
     }
   }
   ```

2. **Formato de Correo Electrónico**:
   - **Descripción**: Si un campo está destinado a ingresar un correo electrónico, es importante que el formato sea válido. Generalmente, se valida que el texto contenga el **símbolo @** y un dominio válido.
   - **Ejemplo**: Validar que el correo esté en el formato correcto y pertenezca a un dominio específico como `stucom.com`.

   ```json
   {
     "validacion": {
       "formato": "email",
       "dominio": "stucom.com"
     }
   }
   ```

3. **Validación de Edad**:
   - **Descripción**: A veces, se requiere que el usuario cumpla con una cierta **edad mínima**. Para esto, usamos una **validación de fecha de nacimiento**.
   - **Ejemplo**: Si necesitamos que el usuario tenga más de 17 años, calculamos la edad a partir de la fecha ingresada y la comparamos con la edad mínima permitida.

   ```json
   {
     "validacion": {
       "min_edad": 17
     }
   }
   ```

4. **Validación de Selección Múltiple**:
   - **Descripción**: Si un campo permite seleccionar varias opciones (como **`check`**), podemos validar que el usuario seleccione un número específico de opciones. Esto puede ser útil, por ejemplo, para elegir varios **dispositivos** o **películas**.
   - **Ejemplo**: Validar que el usuario seleccione hasta **2 dispositivos**.

   ```json
   {
     "validacion": {
       "max_seleccionados": 2
     }
   }
   ```

5. **Validación de Opción Única**:
   - **Descripción**: Si un campo permite seleccionar solo **una opción** (como un **`select`**), es importante que el usuario elija solo una. No se necesita una validación adicional para esto, pero se asegura que solo se pueda seleccionar **una opción** a la vez.
   - **Ejemplo**: El usuario debe seleccionar un **sistema operativo**.

---

### **Cómo Implementar las Validaciones en el Frontend**:

1. **Validación de Texto**:
   - Se puede hacer mediante **expresiones regulares** o métodos de validación nativos en JavaScript, como `input.value.length` para controlar las longitudes mínimas y máximas.
   
2. **Validación de Correo**:
   - Para validar correos electrónicos, puedes usar una expresión regular o una función predefinida en JavaScript para asegurarte de que el correo tenga el formato correcto.

3. **Validación de Fecha**:
   - Para validar la edad, puedes comparar la fecha de nacimiento del usuario con la fecha actual y calcular si la edad cumple con el requisito mínimo.

4. **Validación de Selección Múltiple**:
   - En el caso de **checkboxes** o **select multiple**, puedes comprobar la cantidad de opciones seleccionadas usando `document.querySelectorAll()` para contar los elementos seleccionados.

---

### **Conclusión**:

Los formularios y sus validaciones son esenciales para obtener datos confiables y evitar errores. Cada tipo de campo se ajusta a una necesidad específica, y las validaciones permiten controlar la calidad de las respuestas.
