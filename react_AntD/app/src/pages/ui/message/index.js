import React, { Component } from 'react';
import { Card, Button, message } from 'antd';
import './index.less';

export default class Messages extends Component{

    showMessage = (type) => {
        message[type]('恭喜你，你真的长得很帅，被你迷倒了')
    }

    render(){
        return (
            <div>
                <Card title='全局提示框' className='wrapper'>
                    <Button type='primary' onClick={() => this.showMessage('success')}>Success</Button>
                    <Button type='primary' onClick={() => this.showMessage('info')}>Info</Button>
                    <Button type='primary' onClick={() => this.showMessage('warning')}>Warning</Button>
                    <Button type='primary' onClick={() => this.showMessage('error')}>Error</Button>
                </Card>
            </div>
        )
    }
}