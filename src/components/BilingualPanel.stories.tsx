import type { Meta, StoryObj } from "@storybook/react-vite";
import { BilingualPanel } from "./BilingualPanel";

const meta = {
  title: "Overview/BilingualPanel",
  component: BilingualPanel,
  args: {
    english:
      "The client starts with a rough draft, and the real specification emerges from the recorded discussion around it.",
    russian:
      "Клиент начинает с грубого черновика, а реальная спецификация появляется из записанного обсуждения вокруг него.",
  },
} satisfies Meta<typeof BilingualPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
