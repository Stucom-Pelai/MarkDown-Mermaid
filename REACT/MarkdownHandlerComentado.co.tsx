import React, { useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import mermaid from "mermaid";
import "survey-core/survey.min.css"; 
import "survey-core/defaultV2.min.css";

/**
 * 📌 Componente `MarkdownRenderer.tsx`
 * Este componente permite renderizar contenido en formato Markdown.
 * Funcionalidades principales:
 * - Soporta sintaxis Markdown avanzada con `react-markdown`.
 * - Aplica estilos y tablas con `remark-gfm` y `rehype-raw`.
 * - Integra resaltado de código con `react-syntax-highlighter`.
 * - Soporta diagramas Mermaid mediante `mermaid.js`.
 * - Agrega opción de copiar código al portapapeles.
 */

interface MarkdownRendererProps {
    content: string; // Contenido en formato Markdown
    copyToClipboard: (text: string) => void; // Función para copiar texto al portapapeles
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, copyToClipboard }) => {
    // Referencia al contenedor donde se renderizarán los diagramas Mermaid
    const mermaidRef = useRef<HTMLDivElement | null>(null);

    /**
     * 📌 Inicialización de Mermaid
     * Se ejecuta solo una vez para configurar Mermaid sin renderizado automático.
     */
    useEffect(() => {
        mermaid.initialize({ startOnLoad: false }); // Evita que Mermaid se renderice automáticamente
    }, []);

    /**
     * 📌 Renderización de diagramas Mermaid
     * Se ejecuta cada vez que cambia el contenido.
     */
    useEffect(() => {
        if (mermaidRef.current) {
            mermaid.run({ nodes: [mermaidRef.current] }).catch((error) => {
                console.error("Error renderizando Mermaid:", error);
            });
        }
    }, [content]); // ✅ Se ejecuta solo cuando `content` cambia

    return (
        <ReactMarkdown
            children={content}
            remarkPlugins={[remarkGfm]} // Soporta tablas y listas avanzadas
            rehypePlugins={[rehypeRaw]} // Permite HTML en Markdown
            components={{
                // Estilos personalizados para tablas
                table({ children }) {
                    return <table className="table table-striped table-bordered">{children}</table>;
                },
                thead({ children }) {
                    return <thead className="table-dark">{children}</thead>;
                },
                tbody({ children }) {
                    return <tbody className="table-group-divider">{children}</tbody>;
                },
                tr({ children }) {
                    return <tr>{children}</tr>;
                },
                th({ children }) {
                    return <th className="text-center">{children}</th>;
                },
                td({ children }) {
                    return <td className="text-center">{children}</td>;
                },
                // Estilos para blockquotes (citas)
                blockquote({ children }) {
                    return <blockquote className="border-start border-4 ps-3 text-muted">{children}</blockquote>;
                },
                /**
                 * 📌 Renderización de bloques de código y Mermaid
                 * - Resalta código con `react-syntax-highlighter`.
                 * - Si es un bloque Mermaid, lo renderiza como diagrama.
                 * - Agrega un botón para copiar el código al portapapeles.
                 */
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    
                    // Si el bloque es Mermaid, renderizar el diagrama
                    if (match && match[1] === "mermaid") {
                        return <div ref={mermaidRef} className="mermaid">{String(children)}</div>;
                    }

                    // Si es un bloque de código normal, aplicar resaltado y botón de copiado
                    return !inline && match ? (
                        <div className="position-relative">
                            <button
                                className="btn btn-sm btn-light position-absolute top-0 end-0 m-2"
                                onClick={() => copyToClipboard(String(children))}
                            >
                                Copiar
                            </button>
                            <SyntaxHighlighter
                                style={github} // Tema de resaltado de código
                                language={match[1] === "pseudocode" ? "plaintext" : match[1]} // Corrige pseudocódigo
                                PreTag="div"
                                {...props}
                            >
                                {String(children).replace(/$/, "")}
                            </SyntaxHighlighter>
                        </div>
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    );
                },
            }}
        />
    );
};

export default MarkdownRenderer;
