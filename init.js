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

function init() {
    greetforStartingGame();
    console.log("Turn 1");
    const randomArray = makeRandomNumArray();
    console.log(randomArray);
}

function greetforStartingGame() {
    console.log("간단 숫자 퍼즐");
}

function makeRandomNumArray() {
    let randomNumArray = [];
    while(randomNumArray.length < 8) {
        const randomNum = Math.floor(Math.random() * 8) + 1;
        if(!(randomNumArray.includes(randomNum))) {
        randomNumArray.push(randomNum);
        }
    }
    return randomNumArray;
}




init();

