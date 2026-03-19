import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  mockSectionHeadingSample,
  mockSectionHeadingWithoutSources,
} from "../content/mockSamples";
import { SectionHeading } from "./SectionHeading";

const meta = {
  title: "Overview/SectionHeading",
  component: SectionHeading,
  args: mockSectionHeadingSample,
} satisfies Meta<typeof SectionHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutSources: Story = {
  args: mockSectionHeadingWithoutSources,
};
