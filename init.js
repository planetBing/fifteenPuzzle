const readlineSync = require('readline-sync');


function init() {
    greetforStartingGame();
    console.log(`Turn ${turn}`);
    const randomArray = makeRandomNumArray();
    console.log(randomArray);
    const answerArray = makeAnswerArray(randomArray);
    receiveInput(randomArray, answerArray);
}

function greetforStartingGame() {
    console.log("간단 숫자 퍼즐");
}

let turn = 1;
function increaseTurn() {
    turn++
    console.log(`Turn ${turn}`)
}

function makeRandomNumArray() {
    let randomNumArray = [];
    while (randomNumArray.length < 8) {
        const randomNum = Math.floor(Math.random() * 8) + 1;
        if (!(randomNumArray.includes(randomNum))) {
            randomNumArray.push(randomNum);
        }
    }
    return randomNumArray;
}


function makeAnswerArray(randomArray) {
    const sortedArray = [...randomArray].sort((a, b) => a - b);
    return sortedArray;
}


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
        if (!(randomArray.includes(firstValue) && randomArray.includes(secondValue))) {
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


function checkInputMatchesRegularExpression(currentInput) {
    const pattern = /^[1-8]\,\s?[1-8]/;
    return currentInput.match(pattern);
}



function switchValues(arr, firstValue, secondValue) {
    const index1 = arr.indexOf(firstValue);
    const index2 = arr.indexOf(secondValue);
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function verifyArraysAreSame(randomArray, answerArray) {
    return randomArray.every((value, index) => value === answerArray[index]);
}






init();

