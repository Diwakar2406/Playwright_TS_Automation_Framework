import {Page, Locator} from '@playwright/test';

import {LoginPage} from './LoginPage';
import {HomePage} from './HomePage';
import {YourCartPage} from './YourCartPage';
import {YourInfoPage} from './YourInfoPage';
import {OverViewPage} from './OverviewPage';
import {OrderConfirmationPage} from './OrderConfirmationPage';

export class PageManager {
    readonly page: Page;
    readonly loginPageInstance: LoginPage;
    readonly homePageInstance: HomePage;
    readonly yourCartPageInstance: YourCartPage;
    readonly yourInformationPageInstance: YourInfoPage;
    readonly overviewPageInstance: OverViewPage;
    readonly orderConfirmationPageInstance: OrderConfirmationPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPageInstance = new LoginPage(this.page);
        this.homePageInstance = new HomePage(this.page);
        this.yourCartPageInstance = new YourCartPage(this.page);
        this.yourInformationPageInstance = new YourInfoPage(this.page);
        this.overviewPageInstance = new OverViewPage(this.page);
        this.orderConfirmationPageInstance = new OrderConfirmationPage(this.page);
    }

    instanceToLoginPage(){
        return this.loginPageInstance;
    }

    instanceToHomePage(){
        return this.homePageInstance;
    }

    instanceToYourCartPage(){
        return this.yourCartPageInstance;
    }

    instanceToYourInformationPage(){
        return this.yourInformationPageInstance;
    }

    instanceToOverviewPage(){
        return this.overviewPageInstance;
    }

    instanceToOrderConfirmationPage(){
        return this.orderConfirmationPageInstance;
    }
}