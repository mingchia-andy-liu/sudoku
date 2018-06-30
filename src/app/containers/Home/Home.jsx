import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from '../../components/Button'
import Board from '../../components/Board'
import Loader from '../../components/Loader'

import * as actions from './actions'


const Header = styled.h1`
    text-align: center;
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

    render() {
        const { isLoading, data } = this.props
        return (
            <Wrapper>
                <Header>Sudoku Home Page</Header>
                <Button onClick={this.props.fetchBoard} text={'Refresh'}/>
                {isLoading ? <Loader /> : <Board data={data}/>}
            </Wrapper>
        )
    }
}

Home.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.number).isRequired,
    fetchBoard: PropTypes.func.isRequired,
}

const mapStateToProps = ({ home: { isLoading, data } }) => ({
    isLoading: isLoading,
    data: data,
})

export default connect(mapStateToProps, actions)(Home)
