import { render, screen } from "@testing-library/react";
import { mockRepositorySourceSample } from "../content/mockSamples";
import { RepositorySourceCard } from "./RepositorySourceCard";

describe("RepositorySourceCard", () => {
  it("renders repository and live links from sample data", () => {
    render(<RepositorySourceCard source={mockRepositorySourceSample} />);

    expect(
      screen.getByRole("heading", {
        name: mockRepositorySourceSample.title.en,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(mockRepositorySourceSample.title.ru)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /github source \/ исходник на github/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /published surface/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/sample proof trail/i)).toBeInTheDocument();
    expect(screen.getByText(/пример выходов/i)).toBeInTheDocument();
  });
});
