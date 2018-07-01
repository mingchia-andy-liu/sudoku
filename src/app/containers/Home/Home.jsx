import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Board from '../Board/Board'
import Button from '../../components/Button'
import Loader from '../../components/Loader'

import * as actions from './actions'


const Header = styled.h1`
    text-align: center;
    margin: 10px;
`

const Message = styled.span`
    padding: 15px;
    color: #D8000C;
    border-radius: 5px;
    border: 1px solid #D8000C;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
`

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBoard()
    }

    onRefreshClick() {
        const { selected, data } = this.props
        if (selected === -1) {
            this.props.fetchBoard()
        } else {
            this.props.fetchFixedBoard(data[selected], Math.floor(selected / 9), selected % 9)
        }
    }

    render() {
        const { isLoading, hasError, data } = this.props
        return (
            <Wrapper>
                <Header>Sudoku Home Page</Header>
                <Button onClick={() => this.onRefreshClick()} text={'Refresh'}/>
                {hasError && <Message>Oops! Something went wrong.</Message>}
                {isLoading ? <Loader /> : <Board data={data}/>}
            </Wrapper>
        )
    }
}

Home.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    hasError:  PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
    selected: PropTypes.number.isRequired,
    fetchBoard: PropTypes.func.isRequired,
    fetchFixedBoard: PropTypes.func.isRequired,
}

const mapStateToProps = ({ home: { isLoading, hasError, data }, board : { selected }}) => ({
    isLoading,
    hasError,
    data,
    selected,
})

export default connect(mapStateToProps, actions)(Home)
