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



function init() {
    greetforStartingGame();
    console.log("Turn 1");
    const randomArray = makeRandomNumArray();
    console.log(randomArray);
    const answerArray = makeAnswerArray(randomArray);
    progressGame(randomArray, answerArray);
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
    const randNumArray = [...randomArray];
    return randNumArray.sort();
}


function progressGame(randomArray, answerArray) {
    console.log(answerArray)
    while(randomArray !== answerArray) {
        const currentInput = readlineSync.question("교환할 두 숫자를 입력");
        const currentInputArray = currentInput.split(',');
        const firstValue = Number(currentInputArray[0]);
        const secondValue = Number(currentInputArray[1]);
        if (!(randomArray.includes(firstValue) && randomArray.includes(secondValue))) {
            console.log("잘못 입력하셨습니다. 다시 입력해주세요.");
        } else if (!(currentInput.includes(','))) {
            console.log("잘못 입력하셨습니다. 다시 입력해주세요.")
        } else {
            switchValues(randomArray, firstValue, secondValue);
            console.log(randomArray);
        }
    }
    console.log("축하");
}

function switchValues(arr, firstValue, secondValue) {
    const index1 = arr.indexOf(firstValue);
    const index2 = arr.indexOf(secondValue);
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}


// init();


function trueOrfalse() {
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
    const arr2 = makeRandomNumArray().sort();
    if(arr1 === arr2) {
        console.log("same")
    } else {
        console.log("not same")
    }
}

trueOrfalse();