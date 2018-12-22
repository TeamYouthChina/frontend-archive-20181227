import React from 'react';
import {TopBar} from '../../module/top-bar';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import {Row, Col, Tag, Icon, Badge, Tooltip, Comment, Avatar, BackTop, Card, Rate} from 'antd';
import {AnswerText} from './answerText';

export class QuestionAndAnswer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      topics: ['react', 'vue'],
      addAnswer: false,
      question: {
        title: 'a title',
        description: '内容简介，量大应该做到隐藏',
        answers: [
          {
            id: 1,
            avatar: 'imgUrl',
            name: 'john',
            content: '123',
            likes: 0,
            dislikes: 0,
          },
          {
            id: 2,
            avatar: 'img2',
            name: 'john2',
            content: '222',
            likes: 0,
            dislikes: 0,
          }
        ]
      },
      likes: 0,
      dislikes: 0,
      action: null,
    };
    this.like = this.like.bind(this);
    this.dislike = this.dislike.bind(this);
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
  }

  // todo，更改like数量
  like() {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  }

  //todo，更改dis数量
  dislike() {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  }

  handleAnswerClick() {
    this.setState({
      addAnswer: true
    });
  }

  render() {
    const self = this;
    const question = self.state.question;
    const {likes, dislikes, action} = this.state;
    const actions = [
      <span>
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === 'liked' ? 'filled' : 'outlined'}
            onClick={self.like}
          />
        </Tooltip>
        <span style={{paddingLeft: 8, cursor: 'auto'}}>
          {likes}
        </span>
      </span>,
      <span>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === 'disliked' ? 'filled' : 'outlined'}
            onClick={self.dislike}
          />
        </Tooltip>
        <span style={{paddingLeft: 8, cursor: 'auto'}}>
          {dislikes}
        </span>
      </span>,
      // todo，补充标签
      <span>Reply to</span>,
    ];
    return (
      <div>
        <TopBar></TopBar>
        <div>
          <Row>
            <Col span={16} style={{paddingLeft: '20px', paddingTop: '20px'}}>
              {/*需要调整大小和hover显示*/}
              <Row style={{
                margin: '3px 5px 3px 0',
                verticalAlign: 'middle'
              }}>
                {self.state.topics.map((itm) => {
                  return <button
                    key={itm}
                    type="button"
                    className="btn btn-outline-info btn-rounded waves-effect"
                  >itm</button>;
                })}

              </Row>
              <Row><h4 style={{paddingLeft: '7px'}}>{question.title}</h4></Row>
              <Row><span style={{paddingLeft: '7px'}}>{question.description}</span></Row>
              <Row>
                <Col span={14}>
                  <div style={{display: 'flex'}}>
                    <div>
                      <button
                        type="button"
                        className="btn btn-outline-default btn-rounded waves-effect"
                      >
                        <Icon type="left"/>
                        <span>关注</span>
                      </button>

                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-outline-default btn-rounded waves-effect"
                        onClick={this.handleAnswerClick}
                      >
                        <Icon type="left"/>
                        <span>回答</span>
                      </button>

                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-outline-default btn-rounded waves-effect"
                      >
                        <Icon type="left"/>
                        <span>邀请回答</span>
                      </button>

                    </div>
                  </div>
                </Col>
                <Col span={10}>
                  <Tooltip placement="top" title={'评论'}>
                    <Icon style={{fontSize: '20px', margin: '10px'}} type="message"/>
                  </Tooltip>
                  <Tooltip placement="top" title={'反对'}>
                    <Icon style={{fontSize: '20px', margin: '10px'}} type="arrow-down"/>
                  </Tooltip>
                  <Tooltip placement="top" title={'facebook'}>
                    <Icon style={{fontSize: '20px', margin: '10px'}} type="facebook"/>
                  </Tooltip>
                  <Tooltip placement="top" title={'twitter'}>
                    <Icon style={{fontSize: '20px', margin: '10px'}} type="twitter"/>
                  </Tooltip>

                </Col>

              </Row>
              {self.state.addAnswer ?
                <div style={{
                  margin: '10px',
                  borderBottom: '1px solid #ccc',
                  color: '#666',
                }}>
                  <Col span={24} style={{paddingTop: '5px'}}>
                    <Row>
                      <Col span={2}>
                        <span>头像</span>
                      </Col>
                      <Col span={16}>
                        <Row><span>your name</span></Row>
                        <Row><span>添加</span></Row>
                      </Col>
                      <Col span={6} style={{textAlign: 'right'}}>
                        <span>匿名回答</span>
                      </Col>
                    </Row>
                    <Row><AnswerText></AnswerText></Row>
                    <Row>
                      <button type="button" className="btn btn-outline-primary btn-rounded waves-effect">提交回答
                      </button>
                    </Row>
                  </Col>

                </div>
                : ''}
              <h4 style={{paddingLeft: '7px', marginTop: '5px', marginBottom: '5px'}}>{question.answers.length}个回答</h4>
              <div style={{
                borderTop: '1px solid #ccc',
                color: '#666',
                display: 'block'
              }}>
                {question.answers.map((itm) => {
                  return <Comment
                    key={itm.id}
                    actions={actions}
                    author={<a>{itm.name}</a>}
                    avatar={(
                      <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                      />
                    )}
                    content={
                      <p>itm.content</p>
                    }
                    datetime={(
                      <Tooltip title={'时间'}>
                        <span>{'时间差'}</span>
                      </Tooltip>
                    )}
                  />;
                })}

              </div>
            </Col>
            <Col span={8} style={{marginTop:'15px'}}>
              <Card
                title="相关问题"
                style={{ width: 300 }}
              >
                <div style={{
                  borderTop: '1px solid #ccc',
                  color: '#666',
                  display: 'block',
                  padding: '10px 5px 0px 23px'}}>
                  <div>
                    <a href="#!" target={'_blank'} style={{marginRight: '10px'}}>相关问题1</a>
                    <span className={'ant-list-item-meta-description-answer'}>n个回答</span>
                  </div>
                  <div>
                    <a href="#!" target={'_blank'} style={{marginRight: '10px'}}>相关问题1</a>
                    <span className={'ant-list-item-meta-description-answer'}>n个回答</span>
                  </div>
                  <div>
                    <a href="#!" target={'_blank'} style={{marginRight: '10px'}}>很长的问题应该能自动换行才对，例如这样进行换行，应该没问题</a>
                    <span className={'ant-list-item-meta-description-answer'}>n个回答</span>
                  </div>
                </div>
              </Card>
              <Card
                title="推荐话题"
                style={{ 
                  width: 300, 
                  borderTop: '1px solid #ccc',
                  color: '#666',
                  display: 'block', }}
              >
                <div style={{
                  borderTop: '1px solid #ccc',
                  color: '#666',
                  display: 'block',
                  padding: '10px 5px 0px 23px',
                  marginBottom: '5px'}}>
                  <Row>
                    <Col span={6}>这里是一张图片</Col>
                    <Col span={18}>
                      <Row><span>推荐的标题1</span></Row>
                      <Row><Rate style={{fontSize:'15px'}} defaultValue={3} /><span className={'ant-list-item-meta-description-answer'}>n个人参与</span></Row>
                    </Col>
                  </Row>
                </div>
                <div style={{
                  borderTop: '1px solid #ccc',
                  color: '#666',
                  display: 'block',
                  padding: '10px 5px 0px 23px',
                  marginBottom: '5px'
                }}>
                  <Row>
                    <Col span={6}>这里是一张图片</Col>
                    <Col span={18}>
                      <Row><span>推荐的标题2</span></Row>
                      <Row><Rate style={{fontSize:'15px'}} defaultValue={3} /><span className={'ant-list-item-meta-description-answer'}>n个人参与</span></Row>
                    </Col>
                  </Row>
                </div>
                <div style={{
                  borderTop: '1px solid #ccc',
                  color: '#666',
                  display: 'block',
                  padding: '10px 5px 0px 23px',
                  marginBottom: '5px'}}>
                  <Row>
                    <Col span={6}>这里是一张图片</Col>
                    <Col span={18}>
                      <Row><span>推荐的标题3</span></Row>
                      <Row><Rate style={{fontSize:'15px'}} defaultValue={3} /><span className={'ant-list-item-meta-description-answer'}>n个人参与</span></Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <BackTop />
      </div>
    );
  }
}
