import {
  cadence,
  capabilities,
  contextSources,
  deliverables,
  hero,
  metrics,
  recordedContextCallout,
} from "./siteContent";

function collectEmptyBilingualFields(value: unknown, path = "root"): string[] {
  if (!value || typeof value !== "object") {
    return [];
  }

  const node = value as Record<string, unknown>;
  const issues: string[] = [];

  if (typeof node.en === "string" && typeof node.ru === "string") {
    if (!node.en.trim() || !node.ru.trim()) {
      issues.push(path);
    }
  }

  for (const [key, child] of Object.entries(node)) {
    if (child && typeof child === "object") {
      issues.push(...collectEmptyBilingualFields(child, `${path}.${key}`));
    }
  }

  return issues;
}

describe("site content", () => {
  it("keeps bilingual fields populated", () => {
    const issues = collectEmptyBilingualFields({
      hero,
      metrics,
      capabilities,
      cadence,
      contextSources,
      deliverables,
      recordedContextCallout,
    });

    expect(issues).toEqual([]);
  });

  it("defines the full cadence and context set", () => {
    expect(cadence).toHaveLength(5);
    expect(contextSources.length).toBeGreaterThanOrEqual(5);
    expect(deliverables.length).toBeGreaterThanOrEqual(4);
  });
});
