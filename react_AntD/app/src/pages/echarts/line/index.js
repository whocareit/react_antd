import React, { Component } from 'react';
import { Card } from 'antd';
//按需加载实现
import echartsTheme from '../echartsTheme';
import echarts from 'echarts/lib/echarts';
//导入饼图
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';

export default class Line extends Component {

    componentWillMount() {
        echarts.registerTheme('IM_Words', echartsTheme);
    }

    getOption = () => {
        let option = {
            title: {
                text: '用户骑行量'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: '订单量',
                data: [1000, 932, 920, 800, 1290, 700, 1500],
                type: 'line'
            }]
        }
        return option
    }

    getOptions = () => {
        let option = {
            title: {
                text: '用户骑行量'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['ofo','街兔']
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
                data: [1000, 3000, 5000, 10000, 20000, 27700, 36000],
                type: 'line'
            },{
                name: '街兔',
                data: [500,800,2000,6000,15000,16000,20000,24000],
                type: 'line'
            }
        ]
        }
        return option
    }

    getOption3 = () => {
        let option = {
            title: {
                text: '用户骑行量'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: '骑行量',
                data: [6000,14000,20000,16000,12000,19000,22000],
                type: 'line',
                areaStyle: {}
            }]
        }
        return option
    }

    render() {
        return (
            <div>
                <Card title='折线图1' style={{ marginTop: 10 }}>
                    <ReactEcharts option={this.getOption()} theme='IM_Words' style={{ height: 500 }} />
                </Card>
                <Card title='折线图2' style={{ marginTop: 10 }}>
                    <ReactEcharts option={this.getOptions()} theme='IM_Words' style={{ height: 500 }} />
                </Card>
                <Card title='折线图3' style={{ marginTop: 10 }}>
                    <ReactEcharts option={this.getOption3()} theme='IM_Words' style={{ height: 500 }} />
                </Card>
            </div>
        )
    }
}