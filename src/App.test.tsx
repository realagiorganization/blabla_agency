import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the agency proposition, bilingual navigation, and repository briefing", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /blabla agency turns evolving discussions into deployed software/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open ad script/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /open storybook/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /organization repo/i })).toBeInTheDocument();
    expect(
      screen.getByText(/the site explains itself from repository evidence instead of generic claims/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/different project shapes still run through the same agency loop/i),
    ).toBeInTheDocument();
    expect(screen.getAllByText("README.md").length).toBeGreaterThan(0);
    expect(screen.getByText("Источники репозитория")).toBeInTheDocument();
  });

  it("shows the recorded context section and published outputs", () => {
    render(<App />);

    expect(
      screen.getByText(/the ai pipeline generates from recorded reality/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/call recordings/i)).toBeInTheDocument();
    expect(screen.getByText(/записи созвонов/i)).toBeInTheDocument();
    expect(screen.getByText(/automated publication and monitoring/i)).toBeInTheDocument();
    expect(screen.getAllByText(/source \/ источник/i).length).toBeGreaterThan(0);
  });
});
