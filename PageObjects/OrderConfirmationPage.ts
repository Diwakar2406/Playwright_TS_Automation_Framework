import {Page, Locator} from '@playwright/test';

export class OrderConfirmationPage {
    readonly page: Page;
    readonly backToHomebutton: Locator;
    readonly orderConfirmationMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.backToHomebutton = page.locator('#back-to-products');
        this.orderConfirmationMessage = page.locator('.complete-header');
    }

    async ClickOnBackToHomeButton() {
        await this.orderConfirmationMessage.waitFor(); // Wait for the order confirmation message to be visible
        await this.backToHomebutton.click();
        await this.page.waitForTimeout(2000); // Wait for 2 seconds before clicking the back to home button
    }

}