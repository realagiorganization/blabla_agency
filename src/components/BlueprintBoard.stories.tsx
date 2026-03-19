import type { Meta, StoryObj } from "@storybook/react-vite";
import { blueprints } from "../content/siteContent";
import { BlueprintBoard } from "./BlueprintBoard";

const meta = {
  title: "Blueprints/BlueprintBoard",
  component: BlueprintBoard,
  args: {
    blueprints,
  },
} satisfies Meta<typeof BlueprintBoard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
