import React , { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
    render(){
        return (
            <div>
                <li>
                    <Link to = '/main/a'>this is son route</Link>
                </li>
                {this.props.children}
            </div>
        )
    }
}