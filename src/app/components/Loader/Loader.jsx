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

const StyledLoader = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    margin: 2rem 0;
`

const Bounce = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #555;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    animation: bounce 2.0s infinite ease-in-out;
    ${(props) => (props.delay ? 'animation-delay: -1.0s;' : '')};

    @keyframes bounce {
        0% {
            transform: scale(0.0);
            background-color: orange;
        }
        20% {
            background-color: blue;
        }
        50% {
            transform: scale(1.0);
            background-color: gold;
        }
        80% {
            background-color: red;
        }
        100% {
            transform: scale(0.0);
            background-color: yellow;
        }
    }

`


class Loader extends React.PureComponent {
    render() {
        return (
            <Wrapper >
                <StyledLoader>
                    <Bounce />
                    <Bounce delay={true}/>
                </StyledLoader>
                <h3>Loading...</h3>
            </Wrapper>
        )
    }
}

export default Loader
