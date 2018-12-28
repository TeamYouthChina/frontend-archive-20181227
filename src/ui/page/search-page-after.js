import React from 'react';
import PropTypes from 'prop-types';
import {TopBar} from '../module/top-bar';
import {languageHelper} from '../../tool/language-helper';
import {Navbar, NavbarNav, NavItem, NavLink, TopBarg} from '../module/bar-general';
import {
  Col,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  Select,
  Fa,
  Row,
  SelectInput,
  SelectOptions,
  SelectOption,
  MDBCollapse,
  Input,
  MDBCardBody, MDBCardHeader, MDBBtn, MDBNav, MDBNavItem, MDBNavLink,
  MDBContainer, MDBTabPane, MDBTabContent,
  MDBRow, MDBCol, MDBMask, MDBIcon, MDBView,
  MDBChip,
  MDBListGroup, MDBListGroupItem
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

class SearchPageAfter extends React.Component {
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
                    <MDBRow>
                      <MDBCol lg="5" xl="4">
                        <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                          <img
                            className="img-fluid"
                            src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                            alt=""
                          />
                          <a href="#!">
                            <MDBMask overlay="white-slight"/>
                          </a>
                        </MDBView>
                      </MDBCol>
                      <MDBCol lg="7" xl="8">
                        <h3 className="font-weight-bold mb-3 p-0">
                          <strong>Title of the news</strong>
                        </h3>
                        <p className="dark-grey-text">
                          Nam libero tempore, cum soluta nobis est eligendi optio cumque
                          nihil impedit quo minus id quod maxime placeat facere possimus,
                          omnis voluptas assumenda est, omnis dolor repellendus et aut
                          officiis debitis cum soluta nobis est eligendi placeat facere
                          aut rerum.
                        </p>
                        <p>
                          by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 19/04/2018
                        </p>
                        <MDBBtn color="primary" size="md">
                          Read More
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                    <hr className="my-5"/>
                    <MDBRow>
                      <MDBCol lg="5" xl="4">
                        <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                          <img
                            className="img-fluid"
                            src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg"
                            alt=""
                          />
                          <a href="#!">
                            <MDBMask overlay="white-slight"/>
                          </a>
                        </MDBView>
                      </MDBCol>
                      <MDBCol lg="7" xl="8">
                        <h3 className="font-weight-bold mb-3 p-0">
                          <strong>Title of the news</strong>
                        </h3>
                        <p className="dark-grey-text">
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui
                          blanditiis praesentium voluptatum deleniti atque corrupti quos
                          dolores et quas molestias excepturi sint occaecati cupiditate
                          non provident et accusamus iusto odio dignissimos et dolorum
                          fuga.
                        </p>
                        <p>
                          by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 16/04/2018
                        </p>
                        <MDBBtn color="primary" size="md">
                          Read More
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                    <hr className="my-5"/>
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

SearchPageAfter.propTypes = {
  // route
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  // react
  language: PropTypes.string.isRequired
};

export {SearchPageAfter};
