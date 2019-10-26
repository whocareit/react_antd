import React, { Component } from 'react';
import { Card } from 'antd';
import BaseForm from '../../componnets/baseForm'

export default class BikeMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total_count: 100,
            bike_list: [

                {
                    lon: 116.356619,
                    lat: 40.01782
                }, {
                    lon: 116.437107,
                    lat: 39.975331
                }, {
                    lon: 116.34972,
                    lat: 40.070808
                }, {
                    lon: 116.323849,
                    lat: 39.964714
                },{
                    lon: 116.404912,
                    lat: 40.015129
                },{
                    lon: 116.365243,
                    lat: 39.958078
                }
            ],
            route_list: [
                {
                    lon: 116.353101,
                    lat: 40.067835
                }, {
                    lon: 116.357701,
                    lat: 40.053699
                }, {
                    lon: 116.374086,
                    lat: 40.027626
                }, {
                    lon: 116.397801,
                    lat: 40.01641
                }
            ],
            server_list: [
                {
                    lon: 116.125722,
                    lat: 40.192178,
                    ts: null
                },{
                    lon: 116.389321,
                    lat: 39.856691,
                    ts: null
                },{
                    lon: 116.587379,
                    lat: 40.087158
                }
            ]
        }
    }

    formList = [
        {
            type: '城市',
            label: '城市',
            field: 'city',
            placeholder: '全部',
            initialValue: '0',
            width: 100,
            list: [{ id: '0', name: '全部' }, { id: '1', name: '北京' }, { id: '2', name: '上海' }, { id: '3', name: '杭州' }]
        }, {
            type: '时间查询'
        }, {
            type: 'SELECT',
            label: '订单状态',
            field: 'order_status',
            placeholder: '全部',
            width: 100,
            initialValue: '0',
            list: [{ id: '0', name: '全部' }, { id: '1', name: '进行中' }, { id: '2', name: '行程结束' }]
        }
    ]

    requestList = () => {
        this.renderMap();
    }

    handleFieldSubmit = (filterParams) => {
        this.params = filterParams;
        this.requestList();
    }

    componentDidMount() {
        this.renderMap();
    }

    //渲染地图数据
    renderMap = () => {
        const route_list = this.state.route_list;
        const area_list = this.state.server_list;
        const bike_list = this.state.bike_list;
        this.map = new window.BMap.Map('container');
        if (route_list && route_list.length > 0) {
            let startPoint = new window.BMap.Point(route_list[0].lon, route_list[0].lat);
            let endPoint = new window.BMap.Point(route_list[route_list.length - 1].lon, route_list[route_list.length - 1].lat)
            //起点
            let startIcon = new window.BMap.Icon(require('../../assets/start_point.png'), new window.BMap.Size(36, 42), {
                imageSize: new window.BMap.Size(36, 42),
                anchor: new window.BMap.Size(36, 42)
            })

            //联系图标与起始点经纬度
            let startMarker = new window.BMap.Marker(startPoint, { icon: startIcon });
            //渲染
            this.map.addOverlay(startMarker);

            //终点
            let endIcon = new window.BMap.Icon(require('../../assets/end_point.png'), new window.BMap.Size(36, 42), {
                imageSize: new window.BMap.Size(36, 42),
                anchor: new window.BMap.Size(36, 42)
            })

            let endMarker = new window.BMap.Marker(endPoint, { icon: endIcon })

            //在地图上渲染图标
            this.map.addOverlay(endMarker)

            this.map.centerAndZoom(endPoint, 11);

            //加载完坐标后渲染地图路线
            this.renderPath(route_list);

            //加载小车车的图标
            this.renderMapBike(bike_list);
            
            //加载完成后渲染地图区域
            this.renderMapArea(area_list);
        }
        this.addMapControl();
    }

    //渲染小车位置
    renderMapBike = (bike_list) => {
        let trackBike = [];
        bike_list.forEach((item) => {
            trackBike.push(new window.BMap.Point(item.lon,item.lat));
        })

        //小车车图标
        let bikeIcon = new window.BMap.Icon(require('../../assets/bike.jpg'), new window.BMap.Size(36, 42), {
            imageSize: new window.BMap.Size(36, 42),
            anchor: new window.BMap.Size(36, 42)
        })

        trackBike.forEach((item) => {
            let bikeMarker = new window.BMap.Marker(item, { icon: bikeIcon })
            this.map.addOverlay(bikeMarker)
        })

    }

    //绘制路线图
    renderPath = (route_list) => {
        let trackPath = [];
        route_list.forEach((item) => {
            trackPath.push(new window.BMap.Point(item.lon,item.lat));
        })
        
        //绘制折线图
        let polyLine = new window.BMap.Polyline(trackPath,{
            strokeWeight: 3,
            strokeColor: '#1869AD',
            strokeOpacity: 1
        })

        this.map.addOverlay(polyLine);
    }

    //绘制区域图
    renderMapArea = (list) => {
        let trackArea = [];
        list.forEach((item) => {
            trackArea.push(new window.BMap.Point(item.lon,item.lat))
        })

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

    //添加地图控件
    addMapControl = () => {
        let map = this.map;
        map.addControl(new window.BMap.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT }));
        map.addControl(new window.BMap.NavigationControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT }));
    }

    render() {
        return (
            <div>
                <Card>
                    <BaseForm
                        formList={this.formList}
                        filterSubmit={this.handleFieldSubmit}
                    />
                </Card>
                <Card style={{ marginTop: 10 }}>
                    <div>共{this.state.total_count}辆</div>
                    <div id='container' style={{ height: 500 }}></div>
                </Card>
            </div>
        )
    }
}