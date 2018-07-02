//node module dependency
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const logger = require('morgan')

const server = require('http').Server(app)
const PORT = process.env.PORT || 8080

// Only logs error
app.use(logger('common', {
    skip: function (req, res) { return res.statusCode < 400 }
}))

// Bring in these middlewares after assets
app.use(bodyParser.json())
// routes setup
require('./routes')(app)

server.listen(PORT, (err) => {
    if (err) {
        return console.error(err) // eslint-disable-line
    }
    if (process.env.NODE_ENV === 'development') {
        console.log(`[ OK ] App is listening on port: ${PORT} 👂\nhttp://localhost:${PORT}`) // eslint-disable-line
    }
})
