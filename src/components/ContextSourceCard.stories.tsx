import type { Meta, StoryObj } from "@storybook/react-vite";
import { contextSources } from "../content/siteContent";
import { ContextSourceCard } from "./ContextSourceCard";

const meta = {
  title: "ContextSourceCard",
  component: ContextSourceCard,
  args: {
    source: contextSources[2],
  },
} satisfies Meta<typeof ContextSourceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DemoState: Story = {};
