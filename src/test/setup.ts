import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

vi.mock("mermaid", () => ({
  default: {
    initialize: () => undefined,
    run: () => Promise.resolve(),
  },
}));
