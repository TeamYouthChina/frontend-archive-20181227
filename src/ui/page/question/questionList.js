import React from 'react';
import {Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, MDBDropdownItem, MDBChip} from 'mdbreact';
import './public/style.css';
import {Tag , Input, Tooltip, Icon,  List, Avatar, Button, Skeleton, BackTop} from 'antd';

class QuestionList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // 存放提供的topics
      selectedTags: [],
      tags: ['Tag1', 'Tag 2', 'Tag 3'],
      inputVisible: false,
      inputValue: '',
      initLoading: true,
      loading: false,
      data: [],
      list: []
    
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
    this.getData = this.getData.bind(this);
    this.onLoadMore = this.onLoadMore.bind(this);
    
  }
  // 初始化拿到数据,todo
  componentDidMount() {
    this.getData((res) => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      });
    });
  }
  // cb获得数据,todo
  getData(callback) {
    const count = 3
    const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
    fetch(fakeDataUrl).then(results => {
      return results.json();
    }).then(data => {
      callback(data);
    });
  }
  // 每次拼接数据,todo
  onLoadMore() {
    const count = 3;
    // 数据类型
    // {
    //   "gender":"female",
    //   "name":{"title":"miss","first":"emily","last":"holmes"},
    //   "email":"emily.holmes@example.com",
    //   "nat":"GB"
    // }
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData((res) => {
      const data = this.state.data.concat(res.results);
      this.setState({
        data,
        list: data,
        loading: false,
      }, () => {
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
    });
  }

  // 不同的tab返回不同的内容,todo
  async getDataForBar() {
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
    const {selectedTags} = this.state;
    const { tags, inputVisible, inputValue } = this.state;
    const CheckableTag = Tag.CheckableTag;
    // 获得topic数据，应该从server拉,todo
    const tagsFromServer = ['数学', '物理', '化学', '统计'];
    const { initLoading, loading, list } = this.state;
    const loadMore = !initLoading && !loading ? (
      <div style={{
        textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px',
      }}
      >
        <Button onClick={this.onLoadMore}>更多话题</Button>
      </div>
    ) : null;
    if (tabNumber === '1') {
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
            {tags.map((tag) => {
              const isLongTag = tag.length > 20;
              const tagElem = (
                <Tag key={tag} closable afterClose={() => this.handleClose(tag)}>
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
          <div>
            <List
              className="demo-loadmore-list"
              loading={initLoading}
              itemLayout="horizontal"
              loadMore={loadMore}
              dataSource={list}
              renderItem={item => (
                <List.Item actions={[]}>
                  <Skeleton avatar title={false} loading={item.loading} active>
                    <List.Item.Meta
                      title={
                        <div>
                          <a href="/question/1">{'问题标题'}</a>
                          <Tooltip placement="bottom" title={'不感兴趣'}>
                            <Icon type="close" />
                          </Tooltip>
                        </div>
                      }
                      description={
                        <div>
                          <div><a href="#!" style={{color: '#259'}}>问题描述</a></div>
                          <a href="#!" className={'ant-list-item-meta-description-answer'}>n个回答</a>
                          <span className={'zg-bull'}>•</span>
                          <a href="#!" className={'ant-list-item-meta-description-answer'}>n个关注</a>
                        </div>
                      }
                    />
                    {/*补充,todo*/}
                    <div></div>
                  </Skeleton>
                </List.Item>
              )}
            />
          </div>
          <BackTop />
        </div>
      );

    } else if (tabNumber === '2') {
      return (
        <div>
          <List
            className="demo-loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={list}
            renderItem={item => (
              <List.Item actions={[]}>
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    title={
                      <div>
                        <a href="/question/1">{'问题标题'}</a>
                        <Tooltip placement="bottom" title={'不感兴趣'}>
                          <Icon type="close" />
                        </Tooltip>
                      </div>
                    }
                    description={
                      <div>
                        <div><a href="#!" style={{color: '#259'}}>问题描述</a></div>
                        <a href="#!" className={'ant-list-item-meta-description-answer'}>n个回答</a>
                        <span className={'zg-bull'}>•</span>
                        <a href="#!" className={'ant-list-item-meta-description-answer'}>n个关注</a>
                      </div>
                    }
                  />
                  {/*补充,todo*/}
                  <div></div>
                </Skeleton>
              </List.Item>
            )}
          />
          <BackTop />
        </div>
      );
    } else {
      return (
        <div>
          <div className={'section-title QuestionInvitedTitle'}>
            <div className={'zg-right'}>
              <span className={'zg-gray-darker zg-gray'}>所有人(N)</span>
              <span className={'zg-bull'}>|</span>
              <a href="#!" className={'zg-link-litblue'}>我关注的人(N)</a>
            </div>
            <h4 className={'zm-invite-title'}>邀请我回答的问题</h4>
          </div>
          <List
            className="demo-loadmore-list"
            loading={initLoading}
            itemLayout="horizontal"
            loadMore={loadMore}
            dataSource={list}
            renderItem={item => (
              <List.Item actions={[]}>
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    title={
                      <div>
                        <a href="/question/1">{'问题标题'}</a>
                        <Tooltip placement="bottom" title={'忽略该问题'}>
                          <Icon type="close" />
                        </Tooltip>
                      </div>
                    }
                    description={
                      <div>
                        <div className={'ant-list-item-meta-description-answer'}>问题描述</div>
                        <span className={'ant-list-item-meta-description-answer'}>邀请你回答</span>
                        <span className={'zg-bull'}>•</span>
                        <a href="#!" className={'ant-list-item-meta-description-answer'}>n个回答</a>
                        <span className={'zg-bull'}>•</span>
                        <a href="#!" className={'ant-list-item-meta-description-answer'}>n个关注</a>
                      </div>
                    }
                  />
                  {/*补充,todo*/}
                  <div></div>
                </Skeleton>
              </List.Item>
            )}
          />
          <BackTop />
        </div>
      );
    }

  }
}

export default QuestionList;
