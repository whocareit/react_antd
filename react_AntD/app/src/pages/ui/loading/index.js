import React, { Component } from 'react';
import { Card, Spin, Icon, Alert } from 'antd';
import './index.less';

export default class Loadings extends Component {
    render() {
        const icon = <Icon size='large' type='loading' />
        return (
            <div>
                <Card title='Spin使用' className='wrapper'>
                    <Spin size='small' />
                    <Spin size='default' style={{ margin: '0 15px' }} />
                    <Spin size='large' />
                    <Spin indicator={icon} style={{ marginLeft: '15px' }} />
                </Card>
                <Card title='内容遮罩' className='wrapper'>
                    <Alert
                        message='憨憨'
                        description='欢迎憨憨的来到，这是属于你的世界'
                        type='info'
                    />
                    <Spin tip='加载中'>
                        <Alert
                            message='憨憨'
                            description='欢迎憨憨的来到，这是属于你的世界'
                            type='success'
                        />
                    </Spin>
                    <Spin tip='加载中' indicator={icon}>
                        <Alert
                            message='憨憨'
                            description='欢迎憨憨的来到，这是属于你的世界'
                            type='warning'
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}