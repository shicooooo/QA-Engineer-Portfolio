const {test , expect} = require ('@playwright/test');

test ('login with valid credentials', async ({page})=> {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username','tomsmith');
    await page.fill("#password",'SuperSecretPassword!');
    await page.click('button[type="submit"]');
    await expect(page.locator('.flash.success')).toBeVisible();
});

test('login with invalid credentials', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'wronguser');
    await page.fill('#password', 'wrongpassword');
    await page.click('button[type="submit"]');
    await expect(page.locator('.flash.error')).toBeVisible({timeout:10000});
})