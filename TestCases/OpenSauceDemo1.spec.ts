import {test} from '@playwright/test';

import {PageManager} from '../PageObjects/PageManager';

test('Open Sauce Demo', async ({page}) => {    
const pageManager = new PageManager(page);

await pageManager.instanceToLoginPage().OpenSauceDemoApp();
await pageManager.instanceToLoginPage().LoginToSauceDemoApp('standard_user', 'secret_sauce');
await page.waitForTimeout(2000); // Wait for 2 seconds before logging in

await pageManager.instanceToHomePage().AddItemToCart();
await page.waitForTimeout(2000); // Wait for 2 seconds before logging out

await pageManager.instanceToYourCartPage().ClickOnCheckoutButton();
await page.waitForTimeout(2000); // Wait for 2 seconds before logging out

await pageManager.instanceToYourInformationPage().FillYourInfo('John', 'Doe', '12345');
await page.waitForTimeout(2000); // Wait for 2 seconds before logging out

await pageManager.instanceToOverviewPage().ClickOnFinishButton();
await page.waitForTimeout(2000); // Wait for 2 seconds before logging out

await pageManager.instanceToOrderConfirmationPage().ClickOnBackToHomeButton();
await page.waitForTimeout(2000); // Wait for 2 seconds before logging out

await pageManager.instanceToHomePage().LogoutFromApp();
await page.waitForTimeout(2000); // Wait for 2 seconds before logging out

await pageManager.instanceToLoginPage().CloseSauceDemoApp();

});
