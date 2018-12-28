import React from 'react';
import PropTypes from 'prop-types';
import {TopBar} from '../module/top-bar';
import {languageHelper} from '../../tool/language-helper';
import {Navbar, NavbarNav, NavItem, NavLink, TopBarg} from '../module/bar-general';
import {
  Col,
  MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage,
  Select,
  Fa,
  Row,
  SelectInput, SelectOptions, SelectOption,
  MDBCollapse,
  Input,
  MDBContainer, 
  MDBTabPane, MDBTabContent,
  MDBRow, MDBCol, MDBMask, MDBBtn, MDBIcon, MDBView,
  MDBChip,
  MDBListGroup, MDBListGroupItem,
  MDBNav, MDBNavItem, MDBNavLink,
} from 'mdbreact';

import classnames from 'classnames';


/* route: '/login' */

const i18n = [
  {
    fst_tab: '文章',
    sec_tab: '视频',
    thd_tab: '人脉',
    button: '登陆'
  },
  {
    fst_tab: 'Article',
    sec_tab: 'Videos',
    thd_tab: 'Connection',
    button: 'Login'
  }
];

class Connection extends React.Component {
  constructor(props) {
    super(props);

    this.text = i18n[languageHelper(this.props.language)];
    this.state = {
      activeItemClassicTabs1: '1',
    };

  }

  toggleClassicTabs1 = (tab) => {
    if (this.state.activeItemClassicTabs1 !== tab) {
      this.setState({
        activeItemClassicTabs1: tab
      });
    }
  };


