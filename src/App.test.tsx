import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the agency proposition and navigation", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /blabla agency turns evolving discussions into deployed software/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open storybook/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open pdf/i })).toBeInTheDocument();
  });

  it("shows the recorded context section", () => {
    render(<App />);

    expect(
      screen.getByText(/the ai pipeline generates from recorded reality/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/call recordings/i)).toBeInTheDocument();
    expect(screen.getByText(/записи созвонов/i)).toBeInTheDocument();
  });
});
