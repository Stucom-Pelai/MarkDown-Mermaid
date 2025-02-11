# Herramientas para generar documentación

## **Definición de Markdown**

Markdown es un lenguaje de marcado ligero que permite formatear texto de manera sencilla utilizando una sintaxis fácil de leer y escribir. Es ampliamente utilizado en documentación técnica, wikis, README de proyectos y blogs debido a su simplicidad y compatibilidad con múltiples plataformas.

**Principales características de Markdown:**

- **Texto estructurado** con encabezados (`#`), listas, negritas (`**`), cursivas (`*`), y más.
- **Fácil de leer** incluso en su forma sin procesar.
- **Soporte para código** con bloques de código usando triple acento grave (```).
- **Enlaces e imágenes** integrados de forma sencilla.
- **Compatible con HTML**, lo que permite añadir etiquetas si es necesario.

### Referencias principales

- **Guía de Markdown:** Una referencia completa y de código abierto que explica cómo utilizar Markdown para formatear documentos de texto plano. [Guía de Markdown](https://www.markdownguide.org/)

- **Sintaxis Básica de Markdown:** Un resumen de la sintaxis básica de Markdown, útil para quienes se inician en su uso. [Guía de Markdown](https://www.markdownguide.org/basic-syntax/)

- **Cheat sheet**:[foursquare](https://support.squarespace.com/hc/en-us/articles/206543587-Markdown-cheat-sheet)

- **IA + MARKDOWN** [Generación de documentación](https://4geeks.com/es/lesson/httpsgithubcombreatheco-deapplied-ai-syllabusblobmaincontentmodule-5-documentsfrom-markdown-to-everythingesmd)

## **Mermaid**

Mermaid es una herramienta que permite la creación de diagramas y gráficos utilizando una sintaxis basada en texto dentro de Markdown. Se usa para representar visualmente flujos de trabajo, diagramas de clases, diagramas de Gantt, casos de uso, y otros tipos de esquemas.

**Principales características de Mermaid:**

- **Integración con Markdown**, ideal para documentación técnica.
- **Soporte para múltiples tipos de diagramas**, incluyendo:
  - Diagramas de flujo (`graph TD` o `graph LR`).
  - Diagramas de Gantt (`gantt`).
  - Diagramas de secuencia (`sequenceDiagram`).
  - Diagramas de clases (`classDiagram`).
  - Diagramas de casos de uso UML (`erDiagram`).
- **Sintaxis sencilla y legible**, lo que facilita su edición y mantenimiento.
- **Renderizado en muchas plataformas** como GitHub, GitLab, Notion, y VS Code.

### **Mapa de tipos mermaid**

```mermaid
    mindmap
  root((Diagramas en Mermaid.js))
    %% Categorías principales
    Diagramas de Casos de Uso
      Aplicaciones
        - Representan interacciones entre usuarios y el sistema
        - Muestran actores y funcionalidades clave
      Elementos
        - Actores
        - Casos de uso
        - Relaciones
        
    Diagramas de Flujo
      Aplicaciones
        - Modelan procesos y decisiones
        - Representan flujos de trabajo
      Elementos
        - Nodos (acciones o estados)
        - Conectores (flujos)
        - Decisiones (condiciones)
        
    Diagramas de Secuencia
      Aplicaciones
        - Representan el flujo de mensajes entre componentes
        - Modelan la comunicación entre actores y el sistema
      Elementos
        - Participantes (Usuarios, API, DB)
        - Mensajes (Interacciones)
        - Flechas de comunicación
        
    Diagramas de Gantt
      Aplicaciones
        - Representan la planificación del proyecto
        - Visualizan tiempos y dependencias de tareas
      Elementos
        - Fechas de inicio y fin
        - Tareas
        - Dependencias
        
    Diagramas de Mapas Mentales
      Aplicaciones
        - Organizan conceptos de manera jerárquica
        - Facilitan la estructuración de ideas
      Elementos
        - Nodo raíz (tema principal)
        - Subnodos (categorías y detalles)
```

### **Referencias:**

- **Sitio Oficial de Mermaid:** Ofrece documentación detallada sobre cómo crear diagramas y gráficos utilizando Mermaid. [Sitio Oficial](https://mermaid.js.org)

- **Repositorio de GitHub de Mermaid:** Contiene el código fuente de Mermaid, ejemplos y documentación adicional. [Repositorio de GitHub](https://github.com/mermaid-js/mermaid?utm_source=chatgpt.com)

- **Ejemplos de gráficos** [ideas de graficos y presentaciones](https://clickup.com/blog/mermaid-diagram-examples/)

## **Índice en Markdown**

Markdown no tiene una sintaxis nativa para generar un índice automáticamente, pero puedes crear uno manualmente con enlaces a secciones utilizando anclajes.

### Índice

1. [Introducción](#introduccion)
2. [Descripción del Proyecto](#descripción-del-proyecto)
   - [Objetivos](#objetivos)
   - [Público Objetivo](#público-objetivo)

```markdown
1. [Introducción](#introduccion)
2. [Descripción del Proyecto](#descripcion-del-proyecto)
   - [Objetivos](#objetivos)
   - [Público Objetivo](#publico-objetivo)
```

#### Introduccion

Aquí comienza la introducción.

#### Descripción del Proyecto

Descripción del proyecto

#### Objetivos

Descripción de los objetivos.

#### Público Objetivo

Explicación sobre el público objetivo.

## **Tabla de Imágenes en Markdown**

Puedes organizar imágenes en una tabla utilizando la sintaxis de Markdown:

```markdown
#### Tabla de Imágenes

| Descripción           | Imagen  |
|----------------------|---------|
| Logotipo del Proyecto | ![Logo](ruta/logo.png) |
| Diagrama de Casos de Uso | ![Casos de Uso](ruta/diagrama.png) |
| Captura de Pantalla de App | ![App](ruta/captura.png) |
```

 **Nota**: Sustituye `ruta/logo.png`, `ruta/diagrama.png`, etc., por la ubicación real de las imágenes en tu proyecto.

---

### **Tabla de Datos en Markdown**

Si necesitas mostrar datos en formato tabular:

```markdown
# Tabla de Características del Proyecto

| Funcionalidad        | Descripción |
|----------------------|-------------|
| Registro de Usuarios | Permite a los usuarios crear una cuenta. |
| Autenticación       | Inicio de sesión seguro con JWT. |
| Panel de Administración | Dashboard con métricas y gestión de usuarios. |
| API REST           | Endpoints para integraciones externas. |
```

---

## Ejemplo Gantt

Un **diagrama de Gantt** es una herramienta de gestión de proyectos que representa visualmente el cronograma de tareas a lo largo del tiempo. Permite planificar, coordinar y hacer un seguimiento del progreso de un proyecto de manera clara y estructurada.

---

### **Elementos principales de un Gantt**

1. **Tareas:** Actividades o fases del proyecto que deben completarse.
2. **Fechas:** Indican el inicio y fin de cada tarea.
3. **Duración:** Representada por la longitud de las barras, muestra cuánto tiempo tomará cada tarea.
4. **Dependencias:** Relaciones entre tareas, indicando cuáles dependen de la finalización de otras.
5. **Progreso:** Algunas herramientas permiten marcar el porcentaje de avance de cada tarea.
6. **Hitos:** Eventos clave o entregables importantes dentro del proyecto.
7. **Recursos:** Opcionalmente, se pueden asignar responsables a cada tarea.

---

El **diagrama de Gantt en Mermaid** permite visualizar estas fases fácilmente dentro de documentación en **Markdown**, facilitando la gestión y planificación de proyectos. 🚀

### Diagrama de Gantt del Proyecto

```mermaid
gantt
    title Planificación del Proyecto
    dateFormat  YYYY-MM-DD
    axisFormat  %d/%m
    section Planificación
    Definición del proyecto       :done,    des1, 2025-02-01, 2025-02-07
    Investigación                 :active,  des2, 2025-02-08, 2025-02-14
    Requisitos del usuario        :        des3, 2025-02-15, 2025-02-20

    section Diseño
    Diseño UX/UI                  :active,  des4, 2025-02-21, 2025-02-28
    Arquitectura del sistema       :        des5, 2025-03-01, 2025-03-07

    section Desarrollo
    Desarrollo Backend             :        des6, 2025-03-08, 2025-04-15
    Desarrollo Frontend            :        des7, 2025-04-16, 2025-05-15
    Integración                    :        des8, 2025-05-16, 2025-05-25

    section Pruebas
    Pruebas unitarias              :done,    des9, 2025-05-26, 2025-06-05
    Pruebas de integración         :        des10, 2025-06-06, 2025-06-15
    Corrección de errores          :        des11, 2025-06-16, 2025-06-22

    section Despliegue
    Implementación en producción   :        des12, 2025-06-23, 2025-06-30
    Mantenimiento y mejoras        :        des13, 2025-07-01, 2025-07-15
```

### **Explicación del diagrama de Gantt**

- **Cada tarea tiene una fecha de inicio y fin.**
- **Las fases están agrupadas en secciones:**
  - **Planificación**: definición del proyecto, investigación y requisitos.
  - **Diseño**: diseño UX/UI y arquitectura.
  - **Desarrollo**: backend, frontend e integración.
  - **Pruebas**: unitarias, integración y corrección de errores.
  - **Despliegue**: implementación en producción y mantenimiento.

Este diagrama puede adaptarse a los plazos reales del proyecto. 🚀

---

## Casos de uso

### Caso de uso mediante un diagrama de flujo

```mermaid
graph LR;
    
    %% Definir Usuario como el primer nodo destacado
    A["<span style='font-size:40px'>👤</span>"] -->|Seleccionar plan de suscripción| B[📄 Página de Pago];
    B -->|Elegir método de pago| C{💳 Método de Pago};
    C -->|Tarjeta| D[💰 Procesador de Pago];
    C -->|Bizum| E[📱 Servicio Bizum];

    D -->|Verifica pago| F[✅ Confirmación de Pago];
    E -->|Verifica pago| F;

    F -->|Activar suscripción| G[📂 Base de Datos];
    N["<span style='font-size:40px'>👤</span>"] 
    N-->E
    %% Estilización de Usuario
    style A fill:#f9f,stroke:#333,stroke-width:2px,font-size:30px;
```

### Caso de uso mediante un diagrama de secuencia

```mermaid
sequenceDiagram
    participant Usuario as 👤 Usuario
    participant PaginaPago as 📄 Página de Pago
    participant MetodoPago as 💳 Método de Pago
    participant ProcesadorPago as 💰 Procesador de Pago
    participant ServicioBizum as 📱 Servicio Bizum
    participant Confirmacion as ✅ Confirmación de Pago
    participant BaseDatos as 📂 Base de Datos

    Usuario ->> PaginaPago: Seleccionar plan de suscripción
    PaginaPago ->> MetodoPago: Elegir método de pago
    MetodoPago -->> ProcesadorPago: Pago con tarjeta
    MetodoPago -->> ServicioBizum: Pago con Bizum

    ProcesadorPago ->> Confirmacion: Verifica pago
    ServicioBizum ->> Confirmacion: Verifica pago

    Confirmacion ->> BaseDatos: Activar suscripción
    BaseDatos -->> Usuario: Confirmación de suscripción
```

### Caso de uso mediante un diagrama de secuencia

```mermaid
sequenceDiagram
    actor cliente
    actor servidor
    actor Administrator
    actor BD

    cliente->servidor:Solid line without arrow
    cliente-->servidor:Dotted line without arrow
    cliente->>servidor:Solid line with arrowhead
    servidor->Administrator:Solid line with a cross at the end
```

### Referencias

- [Utilizacion mermaid](https://educacion.bilateria.org/diagramas-mermaid-en-educacion-y-su-aplicacion-al-dua-a-traves-de-chatgpt)

- [use case diagram 1] (https://gist.github.com/infrony/acf8d05d7ae86efcb602bb129a5922dc) 

- [use case diagram 2] (https://agilemodeling.com/style/usecasediagram.htm)

- [use case diagram 3] (https://www.edrawsoft.com/article/use-case-diagram-examples.html)
