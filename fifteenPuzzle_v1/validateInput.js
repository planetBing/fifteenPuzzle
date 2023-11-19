function checkInputMatchesRegularExpression(currentInput) {
    const pattern = /^[1-8]\,\s?[1-8]/;
    return currentInput.match(pattern);
}

function checkRandomArrayincludesValues(randomArray, firstValue, secondValue) {
    return randomArray.includes(firstValue) && randomArray.includes(secondValue)
}

module.exports = { checkInputMatchesRegularExpression, checkRandomArrayincludesValues }