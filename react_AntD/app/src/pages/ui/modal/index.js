import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';
import './index.less';

export default class Modals extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: false
        }
    }

    handleOpen = (type) => {
        this.setState({
            [type] : true
        })
    }

    handleConfirm = (type) => {
        Modal[type]({
            title: '确认？',
            content: '你掌握了你学习的内容了吗？',
            onOK(){
                console.log('ok')
            },
            onCancel(){
                console.log('cancel')
            }
        })
    }

    render() {
        return (
            <div>
                <Card title='基础模态框' className='wrapper-card'>
                    <Button type='primary' onClick={() => this.handleOpen('showModal1')}>Open</Button>
                    <Button type='primary' onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type='primary' onClick={() => this.handleOpen('showModal3')}>距离顶部20px</Button>
                    <Button type='primary' onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title='信息确认框' className='wrapper-card'>
                    <Button type='primary' onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type='primary' onClick={() => this.handleConfirm('info')}>Info</Button>
                    <Button type='primary' onClick={() => this.handleConfirm('success')}>Success</Button>
                    <Button type='primary' onClick={() => this.handleConfirm('warning')}>Warning</Button>
                </Card>
                <Modal
                    title='React'
                    visible={this.state.showModal1}
                    onCancel={()=>{
                        this.setState({
                            showModal1: false
                        })
                    }}
                >
                    <p>欢迎来到后台管理系统</p>
                </Modal>
                <Modal
                    title='React'
                    visible={this.state.showModal2}
                    okText='好的'
                    cancelText='算了'
                    onCancel={()=>{
                        this.setState({
                            showModal2: false
                        })
                    }}
                >
                    <p>欢迎来到后台管理系统</p>
                </Modal>
                <Modal
                    title='React'
                    visible={this.state.showModal3}
                    style={{top: '20px'}}
                    onCancel={()=>{
                        this.setState({
                            showModal3: false
                        })
                    }}
                >
                    <p>欢迎来到后台管理系统</p>
                </Modal>
                <Modal
                    title='React'
                    visible={this.state.showModal4}
                    style={{top: '40%'}}
                    onCancel={()=>{
                        this.setState({
                            showModal4: false
                        })
                    }}
                >
                    <p>欢迎来到后台管理系统</p>
                </Modal>
            </div>
        )
    }
}