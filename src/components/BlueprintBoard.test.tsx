import { fireEvent, render, screen } from "@testing-library/react";
import { blueprints } from "../content/siteContent";
import { BlueprintBoard } from "./BlueprintBoard";

describe("BlueprintBoard", () => {
  it("switches between engagement blueprints", () => {
    render(<BlueprintBoard blueprints={blueprints} />);

    expect(
      screen.getByRole("heading", { name: /internal operating system/i }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /03 website plus application surface/i }));

    expect(
      screen.getByRole("heading", { name: /website plus application surface/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/live pages site and storybook/i)).toBeInTheDocument();
    expect(screen.getByText(/слои презентации и сценария/i)).toBeInTheDocument();
  });
});
