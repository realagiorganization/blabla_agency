import { useEffect, useRef } from "react";
import mermaid from "mermaid";

type MermaidDiagramProps = {
  title: string;
  description: string;
  chart: string;
};

let mermaidInitialized = false;

export function MermaidDiagram({ title, description, chart }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mermaidInitialized) {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "loose",
        theme: "base",
        themeVariables: {
          primaryColor: "#f6e8dc",
          primaryTextColor: "#122533",
          primaryBorderColor: "#d66d3d",
          lineColor: "#d66d3d",
          secondaryColor: "#d8edf1",
          tertiaryColor: "#f6d17b",
          fontFamily: "Space Grotesk, sans-serif",
        },
      });
      mermaidInitialized = true;
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const node = containerRef.current;
    node.removeAttribute("data-processed");
    node.textContent = chart;

    void mermaid.run({ nodes: [node] });
  }, [chart]);

  return (
    <article className="diagram-card">
      <div className="diagram-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="diagram-shell">
        <div ref={containerRef} className="mermaid" />
      </div>
    </article>
  );
}
