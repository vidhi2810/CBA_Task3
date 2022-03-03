const buffer = require("../utils/Buffer");


const {
    I,
    loginPage,
    responsivefightHome,
    leaderboardPage,
} = inject();

Then('User should be created', async() => {
    await responsivefightHome.verifyWellComeText();
});

Then('User should redirect on leaderboard page', async() => {
    await leaderboardPage.verifycontinueFightingButton();
    await leaderboardPage.verifyAutoUserName();
});
