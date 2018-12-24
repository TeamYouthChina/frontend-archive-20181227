import React from 'react';
import {TopBarg} from '../../module/bar-general';
import {FooterPage} from '../../module/foot';
import {
  Col,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  Progress,
  Row,
  MDBFileInput,
  MDBBtn
} from 'mdbreact';

class ResumePost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TopBarg/>

        <Row top>
          <Col md="7" className="offset-md-1">
            <p>
              <MDBCard className="my-5 px-3 pb-3">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md="2">

                      <img
                        className="img-fluid rounded z-depth-1-half mb-3"
                        src="https://ws1.sinaimg.cn/large/94365dd2ly1fyhhfjkhk7j2069069glh.jpg"
                        alt=""
                        style={{width: '100px', height:'100px'}}
                      />


                    </MDBCol>
                    <MDBCol>
                      <h5 className="font-weight-bold mb-3 p-0">
                        <strong>数据分析实习(2019 Summer), GE 通用电气</strong>
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
                            <Col md="7" >
                              <Progress material value={90} height="10px" style={{paddingTop:'20px'}}>
                                90%
                              </Progress>
                            </Col>
                          </Row>
                        </Col>
                      </Row>

                    </MDBCol>

                  </MDBRow>
                  <br/>
                  <br/>
                 
                  <MDBRow className="px-3">
                    <h5><strong>上传简历</strong></h5>
                  </MDBRow>
                  <MDBRow bottom>
                    <Col md="10">
                     
                      <MDBFileInput />
                    </Col>
                    <Col md="2">
                      <br/>
                      <MDBBtn color="primary" size="sm">上传</MDBBtn>
                    </Col>
                  </MDBRow>
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

export {ResumePost};
