import type { Meta, StoryObj } from "@storybook/react-vite";
import { contextDiagram } from "../content/siteContent";
import { MermaidDiagram } from "./MermaidDiagram";

const meta = {
  title: "MermaidDiagram",
  component: MermaidDiagram,
  args: {
    title: "Context ledger flow",
    description: "How recorded discussion becomes deployable generation context.",
    chart: contextDiagram,
  },
} satisfies Meta<typeof MermaidDiagram>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
