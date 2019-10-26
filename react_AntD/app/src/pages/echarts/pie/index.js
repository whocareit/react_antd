import React, { Component } from 'react';
import { Card } from 'antd';
//按需加载实现
import echartsTheme from '../echartsTheme';
import echarts from 'echarts/lib/echarts';
//导入饼图
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react';

export default class Pie extends Component {

    componentWillMount() {
        echarts.registerTheme('IM_Words', echartsTheme);
    }

    getOption = () => {
        let option = {
            title: {
                x: 'center',
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a}</br>{b}:{c}({d}%)',
            },
            legend: {
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: ['周一', '周二', '周三', '周三', '周四', '周五', '周六', '周日']
            },
            series: [{
                name: '订单量',
                type: 'pie',
                data: [
                    {
                        value: 1000,
                        name: '周一'
                    }, {
                        value: 1200,
                        name: '周二'
                    }, {
                        value: 1500,
                        name: '周三'
                    }, {
                        value: 2100,
                        name: '周四'
                    }, {
                        value: 1500,
                        name: '周五'
                    }, {
                        value: 3000,
                        name: '周六'
                    }, {
                        value: 2700,
                        name: '周日'
                    }
                ]

            }]
        }
        return option
    }

    getOptions = () => {
        let option = {
            title: {
                x: 'center',
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a}</br>{b}:{c}({d}%)',
            },
            legend: {
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: ['周一', '周二', '周三', '周三', '周四', '周五', '周六', '周日']
            },
            series: [{
                name: '订单量',
                type: 'pie',
                radius: ['50%', '70%'],
                data: [
                    {
                        value: 1000,
                        name: '周一'
                    }, {
                        value: 1200,
                        name: '周二'
                    }, {
                        value: 1500,
                        name: '周三'
                    }, {
                        value: 2100,
                        name: '周四'
                    }, {
                        value: 1500,
                        name: '周五'
                    }, {
                        value: 3000,
                        name: '周六'
                    }, {
                        value: 2700,
                        name: '周日'
                    }
                ]

            }]
        }
        return option
    }

    getOption1 = () => {
        let option = {
            title: {
                x: 'center',
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a}</br>{b}:{c}({d}%)',
            },
            legend: {
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: ['周一', '周二', '周三', '周三', '周四', '周五', '周六', '周日']
            },
            series: [{
                name: '订单量',
                type: 'pie',
                data: [
                    {
                        value: 1000,
                        name: '周一'
                    }, {
                        value: 1200,
                        name: '周二'
                    }, {
                        value: 1500,
                        name: '周三'
                    }, {
                        value: 2100,
                        name: '周四'
                    }, {
                        value: 1500,
                        name: '周五'
                    }, {
                        value: 3000,
                        name: '周六'
                    }, {
                        value: 2700,
                        name: '周日'
                    }
                ].sort((a, b) => a.value - b.value),
                roseType: 'radius',
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }]
        }
        return option
    }

    render() {
        return (
            <div>
                <Card title='饼图1' style={{marginTop: 10}}>
                    <ReactEcharts option={this.getOption()} theme='IM_Words' style={{ height: 500 }} />
                </Card>
                <Card title='饼图2' style={{marginTop: 10}}>
                    <ReactEcharts option={this.getOptions()} theme='IM_Words' style={{ height: 500 }} />
                </Card>
                <Card title='饼图3' style={{marginTop: 10}}>
                    <ReactEcharts option={this.getOption1()} theme='IM_Words' style={{ height: 500 }} />
                </Card>
            </div>
        )
    }
}