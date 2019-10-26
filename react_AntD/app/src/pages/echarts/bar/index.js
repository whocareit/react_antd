import React, { Component } from 'react';
import { Card } from 'antd';
//eacharts图标实现按需加载
import echartsTheme from '../echartsTheme';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';


export default class Bar extends Component {

    componentWillMount() {
        echarts.registerTheme('IM_Words', echartsTheme);
    }

    getOption = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: '订单量',
                type: 'bar',
                data: [1000, 2000, 1500, 3000, 2000, 1200, 800]
            }]
        }
        return option
    }

    getOptions = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            legend:  {
                data: ['ofo','摩拜','街兔']
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'ofo',
                    type: 'bar',
                    data: [1000, 4000, 6000, 10000, 12000, 11200, 20000]
                },{
                    name: '摩拜',
                    type: 'bar',
                    data: [700, 2000, 1500, 3000, 4000, 8000, 14000]
                },{
                    name: '街兔',
                    type: 'bar',
                    data: [1000, 2000, 3000, 4000, 10000, 12000, 8000]
                }
            ]
        }
        return option
    }

    render() {
        return (
            <div>
                <Card title='柱形图表1'>
                    <ReactEcharts option={this.getOption()} theme='IM_Words' style={{ height: 500 }} />
                </Card>
                <Card title='柱形图表2'>
                    <ReactEcharts option={this.getOptions()} theme='IM_Words' style={{ height: 500 }} />
                </Card>
            </div>
        )
    }
}