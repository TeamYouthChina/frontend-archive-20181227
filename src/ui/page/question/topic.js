import React from 'react';
import {MDBContainer, MDBNav, MDBNavItem, MDBNavLink,} from 'mdbreact';
import {Row, Col,Modal, Button } from 'antd';
import './public/style.css';
import QuestionList from './questionList.js';
import {AnswerText} from './answerText';

class Topic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItemClassicTabs1: '1',
      loading: false,
      visible: false,
    };
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  // 更改选中的label
  toggleClassicTabs1(tab) {
    if (this.state.activeItemClassicTabs1 !== tab) {
      this.setState({
        activeItemClassicTabs1: tab
      });
    }
  }
  showModal() {
    this.setState({
      visible: true,
    });
  }
  // todo，上传数据成功后才消失
  handleOk() {
    this.setState({ loading: true });
  }

  handleCancel() {
    this.setState({ visible: false });
  }

  render() {
    const { visible, loading } = this.state;
    return (
      <MDBContainer>
        <div className="classic-tabs">
          <Row>
            <Col span={18}>
              <MDBNav classicTabs color="#fff">
                {/*三个label*/}
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={
                      this.state.activeItemClassicTabs1 === '1' ? 'active' : ''
                    }
                    onClick={() => {
                      this.toggleClassicTabs1('1');
                    }}
                  >
                    为你推荐
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={this.state.activeItemClassicTabs1 === '2' ? 'active' : ''}
                    onClick={() => {
                      this.toggleClassicTabs1('2');
                    }}
                  >
                    全站热门
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={this.state.activeItemClassicTabs1 === '3' ? 'active' : ''}
                    onClick={() => {
                      this.toggleClassicTabs1('3');
                    }}
                  >
                    邀请回答
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
            </Col>
            <Col span={6} style={{paddingTop:'10px',textAlign:'right'}}>
              <button type="button" className="btn btn-outline-default btn-rounded waves-effect" onClick={this.showModal}>直接提问</button>
            </Col>
          </Row>
          <div>
            <Modal
              visible={visible}
              title={
                <Row>
                  <Col span={4}>头像</Col>
                  <Col span={20}>标题</Col>
                </Row>
              }
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>取消</Button>,
                <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                  提交问题
                </Button>,
              ]}
            >
              <div>
                <AnswerText></AnswerText>
              </div>
            </Modal>
          </div>
          <Row>
            {/*展现不同的内容*/}
            <QuestionList tabNumber={this.state.activeItemClassicTabs1}></QuestionList>
          </Row>
        </div>
      </MDBContainer>
    );
  }
}

export default Topic;
