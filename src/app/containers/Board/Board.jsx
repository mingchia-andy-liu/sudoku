import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as actions from './actions'

import Row from '../../components/Row'
import { Shadow } from '../../styles'

const Wrapper = styled.div`
    ${Shadow}
    margin: 10px;
    border: 1px solid #444;
`
class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    onCellClick(index) {
        const { selected } = this.props
        if (index === selected) {
            this.props.unselectCell()
        } else {
            this.props.selectCell(index)
        }
    }

    render() {
        return (
            <Wrapper>
                {[...Array(9)].map((x, i) =>
                    <Row
                        key={i}
                        index={i}
                        selected={this.props.selected}
                        cells={this.props.data.slice(i * 9, (i* 9) + 9)}
                        onClick={(index) => {this.onCellClick(index)}}
                    />
                )}
            </Wrapper>
        )
    }
}

Board.propTypes = {
    selected: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
    selectCell: PropTypes.func.isRequired,
    unselectCell: PropTypes.func.isRequired,
}

const mapStateToProps = ({ board: { selected } }) => ({
    selected,
})


export default connect(mapStateToProps, actions)(Board)
