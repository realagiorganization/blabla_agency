import type { Meta, StoryObj } from "@storybook/react-vite";
import { endeavorTracks } from "../content/siteContent";
import { EndeavorTrackCard } from "./EndeavorTrackCard";

const meta = {
  title: "EndeavorTrackCard",
  component: EndeavorTrackCard,
  args: {
    track: endeavorTracks[0],
  },
} satisfies Meta<typeof EndeavorTrackCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PublicRepository: Story = {};
