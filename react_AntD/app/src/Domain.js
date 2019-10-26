import React, { Component } from 'react';
import Footer from './componnets/Footer';
import Header from './componnets/Header';
import NavLeft from './componnets/NavLeft';
// import Home from './pages/home';
import './style/common.less'
import { Row, Col } from 'antd';

export default class Domain extends Component {
   render(){
       return(
           <Row className='container'>
               <Col span={3} className='NavLeft'>
                    <NavLeft/>
               </Col>
               <Col span={21} className='main'>
                    <Header/>
                    <Row className='content'>
                        {/* <Home/> */}
                        {this.props.children}
                    </Row>
                    <Footer/>
               </Col>   
           </Row>
       )
   }
}