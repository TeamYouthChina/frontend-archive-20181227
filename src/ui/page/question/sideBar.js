import React from 'react';
// import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import {Menu, Icon, Badge, Row, Col, Card} from 'antd';
import './public/style.css';

class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick() {
  }

  render() {
    return (
      <div>
        <div>
          <div className={'zm-side-nav-group'}>
            <ul className={'zm-side-nav'}>
              <li className={'zm-side-nav-li'}>
                <a href="#!" className={'zm-side-nav-link'}>
                  <Icon type="book"/>
                  <span>我的收藏</span>
                  <Badge count={109} style={{backgroundColor: '#888'}}/>
                </a>
              </li>
              <li className={'zm-side-nav-li'}>
                <a href="#!" className={'zm-side-nav-link'}>
                  <Icon type="inbox"/>
                  <span>我关注的问题</span>
                  <Badge count={109} style={{backgroundColor: '#888'}}/>
                </a>
              </li>
              <li className={'zm-side-nav-li'}>
                <a href="#!" className={'zm-side-nav-link'}>
                  <Icon type="diff"/>
                  <span>邀请我回答的问题</span>
                  <Badge count={109} style={{backgroundColor: '#888'}}/>
                </a>
              </li>
            </ul>
          </div>
          <div className={'zm-side-nav-group'}>
            <ul className={'zm-side-nav'}>
              <li className={'zm-side-nav-li'}>
                <a href="#!" className={'zm-side-nav-link'}>
                  <Icon type="global"/>
                  <span>社区中心</span>
                </a>
              </li>
              <li className={'zm-side-nav-li'}>
                <a href="#!" className={'zm-side-nav-link'}>
                  <Icon type="copyright" />
                  <span>版权中心</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={'SidebarSection'}>
          <Card
            title="求职圆桌"
            extra={<a href="#">查看更多内容>></a>}
            style={{ width: 300,
              padding: '0px 0px 0px 25px' }}
          >
            <p style={{marginLeft:'25px'}}>话题1</p>
            <p style={{marginLeft:'25px'}}>话题2</p>
            <p style={{marginLeft:'25px'}}>话题3</p>
          </Card>
        </div>
        <div className={'SidebarSection'}>
          <Card
            title="其他话题"
            extra={<a href="#">查看更多内容>></a>}
            style={{ width: 300, padding: '0px 0px 0px 25px' }}
          >
            <p style={{marginLeft:'25px'}}>话题1</p>
            <p style={{marginLeft:'25px'}}>话题2</p>
            <p style={{marginLeft:'25px'}}>话题3</p>
          </Card>
        </div>
      </div>
      
      
      
    );
  }
}

export default SideBar;
