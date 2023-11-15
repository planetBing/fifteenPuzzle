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


module.exports = { greetforStartingGame, makeRandomNumArray, makeAnswerArray };