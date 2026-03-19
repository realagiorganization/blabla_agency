import { render, screen } from "@testing-library/react";
import { mockPanelSample } from "../content/mockSamples";
import { BilingualPanel } from "./BilingualPanel";

describe("BilingualPanel", () => {
  it("renders both language columns", () => {
    render(
      <BilingualPanel
        english={mockPanelSample.english}
        russian={mockPanelSample.russian}
      />,
    );

    expect(screen.getByText("English")).toBeInTheDocument();
    expect(screen.getByText("Русский")).toBeInTheDocument();
    expect(screen.getByText(mockPanelSample.english)).toBeInTheDocument();
    expect(screen.getByText(mockPanelSample.russian)).toBeInTheDocument();
  });
});
