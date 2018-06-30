const express = require('express')
const router  = express.Router()

const generateBoard = require('./helper')

router.get(
    '/board/fixed',
    (req, res) => {
        res.send({hello: 'fixed'})
    }
)


router.get(
    '/board',
    (req, res) => {
        res.send({data: generateBoard()})
    }
)


module.exports = router
