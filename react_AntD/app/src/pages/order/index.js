import React, { Component } from 'react';
import { Card, Button, Select, Form, DatePicker, Table ,Modal} from 'antd';
import BaseForm from '../../componnets/baseForm';
import Etable from '../../componnets/etable';
import './index.less';
import Util from '../../utils/utils';
const Option = Select.Option;

export default class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    formList = [
        {
            type: 'SELECT',
            label: '城市',
            field: 'city_id',
            placeholder: '全部',
            initialValue: '0',
            width: 100,
            list: [{id: '1',name: '北京市'},{id: '2',name: '上海市'},{id: 3, name: '成都市'}]
        },{
            type: '时间查询'
        },{
            type: 'SELECT',
            label: '订单管理',
            field: 'status',
            placeholder: '全部',
            initialValue: '0',
            width: 100,
            list: [{id: '1',name: '已支付'},{id: '2',name: '未支付'}]
        }
    ]

    componentDidMount() {
        const dataSource = [
            {
                id: 0,
                order_number: 'T1234678',
                car_number: '川F.152.45',
                username: 'domino',
                phone_number: '17759863694',
                distance: 10022,
                process_time: 1000,
                status: '1',
                start_time: '2017-09-12',
                end_time: '2019-10-19',
                order_money: 10000,
                pay_money: 3000
            },
            {
                id: 1,
                order_number: 'T56978678',
                car_number: '川F.152.45',
                username: 'domino~~',
                phone_number: '17712343694',
                distance: 10022,
                process_time: 1000,
                status: '2',
                start_time: '2017-08-12',
                end_time: '2019-10-19',
                order_money: 10000,
                pay_money: 3000
            }
        ]
        this.setState({
            dataSource
        })
    }

    //订单详情按钮实现路由跳转
    handleOrderDetail = () => {
        let item = this.state.selectedItem;
        if(!item){
            Modal.info({
                title: '确认按钮',
                content: '请选择一条数据'
            })
            return;
        }
        window.open(`#/common/order/detail/${item.order_number}`,'_blank')
    }

    handleFilter = () => {
        const params = this.params
    }

    render() {
        const columns = [
            {
                title: '订单编号',
                dataIndex: 'order_number'
            }, {
                title: '车辆编号',
                dataIndex: 'car_number'
            }, {
                title: '用户名',
                dataIndex: 'username'
            }, {
                title: '手机号',
                dataIndex: 'phone_number'
            }, {
                title: '里程',
                dataIndex: 'distance'
            }, {
                title: '行驶时长',
                dataIndex: 'process_time'
            }, {
                title: '状态',
                dataIndex: 'status',
                render(status){
                    let config = {
                        '1': '已支付',
                        '2': '未支付'
                    }
                    return config[status];
                }   
            }, {
                title: '开始时间',
                dataIndex: 'start_time'
            }, {
                title: '结束时间',
                dataIndex: 'end_time'
            }, {
                title: '订单金额',
                dataIndex: 'order_money'
            }, {
                title: '实付金额',
                dataIndex: 'pay_money'
            }
        ]


        return (
            <div>
                <Card>
                    <BaseForm formList={this.formList} filterSubmit={this.handleFilter}/>
                </Card>
                <Card>
                    <Button onClick={this.handleOrderDetail}>订单详情</Button>
                    <Button className='end_time'>结束订单</Button>
                </Card>
                <div className='wrapper'>
                    <Etable 
                        updateSelectedItem={Util.updateSelectedItem.bind(this)}
                        columns={columns}
                        dataSource={this.state.dataSource}
                        // selectedIds={this.state.selectedIds}
                        // selectedItem={this.state.selectedItem}
                        // rowSelection='checkbox'
                        selectedRowKeys={this.state.selectedRowKeys}
                    />
                </div>
            </div>
        )
    }
}

