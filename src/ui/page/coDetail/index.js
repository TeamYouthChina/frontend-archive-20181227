import React from 'react';

import {TopBar} from '../../module/top-bar';
import Introduction from './introduction';
import Position from './position';

import {Breadcrumb, Button, BackTop, Icon, Row, Col,Tabs} from 'antd';
import './public/style.css';

class CoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
      tags:['tag1', 'tag2']
    };
  }
  render() {
    const TabPane = Tabs.TabPane;
    const spanStyle = {
      height: 'auto',
      padding: '0',
      lineHeight: 'inherit',
      backgroundColor: 'transparen',
      border: 'none',
      borderRadius: '0',
      fontSize: '14px',
      color: '#8590A6',
      marginLeft: '40px'
    };
    const mockIntro = '123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123'
    const displayHeight = '400px'
    return (
      <div>
        <TopBar></TopBar>
        <div style={{margin:'100px',borderTop: '1px solid #eee', paddingTop:'20px'}}>
          <Row style={{marginLeft: '10px'}}>
            <Col span={4}>
              公司logo
            </Col>
            <Col span={12}>
              <Row style={{marginLeft: '10px'}}>名字 <span style={spanStyle}>n人关注</span></Row>
              <Row style={{marginLeft: '10px'}}>规模</Row>
              <Row style={{
                margin: '3px 5px 3px 0',
                verticalAlign: 'middle'
              }}>
                {this.state.tags.map((itm) => {
                  return <button
                    key={itm}
                    type="button"
                    className="btn btn-outline-info btn-rounded waves-effect"
                  >{itm}</button>;
                })}

              </Row >
            </Col>
            <Col span={8}>
              公司url
            </Col>
          </Row>
          <Row style={{marginTop:'30px'}}>
            <div className="card-container">
              <Tabs type="card">
                <TabPane tab="公司详情" key="1">
                  <Introduction message={mockIntro} displayHeight={displayHeight}></Introduction>
                </TabPane>
                <TabPane tab="发表的职位" key="2">
                  <nav className="navbar navbar-expand-lg navbar-dark primary-color">
                    <span className="navbar-brand" href="#">职位</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item active">
                          <span className="nav-link" href="#">全部 <span className="sr-only">(current)</span></span>
                        </li>
                        <li className="nav-item">
                          <span className="nav-link" href="#">技术</span>
                        </li>
                        <li className="nav-item">
                          <span className="nav-link" href="#">运营</span>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <Position></Position>
                </TabPane>
                <TabPane tab="评论" key="3">
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                </TabPane>
                <TabPane tab="问答" key="4">
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                </TabPane>
                <TabPane tab="公司福利" key="5">
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                </TabPane>
                <TabPane tab="工作环境" key="6">
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                </TabPane>
                <TabPane tab="公司Live" key="7">
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                </TabPane>
                <TabPane tab="公司照片" key="8">
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                </TabPane>
                <TabPane tab="实习生留言" key="9">
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                  <p>Content of Tab Pane 3</p>
                </TabPane>
              </Tabs>
            </div>
          </Row>
        </div>
      </div>
    );
  }
}

export default CoDetail;
