const { I } = inject();

const username = {id:'worrior_username'};
const createWarrior = {id:'warrior'};
const startbtn = {id:'start'};
const loginbtn = {id:'login'};
const config =require('config');


module.exports=
{
    enterWarriorName() {
        I.amOnPage(config.get("baseUrl"));
        I.click(loginbtn);
        I.fillField(username, config.get("username"));
    },
    clickLoginButton(){
        I.amOnPage(config.get("baseUrl"));
        I.click(loginbtn);
    },
    clickCreateWarrior(){
        I.click(createWarrior);
    },
    async clickStartYourJourney(){
        I.click(startbtn);
        await I.waitForNavigation();
    }
//    loginAsDVCAAdmin() {
//        I.amOnPage(config.get("baseUrl")+"/login")
//        I.fillField(username, config.get("dvca.username"));
//        I.fillField(password, config.get("dvca.password"));
//        I.click(submitbtn);
//    },
//    loginAsReadOnlyUser() {
//        I.amOnPage(config.get("baseUrl")+"/login")
//        I.fillField(username, config.get("slpReadUser.username"));
//        I.fillField(password, config.get("slpReadUser.password"));
//        I.click(submitbtn);
//    }



}


