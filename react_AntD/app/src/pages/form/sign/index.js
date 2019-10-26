import React, { Component } from 'react';
import { Card, Form, Input, Button, Icon, Checkbox, message } from 'antd';


class Sign extends Component {

    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, value) => {
            if (!err) {
                message.success(`${userInfo.username}恭喜你成功登录，你的密码为${userInfo.password}`)
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title='行内登录表单'>
                    <Form layout='inline'>
                        <Form.Item>
                            <Input placeholder='请输入用户名' />
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder='请输入密码' />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary'>登录</Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card title='登录表单'>
                    <Form style={{ width: '300px' }}>
                        <Form.Item>
                            {
                                getFieldDecorator('username', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: 'please enter username'
                                        },
                                        {
                                            min: 5,
                                            max: 12,
                                            message: '用户名字符必须在5到12个字符之间'
                                        },
                                        {
                                            pattern: new RegExp('^\\w + $','g'),
                                            message: '用户名必须为数字或者字母'
                                        }
                                    ]
                                })(<Input prefix={<Icon type='user' />} placeholder='请输入用户名' />)
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '',
                                    rules: [{
                                        required: true,
                                        message: 'please enter password'
                                    }]
                                })(<Input prefix={<Icon type='lock' />} type='password' placeholder='请输入密码' />)
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(<Checkbox>记住密码</Checkbox>)
                            }
                            <a href='#' style={{ float: 'right' }}>忘记密码</a>
                        </Form.Item>
                        <Form>
                            <Form.Item>
                                <Button type='primary' onClick={this.handleSubmit} >登录</Button>
                            </Form.Item>
                        </Form>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(Sign)