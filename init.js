/**
 * 1. 출력
 *  -게임타이틀, 현재 턴(1부터 시작), 1-8까지 숫자 무작위로 한 줄 출력
 *  -마지막 줄에 '교환할 두 숫자를 입력'이라는 프롬프트 출력
 * 2. 입력
 *  -정상적인 입력인지 확인 -> 정상이 아니면 다시 입력 받기
 * 3. 동작
 *  -정상입력이면 턴 증가시켜 출력
 *  -주어진 숫자열에서 입력받은 두 수 교환해서 출력
 *  -모든 수가 오름차순 정렬되면 축하메시지와 함께 프로그램 종료.
 */

const readlineSync = require('readline-sync');
// const readline = require("readline");
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });


function init() {
    greetforStartingGame();
    console.log("Turn 1");
    const randomArray = makeRandomNumArray();
    console.log(randomArray);
    const answerArray = makeAnswerArray(randomArray);
    progressGame(randomArray);
}

function greetforStartingGame() {
    console.log("간단 숫자 퍼즐");
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


function progressGame(randomArray) {
        const currentInput = readlineSync.question("교환할 두 숫자를 입력 (예: 1,2)");
        if (checkInputMatchesRegularExpression(currentInput)) {
            const [firstValue, secondValue] = currentInput.split(',').map(e => Number(e));
            if (!(randomArray.includes(firstValue) && randomArray.includes(secondValue))) {
                console.log("잘못 입력하셨습니다. 다시 입력해주세요.");
            } else {
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







init();

