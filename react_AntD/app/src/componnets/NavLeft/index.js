import React, { Component } from 'react';
import './index.less'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { switchMenu } from '../../redux/action';
import menuList  from '../../config/menuConfigs'

const { SubMenu } = Menu;


class NavLeft extends Component {

    state={
        currentKey: ''
    }

    componentWillMount(){
        const MenuList = this.renderList(menuList)
        let currentKey = window.location.hash.replace(/#|\?.*/g, '');
        this.setState({
            MenuList,
            currentKey
        })
    }

    renderList = (list) => {
        return list.map((item) => {
            if(item.children){
                return (
                    <SubMenu key={item.key} title={item.title}>{this.renderList(item.children)}</SubMenu>
                )
            }
            return <Menu.Item key={item.key} title={item.title}>
                <NavLink to = {item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }

    //点击切换首页图标
    handleClick = ({ item , key}) => {
        const { dispatch } = this.props;
        dispatch(switchMenu(item.props.title));
        this.setState({
            currentKey: key
        })
    }

    render() {
        return (
            <div>
                <div className='logo'>
                    <img src={require('../../assets/logo-ant.svg')} alt='ph' />
                    <h1>IM words</h1>
                </div>
                <div>
                    <Menu 
                        onClick={this.handleClick}
                        selectedKeys={[this.state.currentKey]}
                        theme='dark'
                    >
                        {this.state.MenuList}
                    </Menu>
                </div>
            </div>
        )
    }
}

export default connect()(NavLeft);