import React, { Component } from 'react';
import { Col, Row } from 'antd';
import './style/common.less'
import Header from './componnets/Header';

export default class Common extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Header menuType='second' />
                </Row>
                <Row className='content'>
                    {this.props.children}
                </Row>
            </div>
        )
    }
}