import React from 'react';
import {Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, MDBDropdownItem, MDBChip} from 'mdbreact';
import './public/style.css';
import {Tag , Input, Tooltip, Icon,} from 'antd';

class QuestionList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // 存放提供的topics
      selectedTags: [],
      tags: ['Tag1', 'Tag 2', 'Tag 3'],
      inputVisible: false,
      inputValue: ''
    };
    this.getData = this.getData.bind(this);
    this.getRecommand = this.getRecommand.bind(this);
    this.getHot = this.getHot.bind(this);
    this.getYourQ = this.getYourQ.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.showInput = this.showInput.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputConfirm = this.handleInputConfirm.bind(this);
    this.saveInputRef = this.saveInputRef.bind(this);
    
  }

  // 不同的tab返回不同的内容
  async getData() {
    switch (this.props.tabNumber) {
      case '1':
        return await this.getRecommand();
      case '2':
        return await this.getHot();
      case '3':
        return await this.getYourQ();
    }
  }

  // 为你推荐,todo
  async getRecommand() {

  }

  //todo
  getHot() {
  }
  //todo
  getYourQ() {
  }

  handleChange(tag, checked) {
    const {selectedTags} = this.state;
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);
    this.setState({selectedTags: nextSelectedTags});
  }
  // 关闭标签
  handleClose(removedTag) {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    this.setState({ tags });
  }
  // 添加标签
  showInput() {
    this.setState({ inputVisible: true }, () => this.input.focus());
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleInputConfirm() {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  }
  saveInputRef(input) {
    this.input = input;
  }


  render() {
    const self = this;
    const {tabNumber} = self.props;
    if (tabNumber === '1') {
      const {selectedTags} = this.state;
      const { tags, inputVisible, inputValue } = this.state;
      const CheckableTag = Tag.CheckableTag;
      // 获得topic数据，应该从server拉,todo
      const tagsFromServer = ['数学', '物理', '化学', '统计'];
      return (
        <div>
          <div className={'categoryRe'} style={{marginTop:'20px', marginBottom:'10px'}}>
            <h6 style={{marginRight: 8, display: 'inline'}}>推荐:</h6>
            {tagsFromServer.map(tag => (
              <CheckableTag
                key={tag}
                color="gold"
                checked={selectedTags.indexOf(tag) > -1}
                onChange={checked => this.handleChange(tag, checked)}
              >
                {tag}
              </CheckableTag>
            ))}
          </div>
          <div className={'addUser'} style={{marginTop: '10px', marginBottom: '10px'}}>
            {tags.map((tag, index) => {
              const isLongTag = tag.length > 20;
              const tagElem = (
                <Tag key={tag} afterClose={() => this.handleClose(tag)}>
                  {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                </Tag>
              );
              return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
            })}
            {inputVisible && (
              <Input
                ref={this.saveInputRef}
                type="text"
                size="small"
                style={{ width: 78 }}
                value={inputValue}
                onChange={this.handleInputChange}
                onBlur={this.handleInputConfirm}
                onPressEnter={this.handleInputConfirm}
              />
            )}
            {!inputVisible && (
              <Tag
                onClick={this.showInput}
                style={{ background: '#fff', borderStyle: 'dashed' }}
              >
                <Icon type="plus" /> New Tag
              </Tag>
            )}
          </div>
        </div>
      );

    } else if (tabNumber === '2') {
      return (
        <span>2</span>
      );
    } else {
      return (
        <span>3</span>
      );
    }

  }
}

export default QuestionList;
