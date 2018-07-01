/**
 * generate sudoku board
 * @param {number} value
 * @param {number} row
 * @param {number} cell
 */
const generateBoard = (value = -1, row = -1, cell = -1) => {
    return shuffleBoard(value, row, cell)
}

/**
 * shift the argumen array 1 element to the left
 * @param {array} arr array to be shifted
 */
const rotateLeft = (arr) => {
    arr.push(arr.shift())
}

/**
 * swap a and b in the board
 * @param {array} board sudoku board
 * @param {number} a the number to be swapped with b
 * @param {number} b the number to be swapped with a
 */
const swap = (board, a, b) => {
    for(let i = 0; i < 81; i++) {
        if (board[i] === a) {
            board[i] = b
        } else if (board[i] === b) {
            board[i] = a
        }
    }
}

/**
 * Create a sudoku solution and then suffles it.
 * Inspired by http://www.sudokuwiki.org/A_Perfect_Sudoku
 * @param {numbers} value fixed value number
 * @param {numbers} row row index
 * @param {numbers} col column index
 */
const shuffleBoard = function(value, row, col) {
    let board = []
    const base = [1,2,3,4,5,6,7,8,9]
    // create a sudoku solution.
    // 1,2,3,4,5,6,7,8,9,
    // 4,5,6,7,8,9,1,2,3,
    // 7,8,9,1,2,3,4,5,6,
    // 2,3,4,5,6,7,8,9,1,
    // 5,6,7,8,9,1,2,3,4,
    // 8,9,1,2,3,4,5,6,7,
    // 3,4,5,6,7,8,9,1,2,
    // 6,7,8,9,1,2,3,4,5,
    // 9,1,2,3,4,5,6,7,8
    for (let i = 0; i < 9; i++) {
        board = [...board, ...base]
        rotateLeft(base)
        rotateLeft(base)
        rotateLeft(base)
        if (i % 3 === 2) {
            rotateLeft(base)
        }
    }

    if (value !== -1) {
        // fixed cell is @ row and col
        const temp = board[(row * 9) + col]
        // if the selected is not at the correct position, swap it
        if (temp !== value) {
            // swap value with temp
            swap(board, value, temp)
        }
    }

    //  pick two numbers a and b at random and shuffle them.
    for(let i = 0; i < 100; i++) {
        let a = Math.floor(Math.random() * 9) + 1
        let b = Math.floor(Math.random() * 9) + 1
        while (a === value) {
            a = ((a + 1) % 9) + 1
        }

        while(a === b || b === value) {
            b = Math.floor(Math.random() * 9) + 1
        }

        swap(board, a, b)
    }
    return board
}



module.exports = generateBoard
