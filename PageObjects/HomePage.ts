import {Page, Locator} from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly cartButton: Locator;
    readonly cartlogo: Locator;
    readonly sidemenuButton: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartlogo = page.locator('#shopping_cart_container');
        this.sidemenuButton = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.locator('#logout_sidebar_link');
    }

    async AddItemToCart() {
        await this.cartButton.click();
        await this.page.waitForTimeout(2000); // Wait for 2 seconds before clicking the cart logo
        await this.cartlogo.click();
    }

async LogoutFromApp() {
        await this.sidemenuButton.click();
        await this.page.waitForTimeout(2000); // Wait for 2 seconds before clicking the logout button
        await this.logoutButton.click();
    }

}
    
