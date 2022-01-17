const { test, expect } = require('@playwright/test');
const { Context } = require('selenium-webdriver/firefox');
test('basic test', async ({ page }) => {  
await page.goto('https://github.com/login');
await page.fill('input[name="login"]', 'USERNAME');
await page.fill('input[name="password"]', 'PASSWORD');
await page.click('text=Sign in');
});
