import React, { Component } from 'react';
import { Card , Button , notification} from 'antd';
import './index.less';

export default class Notifications extends Component{

    openNotification = (type,direction) => {
        if(direction){
            notification.config({
                placement: direction
            })
        }
        notification[type]({
            message: '生活费到了',
            description: '月生活费想要很多，但是实际够吃'
        })
    }

    render(){
        return (
            <div>
                <Card title='消息通知框' className='wrapper'>
                    <Button type='primary' onClick={() => this.openNotification('success')}>Success</Button>
                    <Button type='primary' onClick={() => this.openNotification('info')}>Info</Button>
                    <Button type='primary' onClick={() => this.openNotification('warning')}>Warning</Button>
                    <Button type='primary' onClick={() => this.openNotification('error')}>Error</Button>
                </Card>
                <Card title='控制方向消息通知框' className='wrapper'>
                    <Button type='primary' onClick={() => this.openNotification('success','topLeft')}>Success</Button>
                    <Button type='primary' onClick={() => this.openNotification('info','topRight')}>Info</Button>
                    <Button type='primary' onClick={() => this.openNotification('warning','bottomLeft')}>Warning</Button>
                    <Button type='primary' onClick={() => this.openNotification('error','bottomRight')}>Error</Button>
                </Card>
            </div>
        )
    }
}