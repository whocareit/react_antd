import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Info from './Info'
import About from '../route1/About';
import Topic from '../route1/Topic';
import NoMatch from '../noMatch/NoMatch';
import Main from './Main';
import Home from './Home'

export default class IRouter extends Component {
    render() {
        return (
            <Router>
                <Home>
                    <Switch>
                        <Route path='/main' render={() =>
                            <Main>
                                <Route path='/main/:mainId' component={Info} />
                            </Main>
                        } />
                        <Route path='/abouts' component={About} />
                        <Route path='/topic' component={Topic} />
                        <Route component={NoMatch} />
                    </Switch>
                </Home>
            </Router>
        )
    }
}