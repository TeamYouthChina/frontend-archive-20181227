import React from 'react';
import {Menu, Icon} from 'antd';
import {
  Col,
  Dropdown, DropdownItem,
  DropdownMenu,
  DropdownToggle, Fa, MDBDropdownItem, Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink
} from 'mdbreact';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export class BarArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Navbar color="transparent" dark expand="md" fixed="top" scrolling style={{background:'#16b8de'}}>
        <Col md="1">
          <NavbarBrand href="/">
            <strong>YouthChina</strong>
          </NavbarBrand>
        </Col>

        <Col md="4">
          <NavbarNav center>
            <NavItem to="/">
              <NavLink to="/" onClick={this.toggle}>主 页</NavLink>
            </NavItem>
            <NavItem to="/">
              <NavLink to="/" onClick={this.toggle}>关注</NavLink>
            </NavItem>
            <NavItem to="/">
              <NavLink to="/article-editor" onClick={this.toggle}>发表文章</NavLink>
            </NavItem>
          </NavbarNav>
        </Col>
        <NavbarNav right>
          <NavItem>
            <NavLink className="waves-effect waves-light" to="#!"><Fa icon="twitter"/></NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="waves-effect waves-light" to="#!"><Fa icon="google-plus"/></NavLink>
          </NavItem>
          <NavItem>
            <Dropdown>
              <DropdownToggle nav>
                <Fa icon="user"/>
              </DropdownToggle>
              <DropdownMenu color="dark" basic right>
                <DropdownItem href="#!">个人主页</DropdownItem>
                <DropdownItem href="#!">我的消息</DropdownItem>
                <DropdownItem href="#!">我的申请</DropdownItem>
                <DropdownItem href="#!">我的好友</DropdownItem>
                <DropdownItem href="#!">我的关注</DropdownItem>
                <DropdownItem href="#!">帮助</DropdownItem>
                <DropdownItem href="#!">设置</DropdownItem>
                <DropdownItem href="#!">退出</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavItem>
        </NavbarNav>
      </Navbar>
    );
  }
}

