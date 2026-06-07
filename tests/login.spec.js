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

    /*
    OLD WAY
    
    let loginPage;
    test.beforeEach(async({page})=>{
        loginPage=new LoginPage(page);
        await loginPage.goto();
    });

    test ("login with valid credentials",async({page})=>{
        await loginPage.login('tomsmith','SuperSecretPassword!');
        await expect(loginPage.successMessage).toBeVisible();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
    });
    
    test("login with invalid credentials",async({page})=>{
        await loginPage.login('invalidUser','invalidPassword');
        await expect(loginPage.errorMessage).toBeVisible({timeout:10000});
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
    });

    test("login with empty credentials",async({page})=>{
        await loginPage.login('','');
        await expect(loginPage.errorMessage).toBeVisible({timeout:10000});
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
    })
        NEW WAY 
            */

    const loginData=[
    {username:'tomsmith',password:'SuperSecretPassword!',expectedResult:'success'},
    {username:'wrongUser',password:'wrongPassword',expectedResult:'error'},
    {username:'',password:'',expectedResult:'error'}
    ];

    for (const data of loginData){
        test(`login test ${data.username ||'empty' }credentials`,async({page})=>{
        const loginPage=new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(data.username,data.password);

    if (data.expectedResult==='success'){
        await expect(loginPage.successMessage).toBeVisible();
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
    } else {
        await expect(loginPage.errorMessage).toBeVisible({timeout:10000});
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
    }
        })}