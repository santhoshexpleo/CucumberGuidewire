const {test, expect} = require('@playwright/test');
const path = require('path');
require('dotenv').config({
    path:path.join(__dirname,'../.env')
})

class Loginpage{
    async navigate(){
        await global.page.goto(process.env.WEB_URL);
    }

    async enterUserName(){
        await global.page.locator('//input[@id="Login:LoginScreen:LoginDV:username-inputEl"]/parent::div[1]').fill(process.env.WEB_USERNAME);
    }

    async enterPassword(){
        await global.page.locator('//input[@id="Login:LoginScreen:LoginDV:password-inputEl"]/parent::div[1]').fill(process.env.WEB_PASSWORD);
    }

    async clickLoginButton(){
        await global.page.locator('//input[@id="Login:LoginScreen:LoginDV:submit-btnInnerEl"]').click();
    }

    async verifyTitle(){
        await expect(global.page).toHaveTitle('//span[contains(text(),"My Activities") and @id="DesktopActivities:DesktopActivitiesScreen:0"]');
    }
}

module.exports={Loginpage}