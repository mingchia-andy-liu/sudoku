import React from 'react'
import { Switch, Route, Redirect, withRouter  } from 'react-router-dom'
import styled from 'styled-components'
import Home from '../Home'

const AppBase = styled.div`
    background: red;
`

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <AppBase>
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Redirect path="*" to="/" />
                </Switch>
            </AppBase>
        )
    }
}


export default withRouter(App)
