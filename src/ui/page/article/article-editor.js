import React from 'react';
import {BarArticle} from './bar-article';
import {Row, Col, Breadcrumb, Button, BackTop, Icon} from 'antd';
import {
  Carousel,
  CarouselInner,
  CarouselItem,
  Container,
  MDBRow,
  MDBCol,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText
} from 'mdbreact';
import {Button as MdbBtn} from 'mdbreact';
import Comments from '../question/comments.js';

export class ArticleEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: ['react', 'vue']
    };

  }

  render() {
    const spanStyle = {
      height: 'auto',
      padding: '0',
      lineHeight: 'inherit',
      backgroundColor: 'transparen',
      border: 'none',
      borderRadius: '0',
      fontSize: '14px',
      color: '#8590A6'
    };
    return (
      <div>
        <div>
          <BarArticle></BarArticle>
        </div>
        <div style={{margin: '100px 300px',}}>
          <Row>
            <h4>title</h4>
          </Row>
          <Row style={{

            borderBottom: '1px solid #ccc',
            color: '#666',
          }}>
            <Row style={{marginBootom: '30px'}}>
              <Col span={4}>
                头像
              </Col>
              <Col span={14}>
                <Row>
                  author
                </Row>
                <Row>
                  <Breadcrumb>
                    <Breadcrumb.Item>标签1</Breadcrumb.Item>
                    <Breadcrumb.Item>标签2</Breadcrumb.Item>
                  </Breadcrumb>
                </Row>
              </Col>
              <Col span={6} style={{textAlign: 'right'}}>
                <Button type="primary">关注他</Button>
              </Col>
            </Row>
            <Row>
              <span style={spanStyle}>n人关注他</span>
            </Row>
          </Row>
          <Row style={{padding: '10px'}}>
            <div>
              <strong>content list here</strong><br/>
              <strong>也可以加图片</strong>
            </div>
          </Row>
          <Row>
            <span style={spanStyle}>发布于1111</span>
          </Row>
          <Row style={{
            margin: '3px 5px 3px 0',
            verticalAlign: 'middle'
          }}>
            {this.state.topics.map((itm) => {
              return <button
                key={itm}
                type="button"
                className="btn btn-outline-info btn-rounded waves-effect"
              >{itm}</button>;
            })}

          </Row>
          <Row>
            <Col span={4}>
              <Icon type="up" style={{marginRight: '5px'}}/>
              <span style={spanStyle}>点赞</span>
            </Col>
            <Col span={4}><Icon type="down" style={{marginRight: '5px'}}/><span style={spanStyle}>反对</span></Col>
            <Col span={4}><Icon type="message" style={{marginRight: '5px'}}/><span style={spanStyle}>评论</span></Col>
            <Col span={4}><Icon type="folder" style={{marginRight: '5px'}}/><span style={spanStyle}>收藏</span></Col>
            <Col span={4}><Icon type="cloud" style={{marginRight: '5px'}}/><span style={spanStyle}>分享</span></Col>
            <Col span={4}></Col>
          </Row>
        </div>
        <div style={{backgroud:'#F6F6F6'}}>
          <Row >
            <h4 style={{margin: '0px 300px 50px 300px',borderBottom: '1px solid #ccc',
              color: '#666',}}>推荐阅读</h4>
          </Row>
          <Row>
            <Container>
              <Carousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
                <CarouselInner>
                  <MDBRow>
                    {/*todo,根据获取的内容改写*/}
                    <CarouselItem itemId="1">
                      <MDBCol md="4">
                        <Card className="mb-2">
                          <CardImage className="img-fluid"
                                     src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"/>
                          <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>
                              Some quick example text to build on the card title and
                              make up the bulk of the card's content.
                            </CardText>
                            <MdbBtn color="primary">Button</MdbBtn>
                          </CardBody>
                        </Card>
                      </MDBCol>
                      <MDBCol md="4" className="clearfix d-none d-md-block">
                        <Card className="mb-2">
                          <CardImage className="img-fluid"
                                     src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"/>
                          <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>
                              Some quick example text to build on the card title and
                              make up the bulk of the card's content.
                            </CardText>
                            <MdbBtn color="primary">Button</MdbBtn>
                          </CardBody>
                        </Card>
                      </MDBCol>
                      <MDBCol md="4" className="clearfix d-none d-md-block">
                        <Card className="mb-2">
                          <CardImage className="img-fluid"
                                     src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"/>
                          <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>
                              Some quick example text to build on the card title and
                              make up the bulk of the card's content.
                            </CardText>
                            <MdbBtn color="primary">Button</MdbBtn>
                          </CardBody>
                        </Card>
                      </MDBCol>
                    </CarouselItem>
                    <CarouselItem itemId="2">
                      <MDBCol md="4">
                        <Card className="mb-2">
                          <CardImage className="img-fluid"
                                     src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg"/>
                          <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>
                              Some quick example text to build on the card title and
                              make up the bulk of the card's content.
                            </CardText>
                            <MdbBtn color="primary">Button</MdbBtn>
                          </CardBody>
                        </Card>
                      </MDBCol>
                      <MDBCol md="4" className="clearfix d-none d-md-block">
                        <Card className="mb-2">
                          <CardImage className="img-fluid"
                                     src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg"/>
                          <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>
                              Some quick example text to build on the card title and
                              make up the bulk of the card's content.
                            </CardText>
                            <MdbBtn color="primary">Button</MdbBtn>
                          </CardBody>
                        </Card>
                      </MDBCol>
                      <MDBCol md="4" className="clearfix d-none d-md-block">
                        <Card className="mb-2">
                          <CardImage className="img-fluid"
                                     src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg"/>
                          <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>
                              Some quick example text to build on the card title and
                              make up the bulk of the card's content.
                            </CardText>
                            <MdbBtn color="primary">Button</MdbBtn>
                          </CardBody>
                        </Card>
                      </MDBCol>
                    </CarouselItem>
                    <CarouselItem itemId="3">
                      <MDBCol md="4">
                        <Card className="mb-2">
                          <CardImage className="img-fluid"
                                     src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg"/>
                          <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>
                              Some quick example text to build on the card title and
                              make up the bulk of the card's content.
                            </CardText>
                            <MdbBtn color="primary">Button</MdbBtn>
                          </CardBody>
                        </Card>
                      </MDBCol>
                      <MDBCol md="4" className="clearfix d-none d-md-block">
                        <Card className="mb-2">
                          <CardImage className="img-fluid"
                                     src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg"/>
                          <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardText>
                              Some quick example text to build on the card title and
                              make up the bulk of the card's content.
                            </CardText>
                            <MdbBtn color="primary">Button</MdbBtn>
                          </CardBody>
                        </Card>
                      </MDBCol>
                      <MDBCol md="4" className="clearfix d-none d-md-block">
                        <Card className="mb-2">
                          <CardImage className="img-fluid"
                                     src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg"/>
                          <CardBody>
                            <CardTitle>title</CardTitle>
                            <CardText>
                              brief
                            </CardText>
                            <MdbBtn color="primary">canyuhuati</MdbBtn>
                          </CardBody>
                        </Card>
                      </MDBCol>
                    </CarouselItem>
                  </MDBRow>
                </CarouselInner>
              </Carousel>
            </Container>
          </Row>
          <div style={{margin: '100px 300px',}}>
            <Comments isShow={true}></Comments>
          </div>
        </div>
        
        <BackTop/>
      </div>
    );
  }
}
