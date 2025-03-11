import { Survey } from "survey-react-ui";
import { Model } from "survey-core";

/**
 * 📌 Módulo `SurveyHandler.tsx`
 * Este archivo se encarga de manejar la integración de encuestas dentro del Markdown.
 * Funcionalidades principales:
 * - Definir encuestas preconfiguradas en `surveys`.
 * - Detectar encuestas en el contenido Markdown mediante `renderSurvey`.
 * - Renderizar la encuesta encontrada usando `survey-react-ui`.
 * - Capturar y almacenar las respuestas del usuario.
 */

/**
 * 📌 Objeto `surveys`
 * Contiene las encuestas predefinidas, indexadas por un identificador numérico.
 * Cada encuesta incluye:
 * - `type`: Tipo de pregunta (ejemplo: "radiogroup" para opciones múltiples).
 * - `name`: Identificador único de la pregunta.
 * - `title`: Pregunta a mostrar.
 * - `choices`: Opciones disponibles para el usuario.
 * - `correctAnswer`: Respuesta correcta (si aplica).
 * - `isRequired`: Indica si la pregunta es obligatoria.
 */
export const surveys = {
    1: {
        elements: [
            {
                type: "radiogroup",
                name: "pregunta1",
                title: "¿Cuál es tu lenguaje de programación favorito?",
                choices: [
                    { value: "JavaScript", text: "JavaScript" },
                    { value: "Python", text: "Python" },
                    { value: "Java", text: "Java" },
                    { value: "C#", text: "C#" }
                ],
                correctAnswer: "JavaScript",
                isRequired: true,
            },
        ],
    },
    2: {
        elements: [
            {
                type: "radiogroup",
                name: "pregunta2",
                title: "¿Qué framework prefieres?",
                choices: [
                    { value: "React", text: "React" },
                    { value: "Vue", text: "Vue" },
                    { value: "Angular", text: "Angular" },
                    { value: "Svelte", text: "Svelte" }
                ],
                correctAnswer: "React",
                isRequired: true,
            },
        ],
    },
};

/**
 * 📌 Función `renderSurvey`
 * Busca si el contenido Markdown incluye una encuesta (`\`\`\`survey:X\`\`\``).
 * - Si encuentra una coincidencia, renderiza la encuesta correspondiente.
 * - Captura las respuestas del usuario y las almacena usando `setSurveyResults`.
 * 
 * @param content - Contenido Markdown donde se buscarán encuestas.
 * @param setSurveyResults - Función para almacenar las respuestas de la encuesta.
 * @returns Un componente `Survey` si se encuentra una encuesta, o `null` si no hay coincidencias.
 */
export const renderSurvey = (content: string | undefined, setSurveyResults: (text: string) => void) => {
    if (!content) return null; // Evita errores si `content` es undefined

    // Busca si el contenido incluye un identificador de encuesta (`survey:X`)
    const surveyMatch = content.match(/```survey:(\d+)```/);
    if (surveyMatch) {
        const surveyId = parseInt(surveyMatch[1], 10); // Convierte el ID de la encuesta a número
        if (surveys[surveyId]) {
            const survey = new Model(surveys[surveyId]); // Crea un modelo de encuesta

            // Captura la respuesta del usuario al completar la encuesta
            survey.onComplete.add((sender) => {
                setSurveyResults(JSON.stringify(sender.data, null, 2));
            });

            return <Survey model={survey} />; // Renderiza la encuesta en la interfaz
        }
    }

    return null; // Si no se encontró ninguna encuesta, devuelve `null`
};
