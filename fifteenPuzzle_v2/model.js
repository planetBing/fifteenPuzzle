/**
 * 1. randomArray
 * 2. answerArray
 * 3. RegularExpressionOfUserInput
 * 4. Turn (계속 증가하는 수...)
*/

function makeMixedNumbers(n) {
    const numbersAndBlank = [...Array(n).fill().map((v, i) => i + 1), ' '];
    const shuffle = [];
    while (numbersAndBlank.length > 0) {
    const randomIndex = Math.floor(Math.random() * numbersAndBlank.length); // 무작위 인덱스 뽑기
    const spliceArray = numbersAndBlank.splice(randomIndex, 1); // 뽑은 값은 배열에 들어 있음
    const value = spliceArray[0]; // 배열에 들어 있는 값을 꺼내어
    shuffle.push(value); // shuffle 배열에 넣기
  }
   return shuffle;
}


function makeArraytoNestedArray(mixedNumbers, n) {
    const nestedArray= [];
    for(let i = 0; i < mixedNumbers.length; i += n) {
        nestedArray.push(mixedNumbers.slice(i, i+n));
    }
    return nestedArray;
}

function makeRandomArray() {
    const mixedNumbers = makeMixedNumbers(15);
    return makeArraytoNestedArray(mixedNumbers, 4);
}

makeRandomArray();



module.exports = { makeRandomArray };