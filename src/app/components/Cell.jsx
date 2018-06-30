import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: ${(props) => (props.selected ? 'green' : 'blue') };
`

class Cell extends React.PureComponent {
    render() {
        return (
            <Wrapper>
                {this.props.value}
            </Wrapper>
        )
    }
}

Cell.propTypes = {
    value: PropTypes.number.isRequired,
    selected: PropTypes.bool,
}

Cell.defaultProps = {
    selected: false,
}

export default Cell
