import React, { Component } from 'react';
import BaseForm from '../../componnets/baseForm';
import Etable from '../../componnets/etable';
import { Card, Button, Modal, Form, Select, Input, Radio, DatePicker } from 'antd';
import Util from '../../utils/utils';
import moment from 'moment';
import Axios from '../../axios';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const TextArea = Input.TextArea;

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const dataSource = [
            {
                id: 0,
                username: '程卓',
                sex: 1,
                interest: '1',
                status: 1,
                birthday: '2015-08-09',
                address: '乐山市',
                time: '09.15'
            }, {
                id: 1,
                username: '程卓',
                sex: 2,
                interest: '2',
                status: 2,
                birthday: '2015-08-09',
                address: '乐山市',
                time: '09.15'
            }, {
                id: 2,
                username: '程卓',
                sex: '男',
                interest: '3',
                status: 3,
                birthday: '2015-08-09',
                address: '乐山市',
                time: '09.15'
            }
        ]

        this.setState({
            dataSource
        })
    }

    formList = [
        {
            type: 'INPUT',
            label: '用户名',
            field: 'user_name',
            placeholder: '请输入用户名',
            width: 120
        },
        {
            type: 'INPUT',
            label: '手机号',
            field: 'user_mobile',
            placeholder: '请输入手机号',
            width: 120
        },
        {
            type: 'DATE',
            label: '请选择入职时间',
            field: 'date',
            placeholder: '请输入日期',
            width: 120
        }

    ]

    handleFilter = () => {
        this.requestList()
    }

    //查询功能实现
    requestList = () => {

    }

    //员工创建信息提交
    handleSubmit = () => {
        this.userForm.props.form.resetFields();
        this.setState({
            isVisible: false
        })
        // let type = this.state.type;
        // let data = this.userForm.props.form.getFieldsValue();
        // Axios.ajax({
        //     url: type == 'create' ? '/user/id' : '/user/edit',
        //     data: {
        //         params: data
        //     }
        // }).then((res) => {
        //     if(res.code == 0){
        //         this.setState({
        //             isVisible: false
        //         })
        //         this.requestList();
        //     }
        // })
    }

    //功能区实现
    handleOperate = (type) => {
        let item = this.state.selectedItem;
        if (type == 'create') {
            this.setState({
                type: 'create',
                isVisible: true,
                title: '创建员工'
            })
        } else if (type == 'edit') {
            if (!item) {
                Modal.info({
                    title: '提示',
                    content: '请选择一个用户'
                })
                return;
            }
            this.setState({
                type: 'edit',
                isVisible: true,
                title: '编辑员工',
                userInfo: item
            })
        } else if (type == 'detail') {
            this.setState({
                type: 'detail',
                isVisible: true,
                title: '员工详情',
                userInfo: item
            })
        } else {
            if (!item) {
                Modal.info({
                    title: '提示',
                    content: '请选择一个用户'
                })
                return;
            }
            let _this = this;
            Modal.confirm({
                title: '确认删除',
                onOk: () => {
                    this.setState({
                        isVisible: false
                    })
                    // Axios.ajax({
                    //     url: 'user/delete',
                    //     data: {
                    //         params: {
                    //             params: {
                    //                 id: item.id
                    //             }
                    //         }
                    //     }
                    // }).then((res) => {
                    //     if(res.code == '0'){
                    //         _this.setState({
                    //             isVisible: false
                    //         })
                    //         _this.requestList();
                    //     }
                    // })
                }
            })
        }
    }

    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            }, {
                title: '用户名',
                dataIndex: 'username'
            }, {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            }, {
                title: '爱好',
                dataIndex: 'interest',
                render(interest){
                    return {
                        '1':'吃屎',
                        '2': '游泳',
                        '3': '打豆豆',
                        '4': '打球',
                        '5': '跑步'
                    }[interest]
                }
            }, {
                title: '状态',
                dataIndex: 'status',
                render(status) {
                    return {
                        '1': '咸鱼一枚',
                        '2': '风华浪子',
                        '3': '北大才子一枚',
                        '4': '百度FE',
                        '5': '创业者'
                    }[status]
                }
            }, {
                title: '生日',
                dataIndex: 'birthday'
            }, {
                title: '联系地址',
                dataIndex: 'address'
            }, {
                title: '早起时间',
                dataIndex: 'time'
            }
        ]
        let footer = {}
        if (this.state.type == 'detail') {
            footer = {
                footer: null
            }
        }

        return (
            <div>
                <Card>
                    <BaseForm
                        formList={this.formList}
                        filterSubmit={this.handleFilter}
                    />
                </Card>
                <Card style={{ marginTop: 10 }}>
                    <Button type='primary' icon='plus' style={{ marginRight: 10 }} onClick={() => this.handleOperate('create')}>创建员工</Button>
                    <Button type='primary' icon='edit' style={{ marginRight: 10 }} onClick={() => this.handleOperate('edit')}>编辑员工</Button>
                    <Button type='primary' style={{ marginRight: 10 }} onClick={() => this.handleOperate('detail')}>员工详情</Button>
                    <Button type='primary' icon='delete' style={{ marginRight: 10 }} onClick={() => this.handleOperate('delete')}>删除员工</Button>
                </Card>
                <div>
                    <Etable
                        updateSelectedItem={Util.updateSelectedItem.bind(this)}
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        selectedItem={this.state.selectedItem}
                        selectedRowKeys={this.state.selectedRowKeys}
                    />
                </div>
                <Modal
                    title={this.state.title}
                    visible={this.state.isVisible}
                    onOk={this.handleSubmit}
                    onCancel={() => {
                        this.userForm.props.form.resetFields();
                        this.setState({
                            isVisible: false
                        })
                    }}
                    style={{ width: 600 }}
                    {...footer}
                >
                    <UserForm type={this.state.type} userInfo={this.state.userInfo} wrappedComponentRef={(inst) => this.userForm = inst} />
                </Modal>
            </div>
        )
    }
}

