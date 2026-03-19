import type { Meta, StoryObj } from "@storybook/react-vite";
import { mockBlueprints } from "../content/mockSamples";
import { BlueprintBoard } from "./BlueprintBoard";

const meta = {
  title: "Blueprints/BlueprintBoard",
  component: BlueprintBoard,
  args: {
    blueprints: mockBlueprints,
  },
} satisfies Meta<typeof BlueprintBoard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
