import {Page, Locator} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameTextField: Locator;
    readonly passwordTextField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameTextField = page.locator('#user-name');
        this.passwordTextField = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async OpenSauceDemoApp() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async LoginToSauceDemoApp(username: string, password: string) {
        await this.usernameTextField.fill(username);
        await this.passwordTextField.fill(password);
        await this.page.waitForTimeout(2000); // Wait for 2 seconds before clicking the login button
        await this.loginButton.click();
    }

    async CloseSauceDemoApp() {
        await this.page.close();
    }

}