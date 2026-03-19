import type { Page, TestInfo } from "@playwright/test";

export async function attachFullPageScreenshot(
  page: Page,
  testInfo: TestInfo,
  name: string,
) {
  const screenshotPath = testInfo.outputPath(`${name}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });
  await testInfo.attach(name, {
    path: screenshotPath,
    contentType: "image/png",
  });
}
