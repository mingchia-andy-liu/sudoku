const PUBLIC_DIR = `${__dirname}/../public`
//node module dependency
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const logger = require('morgan')

const server = require('http').Server(app)
const PORT = process.env.PORT || 8080

app.use(logger('common'))

// Static Assets
// ---
const sendFile = (rootDir, relPath, response) => {
    response.sendFile(relPath, { root: rootDir })
}
app.get('/:filename(main.js)', (request, response) => {
    sendFile(PUBLIC_DIR, request.url, response)
})

// app.get(['/assets/:filename', '/assets/*/:filename'], (request, response) => {
//     sendFile(PUBLIC_DIR, request.url, response)
// })

// Bring in these middlewares after assets
app.use(bodyParser.json())
// routes setup
require('./routes')(app)

app.get('*', (request, response) => {
    sendFile(PUBLIC_DIR, 'index.html', response)
})


server.listen(PORT, (err) => {
    if (err) {
        return console.error(err)
    }
    console.log(`[ OK ] App is listening on port: ${PORT} 👂`)
    console.log(`http://localhost:${PORT}`)
})
