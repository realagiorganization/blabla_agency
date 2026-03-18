import type { Preview } from "@storybook/react-vite";
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    options: {
      storySort: {
        order: ["Overview", "CadenceStepCard", "ContextSourceCard", "MermaidDiagram"],
      },
    },
  },
};

export default preview;
