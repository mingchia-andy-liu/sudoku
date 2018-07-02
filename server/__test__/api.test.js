const request = require('supertest')
const express = require('express')
const chai = require('chai')

const isBoardValid = require('../routes/helper').isBoardValid

const assert = chai.assert
const expect = chai.expect

const app = express()
require('../routes')(app)

describe('/sudoku/board API Tests', () => {
    it('returns a 200 status code', (done) => {
        request(app)
            .get('/sudoku/board')
            .expect(200)
            .end(done)
    })

    it('returns a JSON', (done) => {
        request(app)
            .get('/sudoku/board')
            .expect('Content-Type', /json/)
            .end(done)
    })

    it('returns length is 163', (done) => {
        request(app)
            .get('/sudoku/board')
            .expect('Content-Length', '163')
            .end(done)
    })

    it('returns an array', (done) => {
        request(app)
            .get('/sudoku/board')
            .expect((res) => {
                assert.isArray(res.body)
            })
            .end(done)
    })

    it('returns an array with valid sudoku board', (done) => {
        request(app)
            .get('/sudoku/board')
            .expect((res) => {
                assert.isArray(res.body)
                assert.isTrue(isBoardValid(res.body))
            })
            .end(done)
    })
})

describe('/sudoku/board/fixed API Tests', () => {
    it('returns a 200 status code', (done) => {
        request(app)
            .get('/sudoku/board/fixed?value=1&row=0&col=0')
            .expect(200)
            .end(done)
    })

    it('returns a 400 status code with invalid "value" query string',(done) => {
        request(app)
            .get('/sudoku/board/fixed?value=0&row=0&col=0')
            .expect(400)
            .end(done)
    })

    it('returns a 400 status code with invalid "value" query string',(done) => {
        request(app)
            .get('/sudoku/board/fixed?value=-1&row=0&col=0')
            .expect(400)
            .end(done)
    })

    it('returns a 400 status code with invalid "row" query string',(done) => {
        request(app)
            .get('/sudoku/board/fixed?value=1&row=10&col=0')
            .expect(400)
            .end(done)
    })

    it('returns a 400 status code with invalid "row" query string',(done) => {
        request(app)
            .get('/sudoku/board/fixed?value=1&row=-1&col=0')
            .expect(400)
            .end(done)
    })


    it('returns a 400 status code with invalid "col" query string',(done) => {
        request(app)
            .get('/sudoku/board/fixed?value=1&row=0&col=10')
            .expect(400)
            .end(done)
    })

    it('returns a 400 status code with invalid "col" query string',(done) => {
        request(app)
            .get('/sudoku/board/fixed?value=1&row=0&col=-1')
            .expect(400)
            .end(done)
    })

    it('returns a JSON', (done) => {
        request(app)
            .get('/sudoku/board/fixed?value=1&row=0&col=0')
            .expect('Content-Type', /json/)
            .end(done)
    })

    it('returns length is 163', (done) => {
        request(app)
            .get('/sudoku/board/fixed?value=1&row=0&col=0')
            .expect('Content-Length', '163')
            .end(done)
    })

    it('returns an array', (done) => {
        request(app)
            .get('/sudoku/board/fixed?value=1&row=0&col=0')
            .expect((res) => {
                assert.isArray(res.body)
            })
            .end(done)
    })

    describe('With fixed cells values matches the query string', () => {
        it('[0] === 1', (done) => {
            request(app)
                .get('/sudoku/board/fixed?value=1&row=0&col=0')
                .expect((res) => {
                    assert.isArray(res.body)
                    expect(res.body[0]).to.equal(1)
                })
                .end(done)
        })

        it('[9] === 1', (done) => {
            request(app)
                .get('/sudoku/board/fixed?value=1&row=1&col=0')
                .expect((res) => {
                    assert.isArray(res.body)
                    expect(res.body[9]).to.equal(1)
                })
                .end(done)
        })

        it('[8] === 1', (done) => {
            request(app)
                .get('/sudoku/board/fixed?value=1&row=0&col=8')
                .expect((res) => {
                    assert.isArray(res.body)
                    expect(res.body[8]).to.equal(1)
                })
                .end(done)
        })

        it('[80] === 1', (done) => {
            request(app)
                .get('/sudoku/board/fixed?value=1&row=8&col=8')
                .expect((res) => {
                    assert.isArray(res.body)
                    expect(res.body[80]).to.equal(1)
                })
                .end(done)
        })
    })

    it('returns an array with valid sudoku board', (done) => {
        request(app)
            .get('/sudoku/board/fixed?value=1&row=8&col=8')
            .expect((res) => {
                assert.isArray(res.body)
                assert.isTrue(isBoardValid(res.body))
            })
            .end(done)
    })
})
