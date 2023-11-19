const readlineSync = require('readline-sync');
const { checkInputMatchesRegularExpression, checkRandomArrayincludesValues} = require("./validateInput.js");


function receiveInput(randomArray, answerArray) {
    while(!verifyArraysAreSame(randomArray, answerArray)) {
        const currentInput = readlineSync.question("교환할 두 숫자를 입력 (예: 1,2)");
        verifyInputAndSwitchArray(randomArray, currentInput);
    }
    console.log(`축하합니다. ${turn}턴만에 퍼즐을 완성하셨습니다!`)
}

function verifyInputAndSwitchArray(randomArray, currentInput) {
    if (checkInputMatchesRegularExpression(currentInput)) {
        const [firstValue, secondValue] = currentInput.split(',').map(e => Number(e));
        if (!checkRandomArrayincludesValues(randomArray, firstValue, secondValue)) {
            console.log("잘못 입력하셨습니다. 다시 입력해주세요.");
        } else {
            increaseTurn();
            switchValues(randomArray, firstValue, secondValue);
            console.log(randomArray);
        }
    } else {
        console.log("잘못 입력하셨습니다. 다시 입력해 주세요");
    }
}

let turn = 1;
function increaseTurn() {
    turn++
    console.log(`Turn ${turn}`)
}


function switchValues(arr, firstValue, secondValue) {
    const index1 = arr.indexOf(firstValue);
    const index2 = arr.indexOf(secondValue);
    return [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function verifyArraysAreSame(randomArray, answerArray) {
    return randomArray.every((value, index) => value === answerArray[index]);
}



module.exports = { receiveInput };