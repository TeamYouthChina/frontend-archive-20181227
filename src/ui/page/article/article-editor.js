import React from 'react';
import {Col, Row, Menu, Dropdown, Icon,Input} from 'antd';
import {AnswerText} from '../question/answerText';

export class ArticleEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      current: e.key,
    });
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <p>发布文章</p>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );
    const topBarStyle = {
      borderColor: 'rgba(0, 0, 0, 0.08)',
      borderBottom: '1px solid #eee',
      color: '#808080',
      background: 'rgba(255, 255, 255, 0.97)',
      zIndex: '2',
      padding: '20px'
    };
    return (
      <div>
        <Row style={topBarStyle}>
          <Col span={6}><span>YouthChina</span></Col>
          <Col span={2}><strong>写文章</strong></Col>
          <Col span={6}><span>草稿已保存</span></Col>
          <Col span={2}><a href='/'>我的草稿</a></Col>
          <Col span={4}>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" href="#">
                <button style={{
                  borderRadius: '4px',
                  borderColor:'#0080ff',
                  verticalAlign:'middle',
                  textAlign: 'center'
                }}><Icon type="edit" />邀请预览</button> 
              </a>
            </Dropdown></Col>
          <Col span={4}>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" href="#">
                <button style={{
                  borderRadius: '4px',
                  borderColor:'#0080ff', 
                  verticalAlign:'middle',
                  textAlign: 'center'}}>发布文章<Icon type="down"/></button> 
              </a>
            </Dropdown>
          </Col>
        </Row>
        <div style={{padding:'100px'}}>
          <Input size="large" placeholder="请输入标题" />
          <br/>
          <br/>
          <br/>
          <AnswerText></AnswerText>
        </div>
      </div>

    );
  }
}


