import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.button`
    --color: #4242d7;
    padding: 10px;
    margin: 10px;
    border: 1px solid var(--color);
    border-radius: 5px;
    width: 150px;
    font-size: 1em;
    font-weight: 600;
    user-select: none;
    outline: none;
    color: var(--color);
    background-color: transparent;

    &:hover {
        background-color: var(--color);
        color: #fff;
        cursor: pointer;
    }

    transition: all 0.5s;
`

class Button extends React.PureComponent {
    render() {
        return (
            <Wrapper onClick={this.props.onClick}> {this.props.text} </Wrapper>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Button
