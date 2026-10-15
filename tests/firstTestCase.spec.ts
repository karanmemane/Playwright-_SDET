import { test, expect } from '@playwright/test';

// test -> used to create/define a test case
// expect -> used to verify the actual result against the expected condition

test('My first test case - Verify title', async ({ page }) => {

    // async -> allows us to use await inside this function
    // page -> represents a browser page/tab controlled by Playwright

    await page.goto('https://playwright.dev/');

    // await -> waits for the asynchronous operation before continuing
    // page -> browser page/tab
    // goto() -> navigates the browser to the given URL

    await expect(page).toHaveTitle(/Playwright/);

    // expect -> assertion used to verify the expected condition
    // toHaveTitle -> checks the title of the webpage
    // /Playwright/ -> checks that the title matches/contains "Playwright"
});


test('My second test case - Verify Installation heading', async ({ page }) => {

    await page.goto('https://playwright.dev/');

    // Open the Playwright website

    await page.getByRole('link', { name: 'Get started' }).click();

    // getByRole -> finds an element based on its accessible role
    // 'link' -> find a link
    // name: 'Get started' -> link should be named "Get started"
    // click() -> clicks the link

    await expect(
        page.getByRole('heading', { name: 'Installation' })
    ).toBeVisible();

    // getByRole('heading') -> finds a heading
    // name: 'Installation' -> finds the "Installation" heading
    // toBeVisible() -> verifies that the heading is visible
});