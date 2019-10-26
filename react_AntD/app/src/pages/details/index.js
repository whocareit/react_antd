import React, { Component } from 'react';
import { Card, Button } from 'antd';
import './index.less'

export default class Detail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Plist: [
                {
                    'lon': 116.361221,
                    'lat': 40.043376
                }, {
                    'lon': 116.362124,
                    'lat': 40.04454
                }, {
                    'lon': 116.45625,
                    'lat': 40.056121
                }, {
                    'lon': 116.51545,
                    'lat': 40.056154
                }, {
                    'lon': 116.53624,
                    'lat': 40.061545
                }
            ],
            Area: [
                {
                    'lon': 116.365621,
                    'lat': 40.043376
                }, {
                    'lon': 116.36226,
                    'lat': 40.074854
                }, {
                    'lon': 116.361221,
                    'lat': 40.074545
                }, {
                    'lon': 116.461221,
                    'lat': 40.075454
                }, {
                    'lon': 116.4661221,
                    'lat': 40.074546
                }, {
                    'lon': 116.561221,
                    'lat': 40.07554
                }, {
                    'lon': 116.561221,
                    'lat': 40.061545
                },
            ]
        }
    }

    componentDidMount() {
        this.renderMap(this.state.Plist);
        this.drawarea(this.state.Area);
    }

    renderMap = (position) => {
        // 创建上下文对象
        this.map = new window.BMap.Map("detailOrderMap");
        //设定中心点位置
        this.map.centerAndZoom('北京', 11);
        this.addMapControl();
        this.drawUserPath(position);
    }

    //添加地图控件
    addMapControl = () => {
        let map = this.map;
        //放大与导航空间的创建
        map.addControl(new window.BMap.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT }));
        map.addControl(new window.BMap.NavigationControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT }));
    }

    //绘制用户行驶路线
    drawUserPath = (positionList) => {
        let map = this.map;
        let startPoint = '';
        let endPoint = '';
        if (positionList.length > 0) {
            var first = positionList[0];
            //获取初始点坐标
            startPoint = new window.BMap.Point(first.lon, first.lat);
            //设置图片起始点图标大小
            let startIcon = new window.BMap.Icon(require('../../assets/start_point.png'), new window.BMap.Size(36, 42), {
                imageSize: new window.BMap.Size(36, 42),
                anchor: new window.BMap.Size(36, 42)
            })

            //联系图标与起始点经纬度
            let startMarker = new window.BMap.Marker(startPoint, { icon: startIcon });
            //渲染
            map.addOverlay(startMarker);
        }

        if (positionList.length > 0) {
            var last = positionList[positionList.length - 1];
            //获取结束点坐标位置，并创建BMap集合点
            endPoint = new window.BMap.Point(last.lon, last.lat);

            //设置图片终点图标大小
            let endIcon = new window.BMap.Icon(require('../../assets/end_point.png'), new window.BMap.Size(36, 42), {
                imageSize: new window.BMap.Size(36, 42),
                anchor: new window.BMap.Size(36, 42)
            })

            let endMarker = new window.BMap.Marker(endPoint, { icon: endIcon })

            //在地图上渲染图标
            map.addOverlay(endMarker)

            //绘制路线图，将所有的经纬度点转化为能够在地图中识别的经纬度点
            let trackPath = []
            for (let i = 0; i < positionList.length; i++) {
                let point = positionList[i];
                trackPath.push(new window.BMap.Point(point.lon, point.lat))
            }

            //绘制折线图，传入两个参数第一个参数为所有点的集合，后面的参数为折线的宽度 颜色 透明度
            let polyLine = new window.BMap.Polyline(trackPath, {
                strokeColor: '#1869AD',
                strokeWeight: 3,
                strokeOpacity: 1
            })

            map.addOverlay(polyLine);
            //最终中心点的位置
            this.map.centerAndZoom(endPoint, 11);
        }
    }

    drawarea = (arr) => {
        if (arr.length > 0) {
            let trackArea = [];
            for (let i = 0; i < arr.length; i++) {
                let point = arr[i];
                trackArea.push(new window.BMap.Point(point.lon, point.lat))
            }
            
        //绘制多边形，设置的多边形的属性分别为边的宽度 颜色 透明度  填充的颜色与透明度
        let polyGon = new window.BMap.Polygon(trackArea, {
            strokeColor: '#CE0000',
            strokeWeight: 4,
            strokeOpacity: 1,
            fillColor: '#ff8605',
            fillOpacity: 0.4
        })

        //所有关于图形，路线图的渲染都是通过map.addOverlay()进行
        this.map.addOverlay(polyGon);
        }

    }

    render() {
        return (
            <div>
                <Card>
                    <div id='detailOrderMap' className='detailMap'></div>
                    <div className='detail-items'>
                        <div className='detail-title'>基础信息</div>
                        <ul className='detail-form'>
                            <li className='clear-fix'>
                                <div className='detail-form-left'>用车模式</div>
                                <div className='detail-form-content'>2</div>
                            </li>
                            <li className='clear-fix'>
                                <div className='detail-form-left'>订单编号</div>
                                <div className='detail-form-content'>4</div>
                            </li>
                            <li className='clear-fix'>
                                <div className='detail-form-left'>车辆编号</div>
                                <div className='detail-form-content'>5</div>
                            </li>
                            <li className='clear-fix'>
                                <div className='detail-form-left'>用户姓名</div>
                                <div className='detail-form-content'>ef</div>
                            </li>
                            <li className='clear-fix'>
                                <div className='detail-form-left'>手机号码</div>
                                <div className='detail-form-content'>5657545</div>
                            </li>
                        </ul>
                    </div>
                    <div className='detail-items'>
                        <div className='detail-title'>行驶轨迹</div>
                        <ul className='detail-form'>
                            <li className='clear-fix'>
                                <div className='detail-form-left'>行驶起点</div>
                                <div className='detail-form-content'>2</div>
                            </li>
                            <li className='clear-fix'>
                                <div className='detail-form-left'>行驶终点</div>
                                <div className='detail-form-content'>4</div>
                            </li>
                            <li className='clear-fix'>
                                <div className='detail-form-left'>行驶里程</div>
                                <div className='detail-form-content'>5</div>
                            </li>
                        </ul>
                    </div>
                </Card>
            </div>
        )
    }
}