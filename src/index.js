const PUBLIC_DIR = `${__dirname}/public`
//node module dependency
const express = require('express')
const app = express()
const logger = require('morgan')

const server = require('http').Server(app)
const PORT = process.env.PORT || 8080

// Only logs error
app.use(logger('common', {
    skip: function (req, res) { return res.statusCode < 400 },
}))

// Static Assets
// ---
const sendFile = (rootDir, relPath, response) => {
    response.sendFile(relPath, { root: rootDir })
}
app.get('/:filename(main.js|index.html)', (request, response) => {
    sendFile(PUBLIC_DIR, request.url, response)
})

app.get(['/assets/:filename'], (request, response) => {
    sendFile(PUBLIC_DIR, request.url, response)
})

app.get('*', (request, response) => {
    sendFile(PUBLIC_DIR, 'index.html', response)
})


server.listen(PORT, (err) => {
    if (err) {
        return console.error(err) // eslint-disable-line
    }
    if (process.env.NODE_ENV === 'development') {
        console.log(`[ OK ] App is listening on port: ${PORT} 👂\nhttp://localhost:${PORT}`) // eslint-disable-line
    }
})
