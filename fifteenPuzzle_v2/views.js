function showMessage(message) {
    console.log(message)
}

function putNuminBoxes(num) {
    return num < 10 ? `[ ${num}]` : `[${num}]`
}


function printPuzzleRow(puzzleRow) {
    puzzleRow.forEach((e) => {
        process.stdout.write(putNuminBoxes(e));
      }
    );
}


function printPuzzleShape(puzzle) {
    puzzle.forEach((puzzleRow) => {
        printPuzzleRow(puzzleRow)
        process.stdout.write('\n');
    })
}




module.exports = { showMessage, printPuzzleShape };