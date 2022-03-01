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

//Given('DVCA user is logged in', async () => {
//
//    loginPage.loginAsDVCAAdmin();
//});
//
//Given('Read Only user is logged in', async () => {
//    loginPage.loginAsReadOnlyUser();
//});
//
//Given('he is in Program View of SLP', () => {
//    applicationPage.goToSLP();
//    slpHomePage.goToProgramView();
//
//});
//Given('he is in Teaching Distributuion Section', () => {
//    I.waitForNavigation();
//    programTablePage.clickTeachingDistributionButton();
//});
//
//Given('he is in 3-Year-Plan View of SLP', () => {
//    applicationPage.goToSLP();
//    slpHomePage.goToThreeYearPlanView();
//
//});
//
//Given('he is in Reports View of SLP', () => {
//    applicationPage.goToSLP();
//    slpHomePage.goToReportsView();
//});
//Given('he is in Administration View of SLP', () => {
//    applicationPage.goToSLP();
//    slpHomePage.goToAdministrationView();
//});
//
//Given('he is in Messages View of SLP', () => {
//    applicationPage.goToSLP();
//    slpHomePage.goToMessagesView();
//});
///*
//         TUTION FEE STEPS
// */
//
//Given('he is in  Tution fee page', async() => {
//    applicationPage.goToTutionFee();
//    I.waitForNavigation();
//});
//
//Given('he navigates to Tution Fee Setting', async() => {
//    tutionfeeHomePage.goToTutionFeeSettingPage();
//
//});
//
//
//Given('he has a new proposal created', () => {
//
//    tutionFeeSettingPage.validateRecordExistsByFeeCohort(buffer.getBuffer("fee_cohort"))
//});
//
//
//
//Given('he navigates to Administration Section', () => {
//    tutionfeeHomePage.goToAdministration();
//});
//
//
//Given('he is in  Admissions module', () => {
//    applicationPage.goToAdmissions();
//});
//
//Given('he captures all details of a program code in UAC Floor Set page', async() => {
//
//   admissionsHomePage.goToUacFloorSetPage();
//    I.waitForNavigation();
//   await uacFloorSetPage.getFirstRowDetails();
//});
//
//Given('he navigates to Administration page', () => {
//  //  I.waitForNavigation();
//    admissionsHomePage.goToAdministration();
//    I.waitForNavigation();
//});
//
//Given(/^he navigates to  Download\/Upload section$/, () => {
//    adminPage.goToAdminSection("Download/Upload CSV");
//    I.waitForNavigation();
//});
//
//
//
//Given('he navigates to UAC Offer Conversion page', () => {
//    admissionsHomePage.goToUacOfferConversionPage();
//    I.waitForNavigation();
//});
//
//Given('selects Faculty of Medicine', () => {
//    commonPage.selectFaculty("Faculty of Medicine");
//});
//
//
//
//Given('he navigates to UAC Simulation Report page', () => {
//    admissionsHomePage.goToUacSimulationPage();
//});
//
//
