import React, { Component } from 'react';
import { Card, Form, Icon, Input, Radio, InputNumber, Select, Switch, DatePicker, TimePicker, Upload ,Checkbox, Button , message} from 'antd';
const { Option } = Select;
const { TextArea } = Input;

class Registers extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, value) => {
            if (!err) {
                message.success(`${userInfo.username}恭喜你成功登录，你的密码为${userInfo.password}`)
            }
        })
    }

    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
            }
        }
        return (
            <div>
                <Card title='用户注册表单'>
                    <Form>
                        <Form.Item label='用户名' {...formItemLayout}>
                            {
                                getFieldDecorator('username', {
                                    initialValue: '',
                                    rules: [{
                                        required: true
                                    }]
                                })(<Input prefix={<Icon type='user' />} placeholder='请输入用户名' />)
                            }
                        </Form.Item>
                        <Form.Item label='密码' {...formItemLayout}>
                            {
                                getFieldDecorator('password', {
                                    initialValue: '',
                                    rules: [{
                                        required: true
                                    }]
                                })(<Input prefix={<Icon type='lock' />} placeholder='请输入密码' />)
                            }
                        </Form.Item>
                        <Form.Item label='性别' {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1',
                                    rules: [{
                                        required: true
                                    }]
                                })(
                                    <Radio.Group>
                                        <Radio value='1'>男</Radio>
                                        <Radio value='2'>女</Radio>
                                    </Radio.Group>
                                )
                            }
                        </Form.Item>
                        <Form.Item label='年龄' {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: '18',
                                    rules: [{
                                        required: true
                                    }]
                                })(<InputNumber />)
                            }
                        </Form.Item>
                        <Form.Item label='状态' {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: '2',
                                })(
                                    <Select>
                                        <Option value='1'>屌丝一枚</Option>
                                        <Option value='2'>帅哥一枚</Option>
                                        <Option value='3'>小狗一只</Option>
                                        <Option value='4'>美女一枚</Option>
                                        <Option value='5'>学霸一个</Option>
                                        <Option value='6'>学渣一枚</Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item label='爱好' {...formItemLayout}>
                            {
                                getFieldDecorator('hobby', {
                                    initialValue: ['1', '2', '3'],
                                })(
                                    <Select mode='multiple'>
                                        <Option value='1'>吃饭</Option>
                                        <Option value='2'>睡觉</Option>
                                        <Option value='3'>打豆豆</Option>
                                        <Option value='4'>看美女</Option>
                                        <Option value='5'>吃零食</Option>
                                        <Option value='6'>学习</Option>
                                        <Option value='7'>旅游</Option>
                                        <Option value='8'>跑步</Option>
                                        <Option value='9'>拉屎</Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item label='婚姻状况' {...formItemLayout}>
                            {
                                getFieldDecorator('isMarred', {
                                    initialValue: true,
                                })(
                                    <Switch />
                                )
                            }
                        </Form.Item>
                        <Form.Item label='生日' {...formItemLayout}>
                            {
                                getFieldDecorator('birthday', {

                                })(
                                    <DatePicker
                                        showTime
                                        format='YYYT-MM-DD HH:mm:ss'
                                    />
                                )
                            }
                        </Form.Item>
                        <Form.Item label='联系地址' {...formItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    initialValue: "四川省宜宾市临港区"
                                })(
                                    <TextArea
                                        autosize={
                                            {
                                                minRows: 3,
                                                maxRows: 6
                                            }
                                        }
                                    />
                                )
                            }
                        </Form.Item>
                        <Form.Item label='早期时间' {...formItemLayout}>
                            {
                                getFieldDecorator('time')(
                                    <TimePicker />
                                )
                            }
                        </Form.Item>
                        <Form.Item label='头像' {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        listType="picture-card"
                                        showUploadList={false}
                                        onChange={this.handleChange}
                                    >
                                        {this.state.imageUrl ? <img src={this.state.imageUrl } alt="avatar" style={{ width: '100%' }} /> : <Icon type='plus'/>}
                                    </Upload>
                                )
                            }
                        </Form.Item>
                        <Form.Item {...offsetLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Checkbox >我已经阅读过<a href='#'>domino很帅协议</a></Checkbox>
                                )
                            }
                        </Form.Item>
                        <Form.Item {...offsetLayout}>
                            {
                                getFieldDecorator('button')(
                                    <Button type='primary' onClick = {this.handleSubmit}>注册</Button>
                                )
                            }
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(Registers);