class UserForm extends Component {
    getState = (status) => {
        return {
            '1': '咸鱼一枚',
            '2': '风华浪子',
            '3': '北大才子一枚',
            '4': '百度FE',
            '5': '创业者'
        }[status]
    }
    render() {
        let type = this.props.type;
        let userInfo = this.props.userInfo || {};
        const FormLayoutList = {
            labelCon: { span: 5 },
            wrapperCon: { span: 19 }
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout='horizontal'>
                <FormItem label='用户名' {...FormLayoutList}>
                    {
                        type == 'detail' ? userInfo.username :
                            getFieldDecorator('username', {
                                initialValue: userInfo.username
                            })(
                                <Input type='text' placeholder='请输入用户名' />
                            )
                    }
                </FormItem>
                <FormItem label='性别' {...FormLayoutList}>
                    {
                        type == 'detail' ? userInfo.sex == 1 ? '男' : '女' :
                            getFieldDecorator('sex', {
                                initialValue: userInfo.sex
                            })(
                                <RadioGroup>
                                    <Radio value={1}>男</Radio>
                                    <Radio value={2}>女</Radio>
                                </RadioGroup>
                            )
                    }
                </FormItem>
                <FormItem label='状态' {...FormLayoutList}>
                    {
                        type == 'detail' ? this.getState(userInfo.status) :
                            getFieldDecorator('status', {
                                initialValue: userInfo.status
                            })(
                                <Select>
                                    <Option value={1}>咸鱼一枚</Option>
                                    <Option value={2}>风华浪子</Option>
                                    <Option value={3}>北大才子一枚</Option>
                                    <Option value={4}>百度FE</Option>
                                    <Option value={5}>创业者</Option>
                                </Select>
                            )
                    }
                </FormItem>
                <FormItem label='生日' {...FormLayoutList}>
                    {
                        type == 'detail' ? userInfo.birthday :
                            getFieldDecorator('birthday', {
                                initialValue: moment(userInfo.birthday)
                            })(
                                <DatePicker showTime={true} format='YYYY-MM-DD HH:mm:ss' />
                            )
                    }
                </FormItem>
                <FormItem label='联系地址' {...FormLayoutList}>
                    {
                        type == 'detail' ? userInfo.address :
                            getFieldDecorator('address', {
                                initialValue: userInfo.address
                            })(
                                <TextArea row={3} placeholder='请输入用户地址' />
                            )
                    }
                </FormItem>
            </Form>
        )
    }
}

UserForm = Form.create({})(UserForm);