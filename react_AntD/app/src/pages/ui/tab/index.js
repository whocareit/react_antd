import React, { Component } from 'react';
import { Card, Tabs, message, Icon } from 'antd';
import './index.less'
const { TabPane } = Tabs;

export default class Tab extends Component {

    newTabIndex = 0;
    
    componentWillMount() {
        const panes = [
            {
                title: 'tab1',
                Content: 'tab1 content',
                key: 1,
            },
            {
                title: 'tab2',
                Content: 'tab2 content',
                key: 2,
            },
            {
                title: 'tab3',
                Content: 'tab3 content',
                key: 3,
            }
        ]
        this.setState({
            activeKey: panes[0].key,
            panes
        })
    }

    handleCallback = (key) => {
        message.info('你当前的tabs为：' + key)
    }

    onChange = activeKey => {
        this.setState({ activeKey });
    };

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };

    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    };

    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };

    render() {
        return (
            <div>
                <Card title='Tabs标签页' className='wrapper'>
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1 </TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3 </TabPane>
                    </Tabs>
                </Card>
                <Card title='带图标Tabs标签页' className='wrapper'>
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type='plus' />Tab1</span>} key="1">Content of Tab Pane 1 </TabPane>
                        <TabPane tab={<span><Icon type='edit' />Tab2</span>} key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab={<span><Icon type='delete' />Tab3</span>} key="3">Content of Tab Pane 3 </TabPane>
                    </Tabs>
                </Card>
                <Card title='带图标Tabs标签页' className='wrapper'>
                    <Tabs
                        activeKey={this.state.activeKey}
                        onChange={this.onChange}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((item) => {
                                return <TabPane tab={item.title} key={item.key}>{item.Content}</TabPane>
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}