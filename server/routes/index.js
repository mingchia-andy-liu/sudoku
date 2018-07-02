module.exports = (app) => {
    app.use('/sudoku', require('./api'))
}
