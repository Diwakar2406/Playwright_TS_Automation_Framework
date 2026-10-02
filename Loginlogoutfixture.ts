import {test as base} from '@playwright/test';

type lilofixture = {
  loginlogoutfixture: any,
};      

export const test = base.extend<lilofixture>({
  loginlogoutfixture: async ({page}: {page:any}, use:any) => {
    const loginlogoutfixture = undefined;
await page.goto('https://www.saucedemo.com/');
await page.pause();
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();
await use(loginlogoutfixture);
await page.locator('#react-burger-menu-btn').click();
await page.locator('#logout_sidebar_link').click(); 
  }
});