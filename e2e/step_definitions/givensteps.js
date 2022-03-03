const {I,
        loginPage,
} = inject();
const buffer = require("../utils/Buffer");




Given('Warrior as Automation user', () => {
    loginPage.clickLoginButton();
    loginPage.enterWarriorName();
});

Given('Create Automation Warrior', async() => {
    loginPage.clickLoginButton();
    loginPage.enterWarriorName();
    loginPage.clickCreateWarrior();
});

Given('Start journey', async () => {
    loginPage.clickStartYourJourney();
    I.waitForNavigation();
});
