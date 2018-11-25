import React from 'react';
import {Navbar, Nav, Form, Button, FormControl, NavDropdown, Container, Col} from 'react-bootstrap';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }
 
  
  render() {
    return (
      /*<div
        style={{
          background: '#1569e0',
          boxShadow: '0 0 4px 1px rgba(0,0,0,0.05), 2px 2px 6px 2px rgba(0,0,0,0.15)',
          position: 'fixed',
          height: '55px',
          width: document.body.offsetWidth,
          zIndex: 1
        }}
      >*/
      <div className="container-fluid">
       

        <Navbar bg="primary" variant="dark" expand="lg">
          
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/icon2.png"
              width="26"
              height="30"
              className="d-inline-block align-top"
            />
            {' YouthChina'}
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">为你精选</Nav.Link>
            <Nav.Link href="#features">招聘</Nav.Link>
            <Nav.Link href="#pricing">企业live</Nav.Link>
            <Nav.Link href="#pricing">青年社团</Nav.Link>
          </Nav>
             
          
          <Button href="#" variant="light" block className="mr-auto">
            搜索
          </Button>
          
            
          <NavDropdown title="登录" id="basic-nav-dropdown" >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
            
        </Navbar>



      </div>
    );
  }
}

export {TopBar};
