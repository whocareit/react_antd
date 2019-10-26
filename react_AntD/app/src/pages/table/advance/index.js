import React, { Component } from 'react';
import { Card, Table, Button, Modal, message, Badge } from 'antd';

export default class HighTable extends Component {

    componentWillMount() {
        const dataSource = [
            {
                id: '0',
                username: 'domino',
                sex: '男',
                status: '1',
                hobby: '打豆豆',
                age: 18,
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '1',
                username: 'domino~~',
                sex: '男',
                status: '1',
                hobby: '打豆豆',
                age: 48,
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '2',
                username: 'domino',
                sex: '男',
                status: '1',
                hobby: '打豆豆',
                age: 5,
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '3',
                username: 'domino',
                sex: '男',
                status: '1',
                hobby: '打豆豆',
                age: 54,
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '4',
                username: 'domino',
                sex: '男',
                status: '1',
                hobby: '打豆豆',
                age: 6,
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '5',
                username: 'domino',
                sex: '男',
                status: '1',
                hobby: '打豆豆',
                age: 45,
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '6',
                username: 'domino',
                sex: '男',
                status: '1',
                hobby: '打豆豆',
                age: 18,
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '7',
                username: 'domino',
                sex: '男',
                status: '1',
                hobby: '打豆豆',
                age: 46,
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '8',
                username: 'domino',
                sex: '男',
                status: '1',
                hobby: '打豆豆',
                age: 14,
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '9',
                username: 'domino',
                sex: '男',
                status: '1',
                hobby: '打豆豆',
                age: 21,
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '10',
                username: 'domino',
                sex: '男',
                status: '1',
                hobby: '打豆豆',
                age: 23,
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '11',
                username: 'domino',
                sex: '男',
                status: '1',
                hobby: '打豆豆',
                age: 26,
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '12',
                username: 'domino',
                sex: '男',
                status: '1',
                age: 988,
                hobby: '打豆豆',
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '13',
                username: 'domino',
                sex: '男',
                status: '1',
                hobby: '打豆豆',
                age: 25,
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '14',
                username: 'domino',
                sex: '男',
                status: '1',
                hobby: '打豆豆',
                age: 78,
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            }
        ]
        const dataSource1 = [
            {
                id: '0',
                username: 'domino',
                sex: '男',
                status: '1',
                hobby: <Badge status='success' text='成功'/>,
                age: 18,
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '1',
                username: 'domino~~',
                sex: '男',
                status: '1',
                hobby: <Badge status='error' text='错误'/>,
                age: 48,
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '2',
                username: 'domino',
                sex: '男',
                status: '1',
                hobby: <Badge status='warning' text='警告'/>,
                age: 5,
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '3',
                username: 'domino',
                sex: '男',
                status: '1',
                hobby: <Badge status='default' text='默认'/>,
                age: 54,
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
            {
                id: '4',
                username: 'domino',
                sex: '男',
                status: '1',
                hobby: <Badge status='processing' text='进行'/>,
                age: 6,
                birthday: '18-06-06',
                address: '四川省德阳市',
                time: '14:25'
            },
        ]
        this.setState({
            dataSource,
            dataSource1
        })
    }

    handleChange = (pagination, filters , sorter) => {
        this.setState({
            sorterOrder: sorter.order
        })
    }

    handleDelete = (item) => {
        let id = item.id;
        Modal.info({
            title: '确认删除',
            content: '你确认要删除这条数据吗',
            onOk: () => {
                message.success('删除成功')
            }
        })
    }

    render() {
        const columns = [
            {
                title: 'id',
                width: 80,
                dataIndex: 'id'
            },
            {
                title: '用户名',
                width: 120,
                dataIndex: 'username'
            },
            {
                title: '性别',
                width: 80,
                dataIndex: 'sex'
            },
            {
                title: '状态',
                width: 80,
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
                width: 80,
                dataIndex: 'hobby'
            },
            {
                title: '年龄',
                width: 80,
                dataIndex: 'age',
                sorter: (a,b) => {
                    return a.age - b.age
                },
                sorterOrder: this.state.sorterOrder
            },
            {
                title: '生日',
                width: 80,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                width: 82,
                dataIndex: 'time'
            },{
                title: '按钮',
                width: 40,
                render: (text,item)=> {
                    return <Button onClick={(item) => {this.handleDelete(item)}}>删除</Button>
                }
            }
        ]

        const columns2 = [
            {
                title: 'id',
                width: 80,
                dataIndex: 'id',
                fixed: 'left'
            },
            {
                title: '用户名',
                width: 120,
                dataIndex: 'username'
            },
            {
                title: '性别',
                width: 80,
                dataIndex: 'sex'
            },
            {
                title: '状态',
                width: 80,
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
                width: 80,
                dataIndex: 'hobby'
            },
            {
                title: '爱好',
                width: 80,
                dataIndex: 'hobby'
            },
            {
                title: '爱好',
                width: 80,
                dataIndex: 'hobby'
            },
            {
                title: '爱好',
                width: 80,
                dataIndex: 'hobby'
            },
            {
                title: '爱好',
                width: 80,
                dataIndex: 'hobby'
            },
            {
                title: '爱好',
                width: 80,
                dataIndex: 'hobby'
            },
            {
                title: '爱好',
                width: 80,
                dataIndex: 'hobby'
            },
            {
                title: '爱好',
                width: 80,
                dataIndex: 'hobby'
            },
            {
                title: '生日',
                width: 80,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                width: 82,
                dataIndex: 'time'
            }
        ]
        return (
            <div>
                <Card title='头部固定'>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{y: 240}}
                    />
                </Card>
                <Card title='列头固定'>
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{x: 1300}}
                    />
                </Card>
                <Card title='表格排序'>
                    <Table 
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{y: 240}}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title='徽标与按钮'>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource1}
                        pagination={false}
                        scroll={{y: 240}}
                    />
                </Card>
            </div>
        )
    }
}