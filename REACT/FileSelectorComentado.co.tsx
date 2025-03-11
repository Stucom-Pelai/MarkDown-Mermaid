import React from "react";

/**
 * 📌 Interfaz `FileSelectorProps`
 * Define la estructura de las propiedades que recibe el componente.
 * - `onFileLoad`: Función que se ejecutará al cargar un archivo.
 */
interface FileSelectorProps {
    onFileLoad: (content: string) => void;
}

/**
 * 📌 Componente `FileSelector.tsx`
 * Este componente permite seleccionar y leer archivos de texto en formato Markdown (.md).
 * Funcionalidades principales:
 * - Permite al usuario seleccionar un archivo `.md`.
 * - Lee el contenido del archivo y lo envía a `onFileLoad`.
 * - Maneja eventos de cambio en el input de tipo "file".
 */
const FileSelector: React.FC<FileSelectorProps> = ({ onFileLoad }) => {
    /**
     * 📌 Función `handleFileChange`
     * Se ejecuta cuando el usuario selecciona un archivo.
     * - Verifica si se ha seleccionado un archivo.
     * - Usa `FileReader` para leer el contenido como texto.
     * - Llama a `onFileLoad` con el contenido del archivo.
     * @param event - Evento de cambio en el input de archivos.
     */
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Obtiene el archivo seleccionado
        if (file) {
            const reader = new FileReader(); // Crea un lector de archivos

            // Define la función que se ejecutará cuando la lectura termine
            reader.onload = (e) => {
                const content = e.target?.result as string; // Convierte el resultado en texto
                onFileLoad(content); // Envía el contenido al padre
            };

            reader.readAsText(file); // Inicia la lectura del archivo como texto
        }
    };

    return (
        <div className="p-3">
            {/* Input para seleccionar archivos Markdown */}
            <input type="file" accept=".md" onChange={handleFileChange} />
        </div>
    );
};

export default FileSelector;
