import React from 'react';
import {TopBarg} from '../../module/bar-general';
import {FooterPage} from '../../module/foot';
import {
  Col,
  MDBAvatar,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardUp,
  MDBCol,
  MDBIcon,
  MDBMask,
  MDBRow,
  MDBView,
  Progress,
  Row,
  View,
  Mask
} from 'mdbreact';


class JobInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TopBarg/>

        <div style={{marginBottom: '-250px'}}>
          <View>

            <img className="d-block w-100 card-background"
                 src="https://ws1.sinaimg.cn/large/94365dd2ly1fyhf1flx7mj20lp04kmyy.jpg"/>
            <Mask overlay="indigo-light" pattern={7} style={{flexDirection: 'column', height: '100vh'}}
                  className="flex-center  text-white text-center">

            </Mask>
          </View>

        </div>

        <Row top>
          <Col md="8" className="offset-md-1">
            <p>
              <MDBCard className="my-5 px-3 pb-3">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md="2">

                      <img
                        className="img-fluid rounded z-depth-1-half mb-3"
                        src="https://ws1.sinaimg.cn/large/94365dd2ly1fyhhfjkhk7j2069069glh.jpg"
                        alt=""
                        style={{width: '100px', height: '100px'}}
                      />


                    </MDBCol>
                    <MDBCol md="8">
                      <h5 className="font-weight-bold mb-3 p-0">
                        <strong>数据分析实习(2019 Summer), GE 通用电气</strong>
                        <MDBIcon icon="bookmark-o" size="1x" className="amber-text px-3"/>
                      </h5>

                      <br/>
                      <Row>

                        <Col>工作类型：实习（3-6个月）</Col>
                        <Col>申请截止：02/01/2019</Col>
                      </Row>
                      <Row>
                        <Col>地点：上海</Col>
                        <Col>
                          <Row bottom>
                            <Col md="5">
                              匹配度：
                            </Col>
                            <Col md="7">
                              <Progress material value={90} height="10px" style={{paddingTop: '20px'}}>
                                90%
                              </Progress>
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                    </MDBCol>
                    <MDBCol md="2">
                      <ul className="list-inline">
                        <li className="list-inline-item"><MDBBtn color="primary" size="sm" outline rounded>在线申请</MDBBtn>
                        </li>
                      </ul>
                    </MDBCol>
                  </MDBRow>
                  <br/>
                  <MDBRow>
                    <MDBCol>

                      <h4>
                        <strong>职位描述</strong>
                      </h4>
                      <h5>
                        <strong>Candidate requirements</strong>
                      </h5>
                      <p>
                        <ul>
                          <li>Good knowledge of programming lanuguage(C++, Java).</li>
                          <li>Purus sodales ultricies</li>
                          <li>Vestibulum laoreet porttitor sem</li>
                          <li>Ac tristique libero volutpat at</li>
                        </ul>
                      </p>
                      <h5>
                        <strong>Good to have</strong>
                      </h5>
                      <p>
                        <ul>
                          <li>Good knowledge of programming lanuguage(C++, Java).</li>
                          <li>Purus sodales ultricies</li>
                          <li>Vestibulum laoreet porttitor sem</li>
                          <li>Ac tristique libero volutpat at</li>
                        </ul>
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </p>
            <p>
              <MDBCard className="my-5 px-3 pb-3">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol>
                      <h4>
                        <strong>公司详情</strong>
                      </h4>
                      <p>
                        Through our family of apps and services, we are building a different kind of company that
                        connects billions of people around the world, gives them ways to share what matters most to
                        them, and helps bring people closer together. Whether we're creating new products or helping a
                        small business expand its reach, people at Facebook are builders at heart. Our global teams are
                        constantly iterating, solving problems, and working together to empower people around the world
                        to build community and connect in meaningful ways.
                      </p>

                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </p>
            <MDBCard
              className="my-5 px-3 pt-4"
            >

              <MDBCardBody className="py-0">
                <h4>
                  <strong>问答</strong>
                </h4>
                <div>

                  <div className="input-group">
                    <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon">
                            <i className="fa fa-pencil prefix"></i>
                          </span>
                    </div>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                  </div>
                  <br/>
                  <Row end>
                    <Col md="2">
                      <MDBBtn color="indigo">提问</MDBBtn>
                    </Col>
                  </Row>

                </div>
                <hr/>
                <h5>
                  <strong>问题1： Our global teams are constantly iterating, solving problems, and working together to
                    empower people around the world to build community and connect in meaningful ways.</strong>
                </h5>


                <MDBRow className="px-3 pt-4">
                  <div className="mdb-feed">
                    <div className="news">
                      <div className="label">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1-mini.jpg"
                          alt=""
                          className="rounded-circle z-depth-1-half"
                        />
                      </div>
                      <div className="excerpt">
                        <div className="brief">

                          John Doe
                          <div className="date">1 hour ago</div>
                          <p>问题的答案，J回答了这个问题</p>
                        </div>
                        <div className="feed-footer">
                          <a href="#!" className="like">
                            <MDBIcon icon="heart"/>
                            <span>5 likes</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="news">
                      <div className="label">
                        <img
                          src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9)-mini.jpg"
                          alt=""
                          className="rounded-circle z-depth-1-half"
                        />
                      </div>
                      <div className="excerpt">
                        <div className="brief">
                          Danny Moore
                          <div href="#!" className="date">
                            7 hours ago
                          </div>
                          <p>内容</p>
                        </div>
                        <div className="feed-footer">
                          <a href="#!" className="like">
                            <MDBIcon icon="heart"/>
                            <span>11 likes</span>
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </MDBRow>

              </MDBCardBody>
            </MDBCard>
            <p>

            </p>
          </Col>
          <Col md="2">
            <p>
              <MDBCard className="my-5">
                <MDBView hover>
                  <MDBCardImage
                    top
                    src="https://ws1.sinaimg.cn/large/94365dd2ly1fyhp3r29jvj206c03vaak.jpg"
                    alt="MDBCard image cap"
                    style={{height: '200px'}}
                  />
                  <a href="#!">
                    <MDBMask overlay="white-slight"/>
                  </a>
                </MDBView>
                <MDBCardBody>
                  <a href="#!">
                    <h4>企业名称</h4>
                  </a>
                  <p>行业：XXX</p>
                  <p>公司规模：XXX</p>
                  <p>地址：XXX</p>
                  <hr/>

                  <span>
                    <MDBIcon icon="user"/>
                    83位同学实习过
                  </span>


                </MDBCardBody>
              </MDBCard>
            </p>
            <p>
              <MDBCard testimonial className="my-5">
                <MDBCardUp gradient="blue"/>
                <MDBAvatar className="mx-auto white">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                    alt=""
                    className="rounded-circle img-fluid"
                  />
                </MDBAvatar>
                <MDBCardBody>
                  <h6 className="font-weight-bold mb-4">HR：Anna Aston</h6>
                  <ul className="list-inline">
                    <li className="list-inline-item"><MDBBtn color="primary" size="sm" rounded>
                      <MDBIcon icon="heart" className="mr-1"/>关注</MDBBtn></li>
                    <li className="list-inline-item"><MDBBtn color="primary" size="sm" rounded>
                      <MDBIcon icon="envelope" className="mr-1"/>沟通</MDBBtn></li>
                  </ul>
                  <hr/>
                  <p>
                    简历产看率：
                  </p>
                  <p>
                    简历查看用时：
                  </p>
                </MDBCardBody>
              </MDBCard>
            </p>
          </Col>
        </Row>
        <FooterPage/>
      </div>
    );
  }
}

export {JobInfo};
