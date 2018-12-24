import React from 'react';

import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink,Dropdown, MDBContainer,DropdownToggle, DropdownMenu,  DropdownItem, Fa,Col,Row, MDBIcon,MDBDropdownItem, MDBCollapse,NavbarToggler, MDBBtn} from 'mdbreact';

import { BrowserRouter as Router } from 'react-router-dom';

class TopBarg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: "job"
      
      
    };
  }

  toggleCollapse = (collapseID) => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  }

  render() {
    return (
     
      <div>
          <Router>
            <div style={{height:"80px"}}>
            <Navbar color="indigo darken-1" dark expand="md" fixed="top" scrolling>
              <Col md="1" className="offset-md-1">
                <NavbarBrand href="/">
                  <strong>YouthChina</strong>
                </NavbarBrand>
              </Col>
              
              <Col md="4">
                <NavbarNav center>
                  <NavItem to="#" >
                    <NavLink to="#" >主  页</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#" onClick={()=> this.toggleCollapse("job")}>职  务</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="#" onClick={()=> this.toggleCollapse("explore")}>探  索</NavLink>
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
                  <DropdownMenu  className="dropdown-indigo darken-1"  style={{ marginLeft: '1em', verticalAlign: 'middle' }} >
                    <DropdownItem href="/search">企  业</DropdownItem>
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


              <NavbarNav right style={{marginRight:"5em"}}>
             
                <NavItem>
                  <Dropdown >
                    <DropdownToggle nav>
                     <Row>
                       <Col md="4">
                        <Fa icon="user" />
                       </Col>
                       <Col md="8">
                         <p className="h6">Username</p>
                        
                       </Col>
                       
                     </Row>
                       
                     
                    </DropdownToggle>
                    <DropdownMenu color="indigo darken-1" basic left>
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
            </div>
          </Router>
        
        <main>
        <MDBCollapse id="job" isOpen={this.state.collapseID}>
         
          <Navbar className="indigo-text" color="grey lighten-5" expand="md">
            <Col md="6" className="offset-md-4">
            <NavbarNav left >
              <NavItem active >
                <NavLink to="#!">
                  <p className="h6 indigo-text">职  务</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="#!">
                  <p className="h6 indigo-text">| 实  习</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#!">
                  <p className="h6 indigo-text">| 校园招聘</p>
                </NavLink>
              </NavItem>
              <NavItem>

                <NavLink to="#!">
                  <p className="h6 indigo-text">| 社会招聘</p>
                </NavLink>
              </NavItem>
            </NavbarNav>
            </Col>
          </Navbar>
        </MDBCollapse>
          <MDBCollapse id="explore" isOpen={this.state.collapseID} >
        
            <Navbar className="indigo-text" color="grey lighten-5" expand="md">
              <Col md="6" className="offset-md-5">
              <NavbarNav left>
                <NavItem active >
                  <NavLink to="#!">
                    <p className="h6 indigo-text">探  索</p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink to="#!">
                    <p className="h6 indigo-text">| 文  章</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#!">
                    <p className="h6 indigo-text">| 视  频</p>
                  </NavLink>
                </NavItem>
                <NavItem>

                  <NavLink to="#!">
                    <p className="h6 indigo-text">| 人  脉</p>
                  </NavLink>
                </NavItem>
                <NavItem>

                  <NavLink to="#!">
                    <p className="h6 indigo-text">| 直  播（空中宣讲会）</p>
                  </NavLink>
                </NavItem>
              </NavbarNav>
              </Col>

            </Navbar>
          </MDBCollapse>
        </main>
      </div>
     
    );
  }
}

export {TopBarg};
