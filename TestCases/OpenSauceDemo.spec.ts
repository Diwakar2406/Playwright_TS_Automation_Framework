import {test} from '@playwright/test';
import {LoginPage} from '../PageObjects/LoginPage';
import {HomePage} from '../PageObjects/HomePage';
import {YourCartPage} from '../PageObjects/YourCartPage';
import {YourInfoPage} from '../PageObjects/YourInfoPage';
import {OverViewPage} from '../PageObjects/OverviewPage';
import {OrderConfirmationPage} from '../PageObjects/OrderConfirmationPage';

test('Open SauceDemo App and Close It', async ({page}) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const yourCartPage = new YourCartPage(page);
    const yourInfoPage = new YourInfoPage(page);
    const overviewPage = new OverViewPage(page);
    const orderConfirmationPage = new OrderConfirmationPage(page);

// Login
    await page.waitForTimeout(2000); // Wait for 2 seconds before opening the app
    loginPage.OpenSauceDemoApp();
    await loginPage.LoginToSauceDemoApp('standard_user', 'secret_sauce');
    await page.waitForTimeout(2000); // Wait for 2 seconds before closing the app
    
// Add to Cart and Checkout
    await homePage.AddItemToCart();
    await page.waitForTimeout(2000); // Wait for 2 seconds before logging out

    await yourCartPage.ClickOnCheckoutButton();
    await page.waitForTimeout(2000); // Wait for 2 seconds before logging out

// Fill Your Info
    await yourInfoPage.FillYourInfo('John', 'Doe', '12345');

// Click on Finish Button
    await overviewPage.ClickOnFinishButton();

// Click on Back to Home Button
    await orderConfirmationPage.ClickOnBackToHomeButton();

// Logout
    await homePage.LogoutFromApp(); 

// Close the SauceDemo App
    await loginPage.CloseSauceDemoApp();
});