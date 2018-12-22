import React from 'react';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import {TopBar} from '../../module/top-bar';
import Topic from './topic';
import SideBar from './sideBar';

class Question extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      qList: {}
    };
  }

  render() {
    return (
      <div>
        <TopBar></TopBar>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="8">
              <Topic></Topic>
            </MDBCol>
            <MDBCol md="4">
              <SideBar></SideBar>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      
    );
  }
}

export default Question;
