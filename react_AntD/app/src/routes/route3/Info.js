import React, { Component } from 'react';

export default class Info extends Component {
    render(){
        return (
            <div>
                this Info page route params is : {this.props.match.params.mainId}
            </div>
        )
    }
}