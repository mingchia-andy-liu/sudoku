import React from 'react'
import styled from 'styled-components'

import Button from '../../components/Button'
import Board from '../../components/Board'
import Loader from '../../components/Loader'


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
    render() {
        return (
            <Wrapper>
                <Header>Sudoku Home Page</Header>
                <Button text={'Refresh'}/>
                <Loader />
                <Board data={[1,1,1]}/>
            </Wrapper>
        )
    }
}

export default Home
