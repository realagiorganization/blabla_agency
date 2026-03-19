import { expect, test } from "@playwright/test";
import { attachFullPageScreenshot } from "./support";

test("homepage exposes the bilingual repo-backed surface", async ({ page }, testInfo) => {
  test.slow();
  await page.goto("./");

  await expect(
    page.getByRole("heading", {
      name: /blabla agency turns evolving discussions into deployed software/i,
    }),
  ).toBeVisible();
  await expect(page.getByText("Источники репозитория")).toBeVisible();
  await expect(page.getByText("docs/samples.md").first()).toBeVisible();
  await expect(page.getByRole("link", { name: /open ad script/i })).toHaveAttribute(
    "href",
    "./agency_advertisement_scenario.fountain.md",
  );
  await expect(page.getByRole("banner").getByRole("link", { name: /open pdf/i })).toHaveAttribute(
    "href",
    "./artifacts/blabla_agency_presentation.pdf",
  );
  await expect(page.locator(".diagram-shell svg")).toHaveCount(2);

  const languageCards = page.locator(".hero .bilingual-panel .language-card");
  const englishBox = await languageCards.nth(0).boundingBox();
  const russianBox = await languageCards.nth(1).boundingBox();

  expect(englishBox).not.toBeNull();
  expect(russianBox).not.toBeNull();
  expect(Math.abs((englishBox?.y ?? 0) - (russianBox?.y ?? 0))).toBeLessThan(24);
  expect((russianBox?.x ?? 0) - (englishBox?.x ?? 0)).toBeGreaterThan(80);

  await attachFullPageScreenshot(page, testInfo, "homepage-desktop");
});

test("mobile reduced-motion mode keeps the core flow readable", async ({ browser }, testInfo) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();

  try {
    await page.goto("./");

    await expect(page.getByRole("button", { name: /resume autoplay/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /open storybook/i }).first()).toBeVisible();
    await expect(page.locator("#cadence")).toBeVisible();

    const languageCards = page.locator(".hero .bilingual-panel .language-card");
    const englishBox = await languageCards.nth(0).boundingBox();
    const russianBox = await languageCards.nth(1).boundingBox();

    expect(englishBox).not.toBeNull();
    expect(russianBox).not.toBeNull();
    expect((russianBox?.y ?? 0) - (englishBox?.y ?? 0)).toBeGreaterThan(32);

    await attachFullPageScreenshot(page, testInfo, "homepage-mobile-reduced-motion");
  } finally {
    await context.close();
  }
});
