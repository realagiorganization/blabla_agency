import type { Meta, StoryObj } from "@storybook/react-vite";
import { mockCadenceFrames } from "../content/mockSamples";
import { CadenceExplorer } from "./CadenceExplorer";

const meta = {
  title: "Cadence/CadenceExplorer",
  component: CadenceExplorer,
  args: {
    frames: mockCadenceFrames,
  },
} satisfies Meta<typeof CadenceExplorer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
