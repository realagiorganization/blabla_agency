import type { Meta, StoryObj } from "@storybook/react-vite";
import { repositorySources } from "../content/siteContent";
import { RepositorySourceCard } from "./RepositorySourceCard";

const meta = {
  title: "Repository/RepositorySourceCard",
  component: RepositorySourceCard,
  args: {
    source: repositorySources[0],
  },
} satisfies Meta<typeof RepositorySourceCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ReadmeBrief: Story = {};
