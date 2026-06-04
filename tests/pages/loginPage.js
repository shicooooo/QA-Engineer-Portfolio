class LoginPage{
    constructor(page){
        this.page=page;
        this.usernameField=page.locator('#username');
        this.passwordField=page.locator('#password');
        this.loginButton=page.locator('button[type="submit"]');
        this.successMessage=page.locator('.flash.success');
        this.errorMessage=page.locator('.flash.error');
    }
    async goto(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }
    async login(username,password){
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}
module.exports={LoginPage};