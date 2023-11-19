/**
 * 1. receiveInput
 * 2. switchValue
 * 3. increaseTurn
 */

const readlineSync = require("readline-sync");

function receiveInput() {
    return readlineSync.question("숫자 입력");
}

module.exports = { receiveInput };
