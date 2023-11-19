/**
 * 1. validateInput : 입력값이 정규 표현식에 맞는지 확인하고 불리언으로 리턴하는 함수.
 * 2. verrifyArraysAreSame : 정답배열과 사용자가 바꾼 배열이 같은지 불리언으로 리턴하는 함수
 */

function validateInput(currentInput) {
    const regularExpression = /^\d+$/;
    if (
        currentInput.match(regularExpression) &&
        Number(currentInput) >= 1 &&
        Number(currentInput) <= 15
    ) {
        console.log("마ㅣㅈ음");
    } else {
        console.log("틀림!");
    }
}

module.exports = { validateInput };
