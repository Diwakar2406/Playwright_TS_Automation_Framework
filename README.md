# PlaywrightAdvanced

This folder is a Playwright automation learning project focused on browser-based end-to-end testing, page object modeling, test fixtures, and reusable automation patterns. The project includes a real SauceDemo purchase-flow scenario along with multiple example Playwright test files and supporting utilities.

## Project Goal

The goal of this repository is to practice and demonstrate:
- Playwright project setup and configuration
- Browser automation for web applications
- Form interaction and validation
- Page Object Model (POM) design
- Reusable fixtures for login and shared setup
- E2E testing of a realistic shopping workflow
- Test execution and reporting

## Tech Stack

- Playwright
- TypeScript
- Node.js
- npm
- GitHub Actions (for CI workflow demo)

## Folder Structure

```text
PlaywrightAdvanced/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── .vscode/
├── PageObjects/
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── OrderConfirmationPage.ts
│   ├── OverviewPage.ts
│   ├── PageManager.ts
│   ├── YourCartPage.ts
│   └── YourInfoPage.ts
├── TestCases/
│   ├── OpenSauceDemo.spec.ts
│   └── OpenSauceDemo1.spec.ts
├── tests/
│   ├── apiexample.spec.ts
│   ├── apiexample2.spec.ts
│   ├── apiexample3.spec.ts
│   ├── apiexample4.spec.ts
│   ├── apiexample5.spec.ts
│   ├── apiexample6.spec.ts
│   ├── apiexample7.spec.ts
│   ├── E2Eusingfixture.spec.ts
│   ├── example.spec.ts
│   ├── fixture.spec.ts
│   ├── SauceDemoE2E.spec.ts
│   └── test.csv
├── Fixture.ts
├── Loginlogoutfixture.ts
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
├── tsconfig.json
├── playwright-report/
├── test-results/
├── node_modules/
└── README.md
```

## Root Configuration Files

### `package.json`
This file defines the Playwright project dependencies and package metadata.

It includes:
- `@playwright/test` as the main testing dependency
- `@types/node` for TypeScript support
- `csv-parse` dependency

### `playwright.config.ts`
This is the main Playwright test configuration file. It configures:
- the test directory (`./tests`)
- parallel test execution
- CI-specific retries and workers
- HTML reporter
- browser projects for Chromium, Firefox, and WebKit
- trace collection on retry

This config enables testing across major browsers and is set up for both local and CI execution.

### `tsconfig.json`
This file configures TypeScript compilation for the project.

### `.gitignore`
This file typically ignores generated output such as:
- `node_modules`
- `playwright-report`
- `test-results`
- editor or OS-specific generated files

## Page Objects

The `PageObjects` directory contains reusable page classes built around the Page Object Model (POM). These classes abstract selector usage and interaction logic so the tests remain cleaner and easier to maintain.

### `LoginPage.ts`
Represents the SauceDemo login page.

Responsibilities:
- open the app URL
- fill username and password
- click login button
- close the browser page

### `HomePage.ts`
Represents the inventory/home page.

Responsibilities:
- add an item to cart
- click cart icon
- open the sidebar menu
- log out from the application

### `YourCartPage.ts`
Represents the cart page.

Responsibilities:
- click checkout button

### `YourInfoPage.ts`
Represents the checkout information page.

Responsibilities:
- fill first name
- fill last name
- fill postal code
- continue to the next step

### `OverviewPage.ts`
Represents the order overview page.

Responsibilities:
- click finish button

### `OrderConfirmationPage.ts`
Represents the confirmation page after the purchase is complete.

Responsibilities:
- wait for confirmation message
- click back to products button

### `PageManager.ts`
This class stores and exposes all page object instances together in one place, making it easier to centralize page access and manage tests more cleanly.

## Test Cases

The `TestCases` folder contains end-to-end tests for the SauceDemo application.

### `OpenSauceDemo.spec.ts`
This test opens the SauceDemo app and performs a complete login-to-checkout flow using page objects.

### `OpenSauceDemo1.spec.ts`
This file contains a similar automation flow and demonstrates the same end-to-end purchase pattern using structured page-object classes.

## Tests Folder

The `tests` directory contains a collection of Playwright examples and automation exercises.

