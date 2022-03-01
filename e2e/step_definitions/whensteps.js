const {
    I,
    loginPage,
    responsivefightHome,
    newsPage,
    busPage,
} = inject();

const buffer = require('../utils/Buffer');

const {
    Questions_news,
    Questions_bus,
} = require('../lib/QuestionsDB');

const config = require('config');
const path= require('path');

When('User create warrior', async () => {
        loginPage.clickCreateWarrior();
});

When('Start journey', async () => {
        await loginPage.clickStartYourJourney();
});

When('User goto news questionnaire', async () => {
        await responsivefightHome.goToAreYouGame();
});

When('User goto the bus questionnaire', async () => {
        await responsivefightHome.goToTakeTheBus();
});

When('User goto restaurant questionnaire', async () => {
        await responsivefightHome.goToPublicPlace();
});

When('User go to the office questionnaire', async () => {
        await responsivefightHome.goToTheOffice();
});

When('Confirm start from the beginning in case of wrong answer', async () => {
        await newsPage.clickStartPopupButton();
});

When('Provide correct answers for all Questions', async () => {
    await newsPage.selectAnswer(Questions_news);
});

When('Confirm start from the beginning in case of wrong answer at any of bus questions', async () => {
        await busPage.clickStartPopupButton();
});

When('Provide correct answers for all take the bus questions', async () => {
    await busPage.selectAnswer(Questions_bus);
});

When('Confirm start from the beginning in case of wrong answer at any of restaurant questions', async () => {
        await busPage.clickStartPopupButton();
});

When('Provide correct answers for all take the restaurant questions', async () => {
    await busPage.selectAnswer(Questions_news);
});

When('Confirm start from the beginning in case of wrong answer at any of go to the office questions', async () => {
        await busPage.clickStartPopupButton();
});

When('Provide correct answers for all take the go to the office questions', async () => {
    await busPage.selectAnswer(Questions_news);
});