import React from 'react';

import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, Mask, View,Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa,Col, MDBDropdownItem} from 'mdbreact';

import { BrowserRouter as Router } from 'react-router-dom';
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
    };
    
  }
  onClick(){
    this.setState({
      collapse: !this.state.collapse
    });
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  
  render() {
    return (
      <div>
        <header>

     
          <Router>
            <Navbar color="transparent" dark expand="md" fixed="top" scrolling>
              <Col md="1">
                <NavbarBrand href="/">
                  <strong>YouthChina</strong>
                </NavbarBrand>
              </Col>
             
              <Col md="4">
                <NavbarNav center>
                  <NavItem to="#" >
                    <NavLink to="#" onClick={this.toggle}>主  页</NavLink>
                  </NavItem>
                 
                  <NavItem>
                    <Dropdown>
                      <DropdownToggle  nav>
                        <div className="d-none d-md-inline">职  务</div>
                      </DropdownToggle>
                      <DropdownMenu  className="dropdown-dark"left style={{ background: '#bdbdbd' }}>
                        <DropdownItem href="#!">实  习</DropdownItem>
                        <MDBDropdownItem divider />
                        <DropdownItem href="#!">校园招聘</DropdownItem>
                        <MDBDropdownItem divider />
                        <DropdownItem href="#!">社会招聘</DropdownItem>
                       
                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>
                  <NavItem>
                    <Dropdown>
                      <DropdownToggle  nav>
                        <div className="d-none d-md-inline">探  索</div>
                      </DropdownToggle>
                      <DropdownMenu  className="dropdown-dark"left style={{ background: '#bdbdbd' }}>
                        <DropdownItem href="#!">文  章</DropdownItem>
                        <MDBDropdownItem divider />
                        <DropdownItem href="#!">视  频</DropdownItem>
                        <MDBDropdownItem divider />
                        <DropdownItem href="#!">人  脉</DropdownItem>
                        <MDBDropdownItem divider />
                        <DropdownItem href="#!">直  播（空中宣讲会）</DropdownItem>

                      </DropdownMenu>
                    </Dropdown>
                  </NavItem>
                
                </NavbarNav>
              </Col>
              
              <NavbarNav>
                <Dropdown >
                  <DropdownToggle  nav>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="搜索"
                      aria-label="Search"
                    />
                  </DropdownToggle>
                  <DropdownMenu  className="dropdown-dark"  style={{ marginLeft: '1em', verticalAlign: 'middle' }} >
                    <DropdownItem href="#!">企  业</DropdownItem>
                    <MDBDropdownItem divider />
                    <DropdownItem href="#!">公  司</DropdownItem>
                    <MDBDropdownItem divider />
                    <DropdownItem href="#!">人  脉</DropdownItem>
                    <MDBDropdownItem divider />
                    <DropdownItem href="#!">文  章</DropdownItem>
                    <MDBDropdownItem divider />
                    <DropdownItem href="#!">视  频</DropdownItem>

                  </DropdownMenu>
                </Dropdown>
                
                  
              </NavbarNav>
              
             
              <NavbarNav right>
                <NavItem>
                  <NavLink className="waves-effect waves-light" to="#!"><Fa icon="twitter" /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="waves-effect waves-light" to="#!"><Fa icon="google-plus" /></NavLink>
                </NavItem>
                <NavItem>
                  <Dropdown>
                    <DropdownToggle nav>
                      <Fa icon="user" />
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
            
          </Router>
       
        
  

            
          
    
          <View>
            
            <img className="d-block w-100" src="https://ws1.sinaimg.cn/large/94365dd2ly1fyarzle8e4j218g0hn77z.jpg" />
            <Mask overlay="black-light" style={{flexDirection: 'column', height: '100vh'}} className="flex-center  text-white text-center">
              <h2>YouthChina</h2>
              <h5>欢迎，这是一句话</h5>
  

              <br/>
              <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p>
            </Mask>
          </View>

         
        </header>
        
  

      </div>
    );
  }
}

export {TopBar};
