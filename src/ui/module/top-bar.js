import React from 'react';
import { Menu, Icon ,Button} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={current:'mail'};
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
         // selectedKeys={[this.state.current]}
          mode="horizontal"
          gutter={48}
        >
       
          <Menu.Item key="mail">
            <Icon type="mail" />YouthChina
          </Menu.Item>
          <Menu.Item >
            <Button target="" type="dashed" icon="search">Search</Button>
         
            <Button type="primary" shape="circle" icon="search" />
            
          </Menu.Item>
          <Menu.Item key="app" >
            <Icon type="appstore" />为你精选
          </Menu.Item>
          <SubMenu title={<span className="submenu-title-wrapper">招聘</span>}>
            <MenuItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="" target="_blank" rel="noopener noreferrer">企业Live</a>
          </Menu.Item>
          <Menu.Item key="squre">
            <a href="" target="_blank" rel="noopener noreferrer">青年社区</a>
          </Menu.Item>
        </Menu>
        
      </div
       >
    );
  }
}

export {TopBar};
