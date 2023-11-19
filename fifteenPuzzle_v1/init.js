const readlineSync = require('readline-sync');
const { greetforStartingGame, makeRandomNumArray, makeAnswerArray } = require("./makeRandomArrayAndAnswer.js");
const { receiveInput } = require("./progressGame.js");

function init() {
    greetforStartingGame();
    console.log(`Turn 1`);
    const randomArray = makeRandomNumArray();
    console.log(randomArray);
    const answerArray = makeAnswerArray(randomArray);
    receiveInput(randomArray, answerArray);
}




init();

