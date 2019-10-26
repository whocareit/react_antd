import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from '../route1/About';
import Topic from '../route1/Topic';
import Main from '../route1/Main';
import Home from './Home'

export default class IRouter extends Component {
    render() {
        return (
            <Router>
                <Home>
                    <Route path='/main' render={() => 
                        <Main>
                            <Route path = '/main/a' component = {About} />
                        </Main>
                    } />
                    <Route path='/abouts' component={About} />
                    <Route path='/topic' component={Topic} />
                </Home>
            </Router>
        )
    }
}