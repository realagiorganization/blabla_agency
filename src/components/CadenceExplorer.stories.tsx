import type { Meta, StoryObj } from "@storybook/react-vite";
import { cadenceExplorerFrames } from "../content/siteContent";
import { CadenceExplorer } from "./CadenceExplorer";

const meta = {
  title: "Cadence/CadenceExplorer",
  component: CadenceExplorer,
  args: {
    frames: cadenceExplorerFrames,
  },
} satisfies Meta<typeof CadenceExplorer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
