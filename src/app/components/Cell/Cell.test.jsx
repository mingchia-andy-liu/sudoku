import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import Cell from './Cell'

const noop = () => {}

describe('Cell component', () => {
    it('Renders 1 <Cell /> component', () => {
        const wrapper = shallow(<Cell index={0} selected={0} value={1} onClick={noop}/>)
        expect(wrapper).toHaveLength(1)
    })

    it('Renders props correcrly', () => {
        const wrapper = shallow(<Cell index={0} selected={0} value={1} onClick={noop}/>)
        expect(wrapper.instance().props.index).toEqual(0)
        expect(wrapper.instance().props.selected).toEqual(0)
        expect(wrapper.instance().props.value).toEqual(1)
        expect(wrapper.find('span').text()).toEqual("1")
    })

    it('Renders selected correcrly', () => {
        const tree = renderer.create(<Cell index={0} selected={0} value={1} onClick={noop}/>).toJSON()
        expect(tree).toHaveStyleRule('color', '#fff')
        expect(tree).toHaveStyleRule('background-color', 'rgba(0,0,255,0.2)')
    })

    it('Renders unselected correcrly', () => {
        const tree = renderer.create(<Cell index={0} selected={-1} value={1} onClick={noop}/>).toJSON()
        expect(tree).toHaveStyleRule('background-color', '#fff')
    })

    it('Test click event', () => {
        const mockCallBack = jest.fn()

        const wrapper = shallow((<Cell index={0} selected={0} value={1} onClick={mockCallBack} />))
        wrapper.simulate('click')
        expect(mockCallBack.mock.calls.length).toEqual(1)
    })
})

