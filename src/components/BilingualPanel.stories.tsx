import type { Meta, StoryObj } from "@storybook/react-vite";
import { mockPanelSample } from "../content/mockSamples";
import { BilingualPanel } from "./BilingualPanel";

const meta = {
  title: "Overview/BilingualPanel",
  component: BilingualPanel,
  args: {
    english: mockPanelSample.english,
    russian: mockPanelSample.russian,
  },
} satisfies Meta<typeof BilingualPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongerPair: Story = {
  args: {
    english: "Recorded calls, chat, and demo state become the next AI context pass.",
    russian: "Записанные созвоны, чат и состояние демо становятся следующим проходом AI-контекста.",
  },
};
