import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Row from './Row'
import { Shadow } from '../styles'

const Wrapper = styled.div`
    ${Shadow}
    margin: 20px;
`
class Board extends React.Component {
    render() {
        return (
            <Wrapper>
                {[...Array(9)].map((x, i) =>
                    <Row key={i} cells={[1,2,3,4,5,6,7,8,9]} />
                )}
            </Wrapper>
        )
    }
}

Board.propTypes = {
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default Board
