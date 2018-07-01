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
                {this.props.cells.map((el, index) =>
                    <Cell
                        key={`cell-${el}-${index}`}
                        index={(this.props.index * 9) + index}
                        value={el}
                        selected={this.props.selected}
                        onClick={(index) => {this.props.onClick(index)}}
                    />
                )}
            </Wrapper>
        )
    }
}

Row.propTypes = {
    /**
     * The row index, range from 0 to 8
     */
    index: PropTypes.number.isRequired,
    /**
     * The cell data
     */
    cells: PropTypes.arrayOf(PropTypes.number).isRequired,
    /**
     * The selected index
     */
    selected: PropTypes.number.isRequired,
    /**
     * The onClick event handler for the cell
     */
    onClick: PropTypes.func.isRequired,
}


export default Row
