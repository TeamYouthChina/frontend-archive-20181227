import React from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import {TopBar} from '../module/top-bar';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';

export class QuestionAndAnswer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      editorState: null,
      outputHTML: '<p></p>'
    };
  }
  async componentDidMount () {
    // 假设此处从服务端获取html格式的编辑器内容
    // const htmlContent = await this.fetchEditorContent()
    // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorState数据
    this.setState({
      editorState: BraftEditor.createEditorState('')
    });
  }
  // 服务端异步获取内容
  fetchEditorContent() {}

  async submitContent() {
    // 在编辑器获得焦点时按下ctrl+s会执行此方法
    // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
    const htmlContent = this.state.editorState.toHTML()
    const result = await this.saveEditorContent(htmlContent);
  }
  // 拿到保存的内容
  saveEditorContent(){}
  handleEditorChange(editorState) {
    // this.setState({ editorState })
  }
  render() {
    const { editorState, outputHTML } = this.state;
    const style = {}
    return (
      <div style={style}>
        <TopBar></TopBar>
        <div className="editor-wrapper" >
        </div>
        <MDBContainer>
          <MDBRow md='4'>
            <span>a new span</span>
          </MDBRow>
          <MDBRow md='8'>
            <BraftEditor
              value={editorState}
              onChange={this.handleEditorChange}
              onSave={this.submitContent}
            />
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
