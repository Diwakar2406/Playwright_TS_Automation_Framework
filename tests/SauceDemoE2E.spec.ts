import {test, expect} from '@playwright/test';

test ('SauceDemo E2E Test', async ({page})=> {
//login to application
await page.goto('https://www.saucedemo.com/');
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();
expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

//add items to cart
await page.locator('#add-to-cart-sauce-labs-backpack').click();

//click on cart logo
await page.locator('#shopping_cart_container').click();

//click on checkout
await page.locator('#checkout').click();

//enter details
await page.locator('#first-name').fill('surendra');
await page.locator('#last-name').fill('kumar');
await page.locator('#postal-code').fill('500018');

//click on continue
await page.locator('#continue').click();

//click on finish
await page.locator('#finish').click();

//validate the message , click on back to home
const confirmMessage = await page.locator('.complete-header').textContent();
console.log('message is '+confirmMessage);
await page.locator('#back-to-products').click();

//logout from the application
await page.locator('#react-burger-menu-btn').click();
await page.locator('#logout_sidebar_link').click();

await page.close();
/*
login to application 
add items to cart
go to cart
checkout
enter details
finish
validate the message , click on back to home
logout from the application

*/


})


