import React from 'react';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';

class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const style = {};
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="8">
            <MDBRow>.col-12 .col-md-8</MDBRow>
            <MDBRow>.col-6 .col-md-4</MDBRow>
          </MDBCol>
          <MDBCol md="4">hello3</MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default SideBar;
