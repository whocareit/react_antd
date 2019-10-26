import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/main'>Home</Link>
                    </li>
                    <li>
                        <Link to='/abouts'>about</Link>
                    </li>
                    <li>
                        <Link to='/topic'>topic</Link>
                    </li>
                    <li>
                        <Link to='/min'>min</Link>
                    </li>
                    <li>
                        <Link to='/domino'>domino</Link>
                    </li>
                </ul>
                <hr />
                {this.props.children}
            </div>
        )
    }
}