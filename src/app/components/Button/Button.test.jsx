import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

const noop = () => {}

describe('Button component', () => {
    const wrapper = shallow(<Button text="My Button" onClick={noop}/>)
    it('Renders 1 <Button /> component', () => {
        expect(wrapper).toHaveLength(1)
    })
    it('Renders props correcrly', () => {
        expect(wrapper.instance().props.text).toEqual('My Button')
    })
})