  render() {
    return (
      <div>
        <TopBarg/>
        <Row>
          <MDBCol md="7" className="offset-md-1 pt-3">
            <div className="classic-tabs">
              <MDBNav classicTabs color="cyan">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={classnames({
                      active: this.state.activeItemClassicTabs1 === '1'
                    })}
                    onClick={() => {
                      this.toggleClassicTabs1('1');
                    }}
                  >
                    {this.text.fst_tab}
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={classnames({
                      active: this.state.activeItemClassicTabs1 === '2'
                    })}
                    onClick={() => {
                      this.toggleClassicTabs1('2');
                    }}
                  >
                    {this.text.sec_tab}
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    className={classnames({
                      active: this.state.activeItemClassicTabs1 === '3'
                    })}
                    onClick={() => {
                      this.toggleClassicTabs1('3');
                    }}
                  >
                    {this.text.thd_tab}
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent
                className="card"
                activeItem={this.state.activeItemClassicTabs1}
              >
                <MDBTabPane tabId="1">
                  <p>
                    <MDBBtn color="primary">Primary</MDBBtn>
                    <MDBRow>
                      <MDBCol md="12">
                        <div className="card-group my-5">
                          <MDBCard personal className="mb-md-0 mb-4">
                            <MDBView hover>
                              <MDBCardImage
                                top
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                                alt="MDBCard image cap"
                              />
                              <a href="#!">
                                <MDBMask overlay="white-slight"/>
                              </a>
                            </MDBView>
                            <MDBCardBody>
                              <a href="#!">
                                <MDBCardTitle>Anna</MDBCardTitle>
                              </a>
                              <a href="#!" className="card-meta">
                                Friends
                              </a>
                              <MDBCardText>
                                Anna is a web designer living in New York.
                              </MDBCardText>
                              <hr/>
                              <a href="#!" className="card-meta">
                <span>
                  <MDBIcon icon="user"/>
                  83 Friends
                </span>
                              </a>
                              <p className="card-meta float-right">Joined in 2012</p>
                            </MDBCardBody>
                          </MDBCard>

                          <MDBCard personal className="mb-md-0 mb-4">
                            <MDBView hover>
                              <MDBCardImage
                                top
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                                alt="MDBCard image cap"
                              />
                              <a href="#!">
                                <MDBMask overlay="white-slight"/>
                              </a>
                            </MDBView>
                            <MDBCardBody>
                              <a href="#!">
                                <MDBCardTitle>John</MDBCardTitle>
                              </a>
                              <a href="#!" className="card-meta">
                                Coworker
                              </a>
                              <MDBCardText>John is a copywriter living in Seattle.</MDBCardText>
                              <hr/>
                              <a href="#!" className="card-meta">
                <span>
                  <MDBIcon icon="user"/>
                  48 Friends
                </span>
                              </a>
                              <p className="card-meta float-right">Joined in 2015</p>
                            </MDBCardBody>
                          </MDBCard>

                          <MDBCard personal className="mb-md-0 mb-4">
                            <MDBView hover>
                              <MDBCardImage
                                top
                                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(28).jpg"
                                alt="MDBCard image cap"
                              />
                              <a href="#!">
                                <MDBMask overlay="white-slight"/>
                              </a>
                            </MDBView>
                            <MDBCardBody>
                              <a href="#!">
                                <MDBCardTitle>Sara</MDBCardTitle>
                              </a>
                              <a href="#!" className="card-meta">
                                Coworker
                              </a>
                              <MDBCardText>Sara is a video maker living in Tokyo.</MDBCardText>
                              <hr/>
                              <a href="#!" className="card-meta">
                <span>
                  <MDBIcon icon="user"/>
                  127 Friends
                </span>
                              </a>
                              <p className="card-meta float-right">Joined in 2014</p>
                            </MDBCardBody>
                          </MDBCard>
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow center>
                      <MDBBtn color="primary" size="md">
                        Read More
                      </MDBBtn>
                    </MDBRow>
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Nihil odit magnam minima, soluta doloribus
                    reiciendis molestiae placeat unde eos molestias.
                    Quisquam aperiam, pariatur. Tempora, placeat ratione
                    porro voluptate odit minima.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="3">
                  <p>
                    Quisquam aperiam, pariatur. Tempora, placeat ratione
                    porro voluptate odit minima. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nihil odit magnam minima,
                    soluta doloribus reiciendis molestiae placeat unde eos
                    molestias.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Nihil odit magnam minima, soluta doloribus
                    reiciendis molestiae placeat unde eos molestias.
                    Quisquam aperiam, pariatur. Tempora, placeat ratione
                    porro voluptate odit minima.
                  </p>
                </MDBTabPane>
              </MDBTabContent>
            </div>
          </MDBCol>

          <MDBCol md="3" className="pt-3" style={{marginTop: '50px'}}>
            <p>
              <MDBCard style={{height: '200px', width: '400px'}}>
                <Row>
                  <Col>
                    <div className="px-10">
                      <Row center style={{marginTop: '20px'}}>
                        <MDBIcon icon="shield" size="3x"/>
                      </Row>
                      <Row center>
                        normal
                      </Row>
                    </div>
                  </Col>
                  <Col>
                    <div className="px-10">
                      <Row center style={{marginTop: '20px'}}>
                        <MDBIcon icon="shield" size="3x"/>
                      </Row>
                      <Row center>
                        normal
                      </Row>
                    </div>
                  </Col>
                  <Col>
                    <div className="px-10">
                      <Row center style={{marginTop: '20px'}}>
                        <MDBIcon icon="shield" size="3x"/>
                      </Row>
                      <Row center>
                        normal
                      </Row>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md="4">
                    <div className="px-10">
                      <Row center style={{marginTop: '20px'}}>
                        <MDBIcon icon="shield" size="3x"/>
                      </Row>
                      <Row center>
                        normal
                      </Row>
                    </div>
                  </Col>
                </Row>
              </MDBCard>
            </p>
            <p>
              <MDBCard>
                <MDBListGroup>
                  <MDBListGroupItem><MDBIcon icon="home" fixed/> Home</MDBListGroupItem>
                  <MDBListGroupItem><MDBIcon icon="book" fixed/> Library</MDBListGroupItem>
                  <MDBListGroupItem><MDBIcon icon="pencil" fixed/> Applications</MDBListGroupItem>
                  <MDBListGroupItem><MDBIcon icon="cog" fixed/> Settings</MDBListGroupItem>
                </MDBListGroup>
              </MDBCard>
            </p>
          </MDBCol>
        </Row>

      </div>
    );
  }
}

Connection.propTypes = {
  // route
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  // react
  language: PropTypes.string.isRequired
};

export {Connection};
