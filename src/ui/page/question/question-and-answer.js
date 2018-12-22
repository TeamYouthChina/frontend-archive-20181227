import React from 'react';
import {TopBar} from '../../module/top-bar';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import {Row, Col, Tag, Icon, Badge, Tooltip, Comment, Avatar, BackTop, Card, Rate, List} from 'antd';
import {AnswerText} from './answerText';
import Comments from './comments';

export class QuestionAndAnswer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      topics: ['react', 'vue'],
      addAnswer: false,
      listData: [
        {
          href: 'http://ant.design',
          title: 'ant design part 1',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
          content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          showComments: false,
        },
        {
          href: 'http://ant.design',
          title: 'ant design part 2',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
          content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          showComments: false,
        },
        {
          href: 'http://ant.design',
          title: 'ant design part 3',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
          content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          showComments: false,
        },
        {
          href: 'http://ant.design',
          title: 'ant design part 4',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
          content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          showComments: false,
        },
        {
          href: 'http://ant.design',
          title: 'ant design part 5',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
          content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          showComments: false,
        },
        {
          href: 'http://ant.design',
          title: 'ant design part 6',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
          content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          showComments: false,
        },
        {
          href: 'http://ant.design',
          title: 'ant design part 7',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
          content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          showComments: false,
        },
        {
          href: 'http://ant.design',
          title: 'ant design part 8',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
          content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          showComments: false,
        }
      ],
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
    this.handleCommentClick = this.handleCommentClick.bind(this);
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

  // 展开回答
  handleAnswerClick() {
    this.setState({
      addAnswer: true
    });
  }

  // todo,展开评论,分页有问题
  handleCommentClick(i) {
    const list = this.state.listData
    list[i].showComments = !list[i].showComments
    console.log(list[i].showComments)
    this.setState({
      listData: list
    });
    
  }

  render() {
    const self = this;
    const question = self.state.question;
    
    const IconText = ({type, text}) => (
      <span><Icon type={type} style={{marginRight: 8}}/>{text}</span>
    );
    const listData = self.state.listData;
    
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
                <List
                  itemLayout="vertical"
                  size="large"
                  pagination={{
                    onChange: (page) => {
                      console.log(page);
                    },
                    pageSize: 3,
                  }}
                  dataSource={listData}
                  renderItem={(item, i) => (
                    <div>
                      <List.Item
                        key={item.title}
                        actions={[
                          <IconText type="star-o" text="156"/>,
                          <IconText type="like-o" text="156"/>,
                          <span onClick={this.handleCommentClick.bind(this, i)}>
                              <IconText  type="message" text="2"/>
                            </span>,
                          
                        ]
                          
                        }
                        extra={<img width={272} alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>}
                      >
                        <List.Item.Meta
                          avatar={<Avatar src={item.avatar}/>}
                          title={<a href={item.href}>{item.title}</a>}
                          description={item.description}
                        />
                        {item.content}
                      </List.Item>
                      <Comments isShow={item.showComments}></Comments>
                    </div>
                  )}
                />,
              </div>
            </Col>
            <Col span={8} style={{marginTop: '15px'}}>
              <Card
                title="相关问题"
                style={{width: 300}}
              >
                <div style={{
                  borderTop: '1px solid #ccc',
                  color: '#666',
                  display: 'block',
                  padding: '10px 5px 0px 23px'
                }}>
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
                  display: 'block',
                }}
              >
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
                      <Row><span>推荐的标题1</span></Row>
                      <Row><Rate style={{fontSize: '15px'}} defaultValue={3}/><span
                        className={'ant-list-item-meta-description-answer'}>n个人参与</span></Row>
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
                      <Row><Rate style={{fontSize: '15px'}} defaultValue={3}/><span
                        className={'ant-list-item-meta-description-answer'}>n个人参与</span></Row>
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
                      <Row><span>推荐的标题3</span></Row>
                      <Row><Rate style={{fontSize: '15px'}} defaultValue={3}/><span
                        className={'ant-list-item-meta-description-answer'}>n个人参与</span></Row>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
        <BackTop/>
      </div>
    );
  }
}
