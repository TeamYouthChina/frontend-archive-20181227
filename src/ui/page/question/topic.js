import React from 'react';
import {MDBContainer, MDBNav, MDBNavItem, MDBNavLink,} from 'mdbreact';
import './public/style.css';
import QuestionList from './questionList.js';

class Topic extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItemClassicTabs1: '1'
    };
  }
  // 更改选中的label
  toggleClassicTabs1(tab) {
    if (this.state.activeItemClassicTabs1 !== tab) {
      this.setState({
        activeItemClassicTabs1: tab
      });
    }
  }

  render() {
    return (
      <MDBContainer>
        <div className="classic-tabs">
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
          {/*展现不同的内容*/}
          <QuestionList tabNumber={this.state.activeItemClassicTabs1}></QuestionList>
        </div>
      </MDBContainer>
    );
  }
}

export default Topic;
