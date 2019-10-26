import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Mian extends Component {
    render() {
        return (
            <div>
                <li>
                    <Link to='/main/123'>main1</Link>
                </li>
                <li>
                    <Link to='/main/id'>main2</Link>
                </li>
                {this.props.children}
            </div>
        )
    }
}