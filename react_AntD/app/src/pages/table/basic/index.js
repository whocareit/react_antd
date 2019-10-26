import React, { Component } from 'react';
import { Card, Table, Button, Modal,message } from 'antd';
// import axios from 'axios';
import Axios from '../../../axios';
import './index.less'


export default class basicTable extends Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    componentWillMount() {
        const dataSource = [
            {
                id: '0',
                username: 'domino',
                sex: '男',
                status: '1',
                hobby: '5',
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '1',
                username: 'domino~~',
                sex: '男',
                status: '2',
                hobby: '2',
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '2',
                username: 'domino',
                sex: '男',
                status: '3',
                hobby: '3',
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            }
        ]
        this.setState({
            dataSource
        })
        this.request()
        dataSource.map((item,index) => {
            item.key = index;
        })
    }

    // 动态获取数据
    // request = () => {
    //     let baseUrl = 'https://easy-mock.com/mock/5d6fbb3ab3db060775b1f0dc'
    //     axios.get(baseUrl + '/admain/table').then((res) => {
    //         if(res.status == '200' && res.data.code == 0){
    //             this.setState({
    //                 dataSource1: res.data.result
    //             })
    //         }
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }

    request = () => {
        Axios.ajax({
            url: '/admain/table',
            data: {
                params: {
                    page: 1
                }
            }
        }).then((res) => {
            if (res.code == '0') {
                this.setState({
                    dataSource1: res.result
                })
            }
        })
    }

    onRowClick = (record,index) => {
        let selectKey = [index];
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }

    //多选执行删除操作
    handleDelete = () => {
        let rows = this.state.selectedRows;
        let ids = [];
        rows.map((item) => {
            ids.push(item.id)
        })
        Modal.confirm({
            title: '删除提示',
            content: `你确定要删除${ids.join(',')}`,
            onOk: () => {
                message.success('删除成功')
            }
        })
    }

    render() {
        const columns = [
            {
                id: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'username'
            },
            {
                title: '性别',
                dataIndex: 'sex'
            },
            {
                title: '状态',
                dataIndex: 'status',
                render(status) {
                    let config = {
                        '1': '吃饭',
                        '2': 'sleep',
                        '3': 'play_doudou',
                    }
                    return config[status]
                }
            },
            {
                title: '爱好',
                dataIndex: 'hobby',
                render(hobby){
                    let cofig = {
                        '1': '打球',
                        '2': '游泳',
                        '3': '看书',
                        '4': '拍照',
                        '5': '打豆豆'
                    }
                    return cofig[hobby]
                }
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            }
        ]
        
        const { selectedRowKeys } = this.state
        const rowSelection = {
            type: 'radio',
            selectedRowKeys
        }
        const rowSelectionCheckout = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys,selectedRows) => {
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }

        return (
            <div>
                <Card title='基础表格' className='wrapper'>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title='动态数据渲染表单' className='wrapper'>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource1}
                        pagination={false}
                    />
                </Card>
                <Card title='表格单选' className='wrapper'>
                    <Table
                        bordered
                        columns={columns}
                        rowSelection={rowSelection}
                        onRow={(record,index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record,index)
                                }
                            }
                        }}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title='表格多选' className='wrapper'>
                    <Button type='primary' onClick={this.handleDelete} style={{marginBottom: '10px'}}>删除</Button>
                    <Table
                        bordered
                        columns={columns}
                        rowSelection={rowSelectionCheckout}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}