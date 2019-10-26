import React, { Component } from 'react';
import { Card, Button, Form, Select, Table ,Modal, message} from 'antd';
import Axios from '../../axios';
import './index.less'
const Option = Select.Option;

export default class Citys extends Component {

    state = {}
    componentDidMount() {
        const dataSource = [{
            id: 1,
            name: '北京',
            mode: '1',
            op_mode: '1',
            franschines_name: '1',
            city_admain: '李四',
            city_time: '2019-10-09',
            update_time: '2019-10-09',
            op_username: '李四'
        },{
            id: 2,
            name: '上海',
            mode: '2',
            op_mode: '2',
            franschines_name: '2',
            city_admain: '张三',
            city_time: '2019-10-09',
            update_time: '2019-10-09',
            op_username: '张三'
        }]
        dataSource.map((item,index) => {
            return item.key = index;
        })
        this.setState({
            dataSource
        })
        // this.requesttion()
    }

    //开通城市点击事件实现
    handleOpenCity = () => {
        Modal.info({
            title: '确认',
            content: '你确定要开通这个城市吗'
        })
    }
    


    // requesttion = () => {
    //     Axios.ajaxs({
    //         url: '/admain/open_city',
    //         data: {
    //             params: {
    //                 page: 1
    //             }
    //         }
    //     }).then((res) => {
    //         if(res.data.code == 0){
    //             this.setState({
    //                 dataSource: res.data.item_list
    //             })
    //         }
    //     })
    // }

    render() {
        const columns = [
            {
                title: '城市ID',
                dataIndex: 'id'
            }, {
                title: '城市名称',
                dataIndex: 'name'
            }, {
                title: '用车模式',
                dataIndex: 'mode',
                render(mode){
                    let config = {
                        '1': '禁停区模式',
                        '2': '指定停车点模式'
                    }
                    return config[mode]
                }
            }, {
                title: '营运模式',
                dataIndex: 'op_mode',
                render(op_mode){
                    let config = {
                        '1': '加盟',
                        '2': '自营'
                    }
                    return config[op_mode]
                }
            }, {
                title: '授权加盟商',
                dataIndex: 'franschines_name',
                render(franschines_name){
                    let config = {
                        '1': '已授权',
                        '2': '未授权'
                    }
                    return config[franschines_name]
                }
            }, {
                title: '城市管理员',
                dataIndex: 'city_admain'
            }, {
                title: '城市开通时间',
                dataIndex: 'city_time'
            }, {
                title: '操作时间',
                dataIndex: 'update_time'
            }, {
                title: '操作人',
                dataIndex: 'op_username'
            }
        ]

        return (
            <div>
                <Card>
                    <FilterForm />
                </Card>
                <Card>
                    <Button type='primary' onClick={this.handleOpenCity}>开通城市</Button>
                </Card>
                <div className='wrapper'>
                    <Table
                        columns={columns}
                        dataSource={this.state.dataSource}
                        bordered
                    />
                </div>
            </div>
        )
    }
}

class FilterForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout='inline'>
                <Form.Item label='城市'>
                    {
                        getFieldDecorator('city_id')(
                            <Select placeholder='请选择' style={{ width: '100px' }}>
                                <Option value=''>全部</Option>
                                <Option value='1'>北京市</Option>
                                <Option value='2'>成都市</Option>
                                <Option value='3'>上海市</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label='用车模式'>
                    {
                        getFieldDecorator('mode')(
                            <Select placeholder='请选择' style={{ width: '135px' }}>
                                <Option value=''>全部</Option>
                                <Option value='1'>指定停车点模式</Option>
                                <Option value='2'>禁停区模式</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label='营运模式' >
                    {
                        getFieldDecorator('op_mode')(
                            <Select placeholder='请选择' style={{ width: '100px' }}>
                                <Option value=''>全部</Option>
                                <Option value='1'>自营</Option>
                                <Option value='2'>加盟</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item label='加盟商状态'>
                    {
                        getFieldDecorator('status')(
                            <Select placeholder='请选择' style={{ width: '100px' }}>
                                <Option value=''>全部</Option>
                                <Option value='1'>已授权</Option>
                                <Option value='2'>未授权</Option>
                            </Select>
                        )
                    }
                </Form.Item>
                <Form.Item>
                    <Button type='primary' style={{ margin: '0 20px' }}>查询</Button>
                    <Button>重置</Button>
                </Form.Item>
            </Form>
        )
    }
}
// 实现表单的双向绑定功能
FilterForm = Form.create({})(FilterForm);

