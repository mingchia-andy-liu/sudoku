import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const StyledLoader = styled.img`
    width: 100px;
    height: 100px;
    animation: spin 3s infinite linear;
    border: 2px solid #f1f1f1;
    margin-top: 50px;

    @keyframes spin{
        0%{
            transform:rotate(0deg)
        }
        to{
            transform:rotate(1turn)
        }
    }

    @-webkit-keyframes spin{
        0%{
            -webkit-transform:rotate(0deg)
        }
        to{
            -webkit-transform:rotate(1turn)
        }
    }
`


class Loader extends React.PureComponent {
    render() {
        return (
            <Wrapper >
                <StyledLoader />
                <h5>Loading...</h5>
            </Wrapper>
        )
    }
}

export default Loader
