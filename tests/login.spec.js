    /*const {test,expect}=require("@playwright/test")
    const { LoginPage } = require('./pages/LoginPage');
    
    test("login with valid credentials",async({page})=>{
        const loginPage=new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('tomsmith','SuperSecretPassword!');
        await expect(loginPage.successMessage).toBeVisible();   
    });

    test("login with invalid credentials",async({page})=>{
        const loginPage=new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('invalidUser','invalidPassword');
        await expect(loginPage.errorMessage).toBeVisible({timeout:10000});
    })

    test("login with empty credentials",async ({page})=>{
        const loginPage=new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('','');
        await expect(loginPage.errorMessage).toBeVisible({timeout:10000})
    })
    */

    const {test,expect}=require("@playwright/test")
    const { LoginPage }=require('./pages/LoginPage');

    let loginPage;
    test.beforeEach(async({page})=>{
        loginPage=new LoginPage(page);
        await loginPage.goto();
    });

    test ("login with valid credentials",async({page})=>{
        await loginPage.login('tomsmith','SuperSecretPassword!');
        await expect(loginPage.successMessage).toBeVisible();
    });
    
    test("login with invalid credentials",async({page})=>{
        await loginPage.login('invalidUser','invalidPassword');
        await expect(loginPage.errorMessage).toBeVisible({timeout:10000});
    });

    test("login with empty credentials",async({page})=>{
        await loginPage.login('','');
        await expect(loginPage.errorMessage).toBeVisible({timeout:10000});
    })