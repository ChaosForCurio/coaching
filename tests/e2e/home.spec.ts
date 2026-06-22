import { test, expect } from '@playwright/test';

test('homepage has correct title and loads successfully', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Bhavya Computer Classes/);

  // Verify main navigation or hero section is visible
  const hero = page.locator('main');
  await expect(hero).toBeVisible();
});
