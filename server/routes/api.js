const express = require('express')
const router  = express.Router()

const generateBoard = require('./helper').generateBoard

router.get(
    '/board/fixed',
    (req, res) => {
        let { value, row, col } = req.query
        value *= 1
        row *= 1
        col *= 1
        if (row > 8 || row < 0 || col > 8 || col < 0 || value < 1 || value > 9) {
            res.sendStatus(400)
        } else {
            res.send(generateBoard(value, row, col))
        }
    }
)


router.get(
    '/board',
    (req, res) => {
        res.send(generateBoard())
    }
)


module.exports = router
