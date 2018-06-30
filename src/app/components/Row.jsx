import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Cell from './Cell'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`

class Row extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Wrapper>
                {this.props.cells.map((el, index) => {
                    return <Cell key={`cell-${el}-${index}`} value={el} />
                })}
            </Wrapper>
        )
    }
}

Row.propTypes = {
    cells: PropTypes.arrayOf(PropTypes.number).isRequired,
}


export default Row
