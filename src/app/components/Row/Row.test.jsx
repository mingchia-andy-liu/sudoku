import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Row from './Row'

const noop = () => {}
const cells = [...Array(9).fill(0)]

describe('Row component', () => {
    it('Renders 1 <Row /> component', () => {
        const wrapper = shallow(<Row index={0} selected={0} cells={[]} onClick={noop}/>)
        expect(wrapper).toHaveLength(1)
    })

    it('Renders props correcrly', () => {
        const wrapper = shallow(<Row index={0} selected={0} cells={[]} onClick={noop}/>)
        expect(wrapper.instance().props.index).toEqual(0)
        expect(wrapper.instance().props.selected).toEqual(0)
        expect(wrapper.instance().props.cells).toEqual([])
    })

    it('Renders 9 <Cell /> children', () => {
        const wrapper = shallow(<Row index={0} selected={0} cells={cells} onClick={noop}/>)
        expect(wrapper.children()).toHaveLength(cells.length)
        expect(wrapper.instance().props.cells).toEqual(cells)
    })
})