The current files include:
- `SauceDemoE2E.spec.ts` — main E2E purchase flow
- `example.spec.ts` — basic Playwright example
- `fixture.spec.ts` — custom fixture example
- `E2Eusingfixture.spec.ts` — full E2E test using a custom fixture
- `apiexample.spec.ts` to `apiexample7.spec.ts` — Playwright API and automation examples
- `test.csv` — CSV data file used by example/test data scenarios

## Core E2E Test: SauceDemo Flow

The main automation flow in `tests/SauceDemoE2E.spec.ts` is a realistic checkout scenario for SauceDemo.

### Flow covered
1. Open SauceDemo login page
2. Login with valid credentials
3. Add a product to the cart
4. Open the cart
5. Click checkout
6. Fill customer information
7. Continue checkout
8. Finish the order
9. Validate the confirmation message
10. Click back to products
11. Logout from the app
12. Close the page

### Active test code
```ts
import {test} from '@playwright/test';

test ('SauceDemo E2E Test', async ({page})=> {
  await page.goto('https://www.saucedemo.com/');
  await page.pause();
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('#shopping_cart_container').click();
  await page.locator('#checkout').click();

  await page.locator('#first-name').fill('surendra');
  await page.locator('#last-name').fill('kumar');
  await page.locator('#postal-code').fill('500018');

  await page.locator('#continue').click();
  await page.locator('#finish').click();

  const confirmMessage = await page.locator('.complete-header').textContent();
  console.log('message is '+confirmMessage);
  await page.locator('#back-to-products').click();

  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#logout_sidebar_link').click();

  await page.close();
});
```

This test demonstrates how Playwright can automate a complete user journey by interacting with real page elements.

## Fixtures

This project includes custom Playwright fixtures used to share setup and reduce repetition across tests.

### `Fixture.ts`
This file defines a custom fixture named `loginURL` and provides a reusable URL value.

```ts
import {test as base} from '@playwright/test';

type loginURL = {
  loginURL: string;
};

export const test = base.extend<loginURL>({
  loginURL: async ({}, use) => {
    const loginURL = 'https://www.saucedemo.com/';
    console.log('before fixture');
    await use('loginURL');
    console.log('after fixture');
  }
});
```

### `Loginlogoutfixture.ts`
This file creates a login/logout Playwright fixture that:
- opens the SauceDemo page
- logs in with the standard user
- provides the page to the test
- logs out after the test body completes

```ts
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
```

### Example fixture-based tests
- `tests/fixture.spec.ts`
- `tests/E2Eusingfixture.spec.ts`

These examples show how to use reused setup values and login fixtures inside Playwright specs.

## Test Data

The project includes a CSV file in the `tests` folder:

- `tests/test.csv`

This file can be used for data-driven test examples or scenario-based automation.

## GitHub Workflow

The `.github/workflows/playwright.yml` file is used to execute the Playwright suite in CI.

This workflow is useful for:
- automated regression execution
- validating code changes in a clean environment
- integration with GitHub-based development pipelines

## Reporting and Results

The project also contains generated output folders:
- `playwright-report/`
- `test-results/`

These are created by Playwright when running tests and help with:
- trace viewing
- HTML report review
- screenshot capture on failure
- debugging failed runs

## How to Run the Tests

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run all tests:

```bash
npx playwright test
```

Run a single test file:

```bash
npx playwright test tests/SauceDemoE2E.spec.ts
```

Run with browser UI mode:

```bash
npx playwright test --ui
```

Run in headed mode:

```bash
npx playwright test --headed
```

Open the Playwright report:

```bash
npx playwright show-report
```

## What This Project Demonstrates

This project is a practical Playwright learning example showing:
- how to automate a login flow
- how to add items to a cart
- how to fill in checkout details
- how to validate a successful order
- how to log out cleanly
- how to structure tests using page objects
- how to use custom fixtures for test reuse
- how to organize tests in a scalable Playwright suite

## Summary

PlaywrightAdvanced is a hands-on Playwright automation project covering a mix of real-world browser testing, page object modeling, reusable fixture-based setup, and multiple example Playwright specs. It contains both a functional SauceDemo E2E flow and learning examples that help build a stronger understanding of modern automation practices.

The folder is useful for:
- learning Playwright step by step
- automating login and e-commerce flows
- understanding page object abstraction
- reusing fixture setup across tests
- practicing real browser testing in TypeScript
