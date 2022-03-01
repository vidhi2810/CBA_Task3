const { I } = inject();

const welcomeText = {id:"welcome_text"};
const areYouGamebtn = {id:"news"};
const TaketheBusbtn = {id:'bus'};
const goToPublicPlacebtn = {id:"restaurant"};
const goToOfficebtn = {id:"office"};

module.exports = {

    async verifyWellComeText(){
        return I.seeElement(welcomeText);
    },
    async goToAreYouGame(){
        I.click(areYouGamebtn);
        await I.waitForNavigation();
    },
    async goToTakeTheBus(){
        I.click(TaketheBusbtn);
        await I.waitForNavigation();
    },
    async goToPublicPlace(){
        I.click(goToPublicPlacebtn);
        await I.waitForNavigation();
    },
    async goToTheOffice(){
        I.click(goToOfficebtn);
        await I.waitForNavigation();
    }
}
