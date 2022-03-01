const { I } = inject();
const assert = require('assert')
const startPopupbtn={xpath:"//button[contains(@id,'start')]"}
const checkYourFinalScorePopupbtn={id:'leaderboard_link'}
const questiondiv={xpath:"//p[contains(@id,'_question_')]"}
module.exports = {
    clickStartPopupButton(){
        I.click(startPopupbtn);
        I.waitForInvisible(startPopupbtn);
    },
    async clickCheckYourFinalScorePopupbtn(){
        I.waitForClickable(continuePopupbtn, 5);
        I.doubleClick(continuePopupbtn);
        await I.waitForDetached(continuePopupbtn);
    },

    async selectAnswer(Questions){
    let quePresent=0;
    let i=0;
    do{
            let flag=true;
            quePresent=await I.grabNumberOfVisibleElements(questiondiv);
            console.log("quePresent "+ quePresent)
            Questions.forEach(async function(answer,question, Questions) {
//              console.log("Q: "+question);
//              console.log("A: "+ answer);
                if(flag){
                    if(quePresent===1){
                        I.seeElement(questiondiv);
                        let displayQuestion = await I.grabTextFrom(questiondiv);
                        console.log("DQ: "+displayQuestion);
                        console.log("question: "+question);
                        if(question==displayQuestion){
                            console.log("question: match with DQ");
                            console.log(Questions.get(displayQuestion));
                            selectAnswer=Questions.get(displayQuestion);
                            const answerLocator = `//a[contains(text(),'${answer}')]`
                            I.wait(1);
                            I.doubleClick(answerLocator);
                            I.waitForClickable(checkYourFinalScorePopupbtn, 5);
                            I.doubleClick(checkYourFinalScorePopupbtn);
                            await I.waitForNavigation();
                            I.wait(1);
                            flag=false;
                        }
                    i++;
                    }
                }
            });
            quePresent=await I.grabNumberOfVisibleElements(questiondiv);
            console.log("quePresent "+ quePresent)
        }while(quePresent===1 && i<1000);
        if(i>=1000){
            assert.equal('Question is not found in iteration of 1000, please update lib/QuestionsDB', 'true');
        }
    }
}
