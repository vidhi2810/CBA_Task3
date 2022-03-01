const { I } = inject();

const continueFightingbtn = {id:"leaderboard_link"};
const autoUserNametd = {xpath:"//td[contains(text(),'AutoUser')]"};
const autoUserScoretd = {xpath:"//td[contains(text(),'AutoUser')]/following-sibling::td"};

module.exports = {

    async verifycontinueFightingButton(){
        return await I.seeElement(continueFightingbtn);
    },

    async verifyAutoUserName(){
         return await I.seeElement(autoUserNametd);
    },

    async autoUserScore(){
         return await I.seeElement(autoUserScoretd);
    },

    async clickContinueFighting(){
        I.click(continueFightingbtn);
        await I.waitForNavigation();
    }
}
