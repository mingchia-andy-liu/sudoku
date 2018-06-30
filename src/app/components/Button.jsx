import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.button`
    padding: 10px;
    border-radius: 5px;
    background: #F1F1F1;
    width: 150px;
    font-size: 1em;
    user-select: none;
    outline: none;

    &:hover {
        background: #AAA;
        cursor: pointer;
    }
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
