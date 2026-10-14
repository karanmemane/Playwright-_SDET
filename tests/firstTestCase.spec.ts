
import { test, expect } from '@playwright/test';

test('My first test case - Verify title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await expect(page).toHaveTitle(/Playwright/);
});

test('My second test case - Verify Installation heading', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await page.getByRole('link', { name: 'Get started' }).click();

    await expect(
        page.getByRole('heading', { name: 'Installation' })
    ).toBeVisible();
});
