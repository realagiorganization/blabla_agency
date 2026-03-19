import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  mockRepositorySourceRepoOnly,
  mockRepositorySourceSample,
} from "../content/mockSamples";
import { RepositorySourceCard } from "./RepositorySourceCard";

const meta = {
  title: "Repository/RepositorySourceCard",
  component: RepositorySourceCard,
  args: {
    source: mockRepositorySourceSample,
  },
} satisfies Meta<typeof RepositorySourceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ReadmeBrief: Story = {};

export const RepoOnly: Story = {
  args: {
    source: mockRepositorySourceRepoOnly,
  },
};
