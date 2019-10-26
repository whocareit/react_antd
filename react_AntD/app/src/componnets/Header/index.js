import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Util from '../../utils/utils';
import { connect } from 'react-redux';
// import axios from '../../axios'
import './index.less';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'domino'
        }
    }

    componentWillMount() {

        setInterval(() => {
            let systime = Util.formateDate(new Date().getTime());
            this.setState({
                systime
            })
        }, 1000)
    }

    // 处理天气接口  jsonp  deal  with
    // getWeatherApiData(){
    //     let city = '北京'
    //     axios.JsonP({
    //         url: '地址'
    //     }).then((res) => {
    //         if(res.status == 'success'){
    //             let data = res.resulte[0].weather_data[0]
    //             this.setState({
    //                 data
    //             })
    //         }
    //     })
    // }

    render() {
        const menuType = this.props.menuType;
        return (
            <div>
                <Row className={menuType ? 'header-change' : 'header'}>

                    {
                        menuType ?
                            <Col span='6' className='header-left'>
                               <img src={require('../../assets/logo-ant.svg')}  alt='logo'/>
                               <span>IM words</span>
                            </Col> : ''
                    }
                    <Col sapn={menuType ? '18' : '24'} className='header-top'>
                        <span>欢迎，{this.state.name}</span>
                        <a href='#'>退出</a>
                    </Col>
                </Row>
                {
                    menuType ? '' : <Row className='breadcrumb'>
                        <Col span='4' className='breadcrumb-title'>
                            { this.props.menuName }
                        </Col>
                        <Col span='20' className='weather'>
                            <span className='data'>{this.state.systime}</span>
                            <span className='weather-detail'>多云</span>
                        </Col>
                    </Row>
                }

            </div>
        )
    }

}

const mapStateToDispatch = state => {
    return {
        menuName: state.menuName
    }
}

export default connect(mapStateToDispatch)(Header);