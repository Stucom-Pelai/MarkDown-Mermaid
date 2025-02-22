# Cuestionario y validaciones

## Cuestionario

El archivo con los cuestionarios para implemntar  [cuestionario.json](cuestionario.json).

## Tipos de campos en cuestionario

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

### **Validaciones comunes en los campos**

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

### **Validaciones en el Frontend**:

1. **Validación de Texto**:
   - Se puede hacer mediante **expresiones regulares** o métodos de validación nativos en JavaScript, como `input.value.length` para controlar las longitudes mínimas y máximas.

2. **Validación de Correo**:
   - Para validar correos electrónicos, puedes usar una expresión regular o una función predefinida en JavaScript para asegurarte de que el correo tenga el formato correcto.

3. **Validación de Fecha**:
   - Para validar la edad, puedes comparar la fecha de nacimiento del usuario con la fecha actual y calcular si la edad cumple con el requisito mínimo.

4. **Validación de Selección Múltiple**:
   - En el caso de **checkboxes** o **select multiple**, puedes comprobar la cantidad de opciones seleccionadas usando `document.querySelectorAll()` para contar los elementos seleccionados.

---

### **Conclusión**

Los formularios y sus validaciones son esenciales para obtener datos confiables y evitar errores. Cada tipo de campo se ajusta a una necesidad específica, y las validaciones permiten controlar la calidad de las respuestas.
