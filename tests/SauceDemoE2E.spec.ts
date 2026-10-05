import { test, expect } from '@playwright/test';

test('SauceDemo E2E Test with assertions and CI/CD ready', async ({ page }) => {
  // This flow is suitable for CI/CD runs in GitHub Actions and validates the purchase journey end-to-end.
  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle(/Swag Labs/);
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await expect(page).toHaveURL(/.*inventory\.html/);
  await expect(page.locator('.title')).toHaveText('Products');

  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  await page.locator('#shopping_cart_container').click();
  await expect(page).toHaveURL(/.*cart\.html/);
  await expect(page.locator('.title')).toHaveText('Your Cart');

  await page.locator('#checkout').click();
  await expect(page).toHaveURL(/.*checkout-step-one\.html/);

  await page.locator('#first-name').fill('surendra');
  await page.locator('#last-name').fill('kumar');
  await page.locator('#postal-code').fill('500018');
  await page.locator('#continue').click();

  await expect(page).toHaveURL(/.*checkout-step-two\.html/);
  await expect(page.locator('.summary_total_label')).toContainText('Total');

  await page.locator('#finish').click();

  const confirmMessage = page.locator('.complete-header');
  await expect(confirmMessage).toHaveText('Thank you for your order!');
  await expect(page.locator('#back-to-products')).toBeVisible();

  await page.locator('#back-to-products').click();
  await expect(page.locator('.title')).toHaveText('Products');

  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#logout_sidebar_link').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});


