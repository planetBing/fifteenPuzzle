const { showMessage, printPuzzleShape } = require('./views.js');
const { makeRandomArray } = require('./model.js');
// const { receiveInput, switchValue, increaseTurn } = require('./controllers.js');
// const { validateInput, verrifyArraysAreSame } = require('./validations.js');


function startGameandMixNumbers() {
    showMessage("재미있는 15 퍼즐!");
    showMessage(`Turn 1`);
    const randomArray = makeRandomArray();
    console.log(randomArray)
    printPuzzleShape(randomArray);
}


function progressGame() {
    receiveInput();
    validateInput();
    switchValue();
    increaseTurn();
}

module.exports = { startGameandMixNumbers, progressGame }
