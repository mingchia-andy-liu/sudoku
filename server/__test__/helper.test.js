
const chai = require('chai')
const assert = chai.assert
const expect = chai.expect

const helper = require('../routes/helper')

describe('API helper getRandInt Test', () => {
    it('generate rand int 0', (done) => {
        expect(helper.getRandInt(0)).to.equal(0)
        done()
    })

    it('generate rand int 10', (done) => {
        const max = 10
        const rand = helper.getRandInt(max)
        assert.isBelow(rand, max);
        assert.isAbove(rand, -1)
        done()
    })
})

describe('API helper rotateLeft Test', () => {
    it('rotate empty array', (done) => {
        const arr = []
        helper.rotateLeft(arr)
        expect(arr.length).to.equal(0)
        done()
    })

    it('rotate array of length 1', (done) => {
        const arr = [0]
        helper.rotateLeft(arr)
        expect(arr.length).to.equal(1)
        done()
    })

    it('rotate array of length 3', (done) => {
        const arr = [0,1,2]
        helper.rotateLeft(arr)
        expect(arr).deep.equal([1,2,0])
        done()
    })

    it('rotate array of length 3, twice', (done) => {
        const arr = [0,1,2]
        helper.rotateLeft(arr)
        helper.rotateLeft(arr)
        expect(arr).deep.equal([2,0,1])
        done()
    })

    it('rotate array of length 3, three times', (done) => {
        const arr = [0,1,2]
        helper.rotateLeft(arr)
        helper.rotateLeft(arr)
        helper.rotateLeft(arr)
        expect(arr).deep.equal([0,1,2])
        done()
    })
})


describe('The generated board is valid', () => {
    it('the board is valid', (done) => {
        const board = helper.generateBoard()
        assert.isTrue(helper.isBoardValid(board))
        done()
    })
})
