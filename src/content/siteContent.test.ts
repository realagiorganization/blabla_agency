import {
  cadence,
  cadenceExplorerFrames,
  capabilities,
  contextSources,
  deliverables,
  endeavorTracks,
  footerCopy,
  footerLinks,
  hero,
  heroLinks,
  metrics,
  navigationLinks,
  recordedContextCallout,
  repositorySources,
  sectionCopy,
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
      heroLinks,
      navigationLinks,
      sectionCopy,
      metrics,
      capabilities,
      endeavorTracks,
      repositorySources,
      cadence,
      cadenceExplorerFrames,
      contextSources,
      deliverables,
      recordedContextCallout,
      footerCopy,
      footerLinks,
    });

    expect(issues).toEqual([]);
  });

  it("defines the full cadence, repo sources, and public outputs", () => {
    expect(cadence).toHaveLength(5);
    expect(cadenceExplorerFrames).toHaveLength(5);
    expect(endeavorTracks).toHaveLength(4);
    expect(repositorySources).toHaveLength(7);
    expect(contextSources.length).toBeGreaterThanOrEqual(5);
    expect(deliverables).toHaveLength(5);
    expect(Object.keys(sectionCopy)).toEqual([
      "endeavor",
      "sources",
      "surfaces",
      "cadence",
      "diagrams",
      "context",
      "deliverables",
    ]);
  });
});
