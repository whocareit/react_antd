import  React, { Component } from 'react';
import {HashRouter, Link ,Route } from 'react-router-dom';
import About from './About';
import Topic from './Topic';
import Main from './Main';

export default class Home extends Component {
    render(){
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                           <Link to = '/main'>Home</Link> 
                        </li>
                        <li>
                            <Link to = '/abouts'>about</Link>
                        </li>
                        <li>
                            <Link to = '/topic'>topic</Link>
                        </li>
                    </ul>
                    <Route exact path = '/' component={ Main }/>
                    <Route path = '/abouts' component = { About}/>
                    <Route path = '/topic' component = {Topic}/>
                </div>
            </HashRouter>
        )
    }
}