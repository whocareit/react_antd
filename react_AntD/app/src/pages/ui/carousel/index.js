import React, { Component } from 'react';
import { Card, Carousel } from 'antd';
import './index.less'

export default class Carousels extends Component {
    render() {
        const imgs = ['1.png','2.png','3.png']
        return (
            <div>
                <Card title='文字轮播'>
                    <Carousel autoplay effect='fade'>
                        <div><h3>domino1</h3></div>
                        <div><h3>domino2</h3></div>
                        <div><h3>domino3</h3></div>
                        <div><h3>domino4</h3></div>
                    </Carousel>
                </Card>
                <Card title='图片轮播'>
                    <Carousel autoplay effect='fade'>
                        <div>
                            <img src={require('../../../../public/carousel/' + imgs[0])} alt='domino' />
                        </div>
                        <div>
                            <img src={require('../../../../public/carousel/' +  imgs[1])} alt='domino' />
                        </div>
                        <div>
                            <img src={require('../../../../public/carousel/' + imgs[2])} alt='domino' />
                        </div>

                    </Carousel>
                </Card>
            </div>
        )
    }
}