import { render, screen } from "@testing-library/react";
import {
  mockSectionHeadingSample,
  mockSectionHeadingWithoutSources,
} from "../content/mockSamples";
import { SectionHeading } from "./SectionHeading";

describe("SectionHeading", () => {
  it("renders bilingual copy and source chips", () => {
    render(
      <SectionHeading
        eyebrow={mockSectionHeadingSample.eyebrow}
        title={mockSectionHeadingSample.title}
        description={mockSectionHeadingSample.description}
        sources={mockSectionHeadingSample.sources}
      />,
    );

    expect(
      screen.getByRole("heading", {
        name: mockSectionHeadingSample.title.en,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(mockSectionHeadingSample.title.ru)).toBeInTheDocument();
    expect(screen.getByText(mockSectionHeadingSample.description.en)).toBeInTheDocument();
    expect(screen.getByText(mockSectionHeadingSample.description.ru)).toBeInTheDocument();
    expect(screen.getAllByText(/source \/ источник/i).length).toBeGreaterThan(0);
    expect(screen.getByText("docs/samples.md")).toBeInTheDocument();
  });

  it("skips source chips when no sample sources are provided", () => {
    render(
      <SectionHeading
        eyebrow={mockSectionHeadingWithoutSources.eyebrow}
        title={mockSectionHeadingWithoutSources.title}
        description={mockSectionHeadingWithoutSources.description}
      />,
    );

    expect(screen.queryByLabelText(/repository source paths/i)).not.toBeInTheDocument();
  });
});
