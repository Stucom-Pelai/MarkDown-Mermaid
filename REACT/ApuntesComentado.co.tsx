import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { renderSurvey } from "./SurveyHandler";
import MarkdownRenderer from "./MarkdownHandler";
import FileSelector from "./FileSelector";

/**
 * 📌 Componente `MarkdownEditor.tsx`
 * Este componente permite la carga, edición y visualización de archivos Markdown.
 * Funcionalidades principales:
 * - Cargar archivos Markdown mediante `FileSelector.tsx`.
 * - Dividir el contenido en páginas usando `---` como separador.
 * - Extraer títulos de cada sección automáticamente.
 * - Permitir la navegación entre páginas.
 * - Renderizar encuestas interactivas embebidas en el Markdown.
 * - Mostrar el contenido renderizado con `MarkdownRenderer.tsx`.
 */

const MarkdownEditor: React.FC = () => {
    // Estado para almacenar el contenido completo del archivo Markdown
    const [markdown, setMarkdown] = useState<string>("");

    // Estado para manejar la página actual en la navegación del documento
    const [currentPage, setCurrentPage] = useState<number>(0);

    // Separa el contenido del Markdown en páginas (usando "---" como delimitador)
    const pages = markdown ? markdown.split("---") : [];

    // Estado para almacenar los títulos extraídos de cada página del documento
    const [titles, setTitles] = useState<string[]>([]);

    /**
     * 📌 `useEffect` para extraer títulos de cada sección del Markdown.
     * - Cada página debe comenzar con un título en formato `# Encabezado`.
     * - Evita actualizaciones innecesarias comparando con el estado actual.
     */
    useEffect(() => {
        if (pages.length > 0) {
            const extractedTitles = pages.map((page) => {
                const match = page.match(/^#\s(.+)/m); // Busca el primer Heading 1
                return match ? match[1] : "Página sin título"; // Usa el título o un valor por defecto
            });

            // Evitar bucles infinitos: solo actualizar si los títulos han cambiado
            if (JSON.stringify(extractedTitles) !== JSON.stringify(titles)) {
                setTitles(extractedTitles);
            }
        }
    }, [pages]);

    /**
     * 📌 Función `handlePageChange`
     * Permite cambiar la página actual dentro del documento dividido.
     * - Asegura que el índice se mantenga dentro de los límites permitidos.
     * @param index - Índice de la página a la que se quiere navegar.
     */
    const handlePageChange = (index: number) => {
        if (index >= 0 && index < pages.length) {
            setCurrentPage(index);
        }
    };

    /**
     * 📌 Función `updatePageContent`
     * Actualiza el contenido de la página actual y lo guarda en el estado `markdown`.
     * - Permite edición de cada sección sin afectar el resto del documento.
     * @param content - Nuevo contenido de la página actual.
     */
    const updatePageContent = (content: string) => {
        const updatedPages = [...pages];
        updatedPages[currentPage] = content;
        setMarkdown(updatedPages.join("---"));
    };

    /**
     * 📌 Función `copyToClipboard`
     * Copia el texto dado al portapapeles del usuario.
     * - Usa la API `navigator.clipboard.writeText`.
     * - Maneja errores si el navegador bloquea la acción.
     * @param text - Texto a copiar.
     */
    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            alert("Código copiado al portapapeles");
        } catch (error) {
            alert("Error al copiar al portapapeles");
        }
    };

    /**
     * 📌 Función `renderContent`
     * Decide cómo mostrar el contenido de la página actual.
     * - Si la página contiene una encuesta, la renderiza usando `SurveyHandler.tsx`.
     * - Si no, renderiza el Markdown con `MarkdownRenderer.tsx`.
     */
    const renderContent = () => {
        const content = pages[currentPage] || ""; // Evita que content sea undefined
        const surveyComponent = renderSurvey(content, setMarkdown);
        return surveyComponent ? (
            surveyComponent
        ) : (
            <MarkdownRenderer content={content || ""} copyToClipboard={copyToClipboard} />
        );
    };

    return (
        <div className="container-fluid vh-100 d-flex flex-column align-items-center">
            {/* Selector de archivo */}
            <div className="row w-100 h-100">
                <div className="col-md-12 d-flex flex-column p-3">
                    <FileSelector onFileLoad={setMarkdown} />
                    <textarea
                        className="form-control flex-grow-1"
                        rows={10}
                        value={pages[currentPage] || ""}
                        onChange={(e) => updatePageContent(e.target.value)}
                    />
                </div>
            </div>

            {/* Sección de navegación y visualización */}
            <div className="row w-100 h-100">
                {/* Índice de títulos extraídos del Markdown */}
                <div className="col-md-2 d-flex flex-column p-3">
                    <h5>Índice</h5>
                    <ul className="list-group">
                        {titles.map((title, index) => (
                            <li
                                key={index}
                                className={`list-group-item ${currentPage === index ? "active" : ""}`}
                                onClick={() => setCurrentPage(index)}
                                style={{ cursor: "pointer" }}
                            >
                                {title}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contenido renderizado y controles de navegación */}
                <div className="col-md-10 d-flex flex-column p-3 border-left">
                    <div className="d-flex justify-content-between mt-3">
                        <button
                            className="btn btn-secondary"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 0}
                        >
                            Anterior
                        </button>
                        <span>Página {currentPage + 1} de {pages.length}</span>
                        <button
                            className="btn btn-secondary"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === pages.length - 1}
                        >
                            Siguiente
                        </button>
                    </div>

                    {/* Contenido del Markdown o Encuesta */}
                    <div className="border p-3 bg-white flex-grow-1 overflow-auto">
                        {renderContent()}
                    </div>

                    {/* Controles de navegación inferiores */}
                    <div className="d-flex justify-content-between mt-3">
                        <button
                            className="btn btn-secondary"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 0}
                        >
                            Anterior
                        </button>
                        <span>Página {currentPage + 1} de {pages.length}</span>
                        <button
                            className="btn btn-secondary"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === pages.length - 1}
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarkdownEditor;
