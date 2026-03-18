import type { Meta, StoryObj } from "@storybook/react-vite";
import { cadence } from "../content/siteContent";
import { CadenceStepCard } from "./CadenceStepCard";

const meta = {
  title: "CadenceStepCard",
  component: CadenceStepCard,
  args: {
    step: cadence[0],
  },
} satisfies Meta<typeof CadenceStepCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DraftSpec: Story = {};

export const FeedbackLoop: Story = {
  args: {
    step: cadence[4],
  },
};
