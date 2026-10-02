import {test} from '../Loginlogoutfixture';

test ('SauceDemo E2E Test', async ({page, loginlogoutfixture})=> {
//login to application


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


// await page.close();


})


