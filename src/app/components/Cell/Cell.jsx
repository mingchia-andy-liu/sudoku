import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    width: calc(35px + 0.8em);
    height: calc(35px + 0.8em);
    font-size: 1.5em;
    user-select: none;

    border-top: ${(props) => (props.top ? '3px solid #444' : '1px solid #444')};
    border-bottom: ${(props) => (props.bottom ? '3px solid #444' : '1px solid #444')};
    border-right: ${(props) => (props.right ? '3px solid #444' : '1px solid #444')};
    border-left: ${(props) => (props.left ? '3px solid #444' : '1px solid #444')};
    background-color: ${(props) => (props.selected ? 'rgba(0, 0, 255, 0.2)' : '#fff' )};
    color: ${(props) => (props.selected ? '#fff' : '')};

    transition: all 0.2s;

    &:hover {
        cursor: pointer;
    }
`

class Cell extends React.PureComponent {
    render() {
        const { selected, index } = this.props
        const isSelected = selected === index
        const row = Math.floor(index / 9)
        const col = index % 9
        return (
            <Wrapper
                top={row % 3 === 0}
                bottom={row === 8}
                left={col === 0}
                right={col % 3 === 2}
                selected={isSelected}
                onClick={() => {this.props.onClick(index)}}
            >
                <span>{this.props.value}</span>
            </Wrapper>
        )
    }
}

Cell.propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    selected: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}

Cell.defaultProps = {
    selected: false,
}

export default Cell
