import React, { Component } from 'react';
import { Card, Button ,Modal} from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import draftjs from 'draftjs-to-html';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class RichText extends Component {

    constructor(props){
        super(props);
        this.state = {
            showRichText: false,
            editorState: ''
        };
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        });
    }

    onEditChange = (contentState) => {
        this.setState({
            contentState
        })
    }

    //获取清空内容
    handleClearContent = () => {
        this.setState({
            editorState: ''
        });
    }

    //获取html文本
    handleReqText = () => {
        this.setState({
            showRichText: true
        })
    }

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Card>
                    <Button type='primary' style={{ marginRight: 15 }} onClick={this.handleClearContent}>清空内容</Button>
                    <Button type='primary' onClick={this.handleReqText}>获取html文本</Button>
                </Card>
                <Card title='富文本编辑器'>
                    <Editor
                        editorState={editorState}
                        onContentStateChange={this.onEditChange}
                        onEditorStateChange={this.onEditorStateChange}
                    />
                </Card>
                <Modal
                    title='富文本'
                    visible={this.state.showRichText}
                    onCancel={() => {
                        this.setState({
                            showRichText: false
                        })
                    }}
                    footer={null}
                >
                    {draftjs(this.state.contentState)}
                </Modal>
            </div>
        )
    }
}