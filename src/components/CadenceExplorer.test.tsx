import { fireEvent, render, screen } from "@testing-library/react";
import { cadenceExplorerFrames } from "../content/siteContent";
import { CadenceExplorer } from "./CadenceExplorer";

describe("CadenceExplorer", () => {
  it("switches stages when a step button is clicked", () => {
    render(<CadenceExplorer frames={cadenceExplorerFrames} />);

    expect(screen.getByRole("heading", { name: /intake and rough scope/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /03 context ledger assembly/i }));

    expect(screen.getByRole("heading", { name: /context ledger assembly/i })).toBeInTheDocument();
    expect(screen.getByText(/AI-ready context bundle/i)).toBeInTheDocument();
    expect(screen.getByText(/транскрипты, заметки и комментарии в issues/i)).toBeInTheDocument();
  });
});
