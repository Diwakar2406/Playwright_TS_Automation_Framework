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