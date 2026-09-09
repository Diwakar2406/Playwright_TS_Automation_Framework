import {Page, Locator} from '@playwright/test';

export class OverViewPage {
    readonly page: Page;
    readonly FinishButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.FinishButton = page.locator('#finish');
    }

    async ClickOnFinishButton() {
        await this.FinishButton.click();
        await this.page.waitForTimeout(2000); // Wait for 2 seconds before clicking the finish button
    }

}