const generateBoard = () => {
    return shuffleBoard()
}

// rotate one right
const rotateLeft = (arr) => {
    arr.push(arr.shift())
}

// inspired by http://www.sudokuwiki.org/A_Perfect_Sudoku
// create a sudoku solution and then suffles it.
const shuffleBoard = function() {
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

    //  pick two numbers n1 and n2 at random and shuffle them.
    for(let i = 0; i < 100; i++) {
        const n1 = Math.floor(Math.random() * 9) + 1
        let n2 = Math.floor(Math.random() * 9) + 1
        while(n1 === n2) {
            n2 = Math.floor(Math.random() * 9) + 1
        }

        for(let i = 0; i < 81; i++) {
            if (board[i] === n1) {
                board[i] = n2
            } else if (board[i] === n2) {
                board[i] = n1
            }
        }
    }
    return board
}


module.exports = generateBoard
