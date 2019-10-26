import React, { Component } from 'react';
import { Select, Button,  Form,  Input ,DatePicker} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

class BaseForm extends Component {

    getOptionList = (data) => {
        if (!data) {
            return [];
        }
        let options = [<Option value='0' key='all_key'>全部</Option>];
        data.map((item) => {
            options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
        })
        return options;
    }

    handleOpenSearch = () => {
        let fieldsValue = this.props.form.getFieldsValue();
        this.props.filterSubmit(fieldsValue);
    }

    reset = () => {
        this.props.form.resetFields()
    }

    initFormList = () => {
        const { getFieldDecorator } = this.props.form;
        const formList = this.props.formList;
        const formItemList = [];
        if (formList && formList.length > 0) {
            formList.forEach((item, index) => {
                let label = item.label;
                let field = item.field;
                let initialValue = item.initialValue || '';
                let placeholder = item.placeholder;
                let width = item.width;
                if (item.type == '时间查询') {
                    const begin_time = <FormItem label='订单时间' key={field} >
                        {
                            getFieldDecorator('begin_time', {
                                initialValue: initialValue //true  flase
                            })(
                                <DatePicker showTime={true} placeholder={placeholder} format='YYYY-MM-DD HH:mm:ss' />
                            )
                        }
                    </FormItem>
                    formItemList.push(begin_time)
                    const end_time = <FormItem label='~' colon={false} key={field} >
                    {
                        getFieldDecorator('end_time', {
                            initialValue: initialValue //true  flase
                        })(
                            <DatePicker showTime={true} placeholder={placeholder} format='YYYY-MM-DD HH:mm:ss' />
                        )
                    }
                </FormItem>
                formItemList.push(end_time)
                } else if (item.type == 'INPUT') {
                    const INPUT = <FormItem label={label} key={field} >
                        {
                            getFieldDecorator([field], {
                                initialValue: initialValue
                            })(
                                <Input type='text' placeholder={placeholder} style={{width: width}} />
                            )
                        }
                    </FormItem>
                    formItemList.push(INPUT);
                } else if (item.type == 'SELECT') {
                    const SELECT = <FormItem label={label} key={field} >
                        {
                            getFieldDecorator([field], {
                                initialValue: initialValue
                            })(
                                <Select style={{ width: width }} placeholder={placeholder}>
                                    {this.getOptionList(item.list)}
                                </Select>
                            )
                        }
                    </FormItem>
                    formItemList.push(SELECT);
                } else if (item.type == 'CHECKOUT') {
                    const CHECKBOX = <FormItem label={label} key={field} >
                        {
                            getFieldDecorator([field], {
                                initialValue: initialValue
                            })(
                                <Select style={{ width: width }} placeholder={placeholder}>
                                    {this.getOptionList(item.list)}
                                </Select>
                            )
                        }
                    </FormItem>
                    formItemList.push(CHECKBOX);
                } else if(item.type == 'DATE'){
                    const Date = <FormItem label={label} key={field} >
                    {
                        getFieldDecorator([field])(
                            <DatePicker showTime={true} placeholder={placeholder} format='YYYY-MM-DD HH-mm-ss' />
                        )
                    }
                    </FormItem>
                    formItemList.push(Date)
                } else if(item.type = '城市'){
                    const city = <FormItem label={label} key={field} >
                    {
                        getFieldDecorator([field])(
                            <Select style={{ width: width }} placeholder={placeholder}>
                                {this.getOptionList(item.list)}
                            </Select>
                        )
                    }
                </FormItem>
                formItemList.push(city);
                }
            })
        }
        return formItemList;
    }

    render() {
        return (
            <Form layout='inline'>
                {this.initFormList()}
                <Form.Item>
                    <Button type='primary' style={{ margin: '0 20px' }} onClick={this.handleOpenSearch}>查询</Button>
                    <Button onClick={this.reset}>重置</Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create({})(BaseForm);