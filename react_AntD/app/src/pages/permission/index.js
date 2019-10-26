import React, { Component } from 'react';
import { Card, Button, Modal, Form, Input, Select, Tree ,Transfer} from 'antd';
import Etable from '../../componnets/etable';
import Util from '../../utils/utils';
import menuList from '../../config/menuConfigs';
const FormItem = Form.Item;
const Option = Select.Option;
const TreeNode = Tree.TreeNode;

export default class Permission extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            isPermission: false
        };
    }

    componentDidMount() {
        const dataSource = [
            {
                id: 0,
                role_name: '管理人员',
                create_time: new Date().getTime(),
                status: 1,
                menus:[
                    '/home',
                    '/ui/button',
                    '/ui/loading',
                    '/ui/modals',
                    '/ui/notification',
                    '/ui/messages',
                    '/ui/tabs',
                    '/ui/gallery',
                    '/ui/carousel',
                    '/ui'
                ],
                authorsize_time: new Date().getTime(),
                author_person: '张三'
            }, {

                id: 0,
                role_name: '管理人员',
                create_time: new Date().getTime(),
                status: 2,
                menus:[
                    '/home',
                    '/home',
                    '/ui/button',
                    '/ui/modals',
                    '/ui/loading',
                    '/ui/notification',
                ],
                authorsize_time: new Date().getTime(),
                author_person: '李四'
            }
        ]
        const dataList = [
            {
                status: 1,
                user_id:1,
                user_name: '张洋'
            },{
                status: 0,
                user_id:2,
                user_name: '张吴'
            },{
                status: 1,
                user_id:3,
                user_name: '李玉萍'
            },{
                status: 0,
                user_id:4,
                user_name: '天羽'
            },{
                status: 0,
                user_id:6,
                user_name: '狸猫'
            },{
                status: 0,
                user_id:7,
                user_name: '乌斯'
            },{
                status: 0,
                user_id:8,
                user_name: '赵谦'
            },{
                status: 1,
                user_id:9,
                user_name: '思域'
            }
        ]
        this.setState({
            dataSource,
            dataList
        })
    }

    //角色创建
    handleRole = () => {
        this.setState({
            isVisible: true
        })
    }

    //角色创建提交
    handleRoleSubmit = () => {
        this.setState({
            isVisible: false
        })
        //恢复到默认选择
        this.roleForm.props.form.resetFields();
    }

    //权限设置
    handlePerission = () => {
        let item = this.state.selectedItem;
        if (!item) {
            Modal.info({
                title: '提示',
                content: '请选择一个角色'
            })
            return
        }
        this.setState({
            isPermission: true,
            detailInfo: item,
            menuInfo: item.menus
        })
    }

    //权限设置提交
    handleEditSubmit = () => {
        this.setState({
            isPermission: false
        })

        // let data = this.PermForm.props.form.getFieldsValue();
        // data.role_id = this.state.selectedItem.id;
        // data.menus = this.state.menuInfo;
        // 再通过ajax进行数据的传送即可

        //恢复到默认选择
        this.PermForm.props.form.resetFields();
    }

    //用户授权
    handleUserAuth = () => {
        let item = this.state.selectedItem; 
        if(!item){
            Modal.info({
                title: '提示',
                content: '请选择一条数据'
            })
            return;  
        }
        this.getUserList(item.id);
        this.setState({
            detailItem: item
        })
    }
    
    //得到后台传送的接口数据
    getUserList = (id) => {
        //需要根据id将点选中的数据返回给后台
        //这里的data需要后台接口来提供，在这里只是暂时的模拟
        const data = this.state.dataList;
        //筛选目标用户
        this.getAuthorList(data);
        this.setState({ 
            isAuthorShow: true      
        })
    }

    //筛选目标用户
    getAuthorList = (datalist) => {
        const orderList = [];
        const targetList = [];
        if(datalist && datalist.length > 0){
            for( let i = 0; i < datalist.length; i++){
                const data = {
                    key: datalist[i].user_id,
                    title: datalist[i].user_name,
                    status: datalist[i].status
                }
                if(data.status == 1){
                    targetList.push(data.key)
                }
                orderList.push(data)
            }  
        }
        this.setState({
            orderList,
            targetList
        })
    }

    //筛选目标用户数据提交
    handleUserSubmit = () => {
        let data = {}
        data.user_ids = this.state.targetList;
        data.role_id = this.state.selectedItem.id;
        //通过ajax再将数据提交并且更新即可
        this.setState({
            isAuthorShow: false
        })
    }

    render() {
        const columns = [
            {
                title: '角色id',
                dataIndex: 'id'
            }, {
                title: '角色名称',
                dataIndex: 'role_name'
            }, {
                title: '创建时间',
                dataIndex: 'create_time',
                render(dataIndex) {
                    return Util.formateDate(dataIndex)
                }
            }, {
                title: '使用状态',
                dataIndex: 'status',
                render(status) {
                    return status == 1 ? '启用' : '未用'
                }
            }, {
                title: '授权时间',
                dataIndex: 'authorsize_time',
                render(dataIndex) {
                    return Util.formateDate(dataIndex)
                }
            }, {
                title: '授权人',
                dataIndex: 'author_person'
            }
        ]
        return (
            <div>
                <Card>
                    <Button type='primary' style={{ marginRight: 10 }} onClick={this.handleRole}>角色创建</Button>
                    <Button type='primary' style={{ marginRight: 10 }} onClick={this.handlePerission}>设置权限</Button>
                    <Button type='primary' style={{ marginRight: 10 }} onClick={this.handleUserAuth}>用户授权</Button>
                </Card>
                <Card>
                    <Etable
                        updateSelectedItem={Util.updateSelectedItem.bind(this)}
                        dataSource={this.state.dataSource}
                        columns={columns}
                        selectedRowKeys={this.state.selectedRowKeys}
                    />
                </Card>
                <Modal
                    title='创建角色'
                    visible={this.state.isVisible}
                    onOk={this.handleRoleSubmit}
                    onCancel={() => {
                        //恢复到默认选择
                        this.roleForm.props.form.resetFields();
                        this.setState({
                            isVisible: false
                        })
                    }}
                >
                    <RoleForm wrappedComponentRef={(inst) => this.roleForm = inst} />
                </Modal>
                <Modal
                    title='权限设置'
                    visible={this.state.isPermission}
                    width={600}
                    onOk={this.handleEditSubmit}
                    onCancel={() => {
                        this.setState({
                            isPermission: false
                        })
                    }}
                >
                    <PermForm 
                        detailInfo={this.state.detailInfo}
                        menuInfo={this.state.menuInfo}
                        patchMenuInfo={(checkedKeys) => {
                            this.setState({
                                menuInfo: checkedKeys
                            })
                        }}
                        // 获取表单中的值
                        wrappedComponentRef={(inst) => this.PermForm = inst}
                     />
                </Modal>
                <Modal
                    title='用户授权'
                    visible={this.state.isAuthorShow}
                    width={800}
                    onOk={this.handleUserSubmit}
                    onCancel={() => {
                        this.setState({
                            isAuthorShow: false
                        })
                    }}
                >
                    <RoleAuthForm 
                        wrappedComponentRef={(inst) => this.userAuthForm = inst}
                        detailInfo={this.state.detailItem}
                        targetKeys={this.state.targetList}
                        mockData={this.state.orderList}
                        patchUserInfo={(targetKeys) => {
                            this.setState({
                                targetList: targetKeys 
                            })
                        }}
                    />
                </Modal>
            </div>
        )
    }
}

class RoleForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 }
        }
        return (
            <Form layout='horizontal'>
                <FormItem label='角色名称' {...formItemLayout}>
                    {
                        getFieldDecorator('role_name')(
                            <Input type='text' placeholder='请输入角色名称' />
                        )
                    }
                </FormItem>
                <FormItem label='状态' {...formItemLayout}>
                    {
                        getFieldDecorator('status', {
                            initialValue: 1
                        })(
                            <Select>
                                <Option value={1}>启用</Option>
                                <Option value={2}>未用</Option>
                            </Select>
                        )
                    }
                </FormItem>
            </Form>
        )
    }
}
//实现双向数据绑定
RoleForm = Form.create({})(RoleForm);

class PermForm extends Component {

    //使用递归的方式来渲染权限设置，引用的数组为配置路由的内容
    renderMapNode = (data) => {
       return data.map((item) => {
            if (item.children) {
                return <TreeNode title={item.title} key={item.key}>
                    {this.renderMapNode(item.children)}
                </TreeNode>
            }else{
                return <TreeNode title={item.title} key={item.key} />
            }
        })
    }

    onCheck = (checkedKeys) => {
        this.props.patchMenuInfo(checkedKeys);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { detailInfo,menuInfo } = this.props; 
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 }
        }
        return (
            <Form layout='horizontal'>
                <FormItem label='角色名称' {...formItemLayout}>
                    <Input disabled placeholder={detailInfo.role_name} />
                </FormItem>
                <FormItem label='状态' {...formItemLayout}>
                    {
                        getFieldDecorator('status', {
                            initialValue: 1
                        })(
                            <Select>
                                <Option value={1}>启用</Option>
                                <Option value={2}>未用</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <Tree
                    checkable
                    defaultExpandAll
                    checkedKeys={menuInfo}
                    onCheck={(checkedKeys) =>{
                        this.onCheck(checkedKeys);
                    }}
                >
                    <TreeNode title='平台权限' key='plat_all'>
                        {this.renderMapNode(menuList)}
                    </TreeNode>
                </Tree>
            </Form>
        )
    }
}

class RoleAuthForm extends Component{

    filterOPtion = (inputValue,option) => {
        return option.title.indexOf(inputValue) > -1;
    }
    
    handleChange = (targetKeys) => {
        this.props.patchUserInfo(targetKeys);
    }

    render(){
        const detailInfo = this.props.detailInfo;
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 }
        }
    
        return(
            <Form layout='horizontal'>
                <FormItem label='角色名称' {...formItemLayout}>
                    <Input disabled placeholder={detailInfo.role_name} />
                </FormItem>
                <FormItem label='用户选择' {...formItemLayout}>
                    <Transfer 
                        listStyle={{width: 200,height: 380}}
                        dataSource={this.props.mockData}
                        titles={['待选用户','已选用户']}
                        showSearch
                        searchPlaceholder='请输入用户名'
                        filterOption={this.filterOPtion}
                        targetKeys={this.props.targetKeys}
                        render={item=>item.title}
                        onChange={this.handleChange}
                    />
                </FormItem>
            </Form>
        )
    }
}

PermForm = Form.create({})(PermForm);