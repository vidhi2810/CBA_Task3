const buffer = require("../utils/Buffer");

//const {Teaching_Period_One, Teaching_Period_Two,ASU_Fall_Session_A} =
//    require('../Enums/TeachingPeriods');
//const {Continuing, New_to_UNSW_Academic_Career} =require('../Enums/StudentStatus');
//const {Undergraduate} =require('../Enums/AcademicCareer');
//const {Lock_Unlock_System_Estimate, SLP_Lock_Unlock, User_Profile} =
//    require("../Enums/AdminstrationTypes");



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