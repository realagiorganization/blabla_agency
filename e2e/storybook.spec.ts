import { expect, test } from "@playwright/test";
import { attachFullPageScreenshot } from "./support";

test("storybook default section heading story renders bilingual sources", async ({ page }, testInfo) => {
  await page.goto("storybook/iframe.html?id=overview-sectionheading--default&viewMode=story");

  await expect(
    page.getByRole("heading", {
      name: /short bilingual copy should stay easy to scan/i,
    }),
  ).toBeVisible();
  await expect(page.getByText("docs/samples.md")).toBeVisible();
  await expect(page.getByText(/source \/ источник/i).first()).toBeVisible();

  await attachFullPageScreenshot(page, testInfo, "storybook-section-heading-default");
});

test("storybook source-free section heading story omits source chips", async ({ page }, testInfo) => {
  await page.goto(
    "storybook/iframe.html?id=overview-sectionheading--without-sources&viewMode=story",
  );

  await expect(
    page.getByRole("heading", {
      name: /short copy should still stay precise/i,
    }),
  ).toBeVisible();
  await expect(page.getByLabel("Repository source paths")).toHaveCount(0);

  await attachFullPageScreenshot(page, testInfo, "storybook-section-heading-without-sources");
});

test("storybook repo-only card keeps the GitHub source link and omits live publish links", async ({ page }, testInfo) => {
  await page.goto(
    "storybook/iframe.html?id=repository-repositorysourcecard--repo-only&viewMode=story",
  );

  await expect(
    page.getByRole("heading", {
      name: /repo-only brief/i,
    }),
  ).toBeVisible();
  await expect(page.locator(".repo-path")).toHaveText("README.md");
  await expect(page.getByRole("link", { name: /github source \/ исходник на github/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /published surface/i })).toHaveCount(0);

  await attachFullPageScreenshot(page, testInfo, "storybook-repo-only-card");
});
