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
  Row, Progress,
  SelectInput, SelectOptions, SelectOption,
  MDBCollapse,
  Input, MDBInput,
  Iframe,
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

class VideoRecommendation extends React.Component {
  constructor(props) {
    super(props);

    this.text = i18n[languageHelper(this.props.language)];
    this.state = {
      activeItemClassicTabs1: '1'
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
                  <Row center className="mx-3">
                    <Col>
                      <Iframe height={420} src="https://www.youtube.com/embed/v64KOxKVLVg"/>
                      <hr/>
                    </Col>
                  </Row>
                  <Row center className="mt-3">
                    <MDBCol md="2">

                      <img
                        className="img-fluid rounded z-depth-1-half mb-3"
                        src="https://ws1.sinaimg.cn/large/94365dd2ly1fyhhfjkhk7j2069069glh.jpg"
                        alt=""
                        style={{width: '80px', height: '80px'}}
                      />


                    </MDBCol>
                    <MDBCol md="8">
                      <h5 className="font-weight-bold mb-3 p-0">
                        <strong>数据分析实习(2019 Summer), GE 通用电气</strong>
                        <MDBIcon icon="bookmark-o" size="1x" className="amber-text px-3"/>
                      </h5>

                      <br/>
                      <Row>
                        <Col md="3">
                          <MDBIcon icon="heart-o"/>
                          265 likes
                        </Col>
                        <Col md="4">
                          <MDBIcon icon="comment"/>
                          89 comments
                        </Col>
                      </Row>
                    </MDBCol>
                  </Row>
                  <Row center className="mx-3" style={{marginTop:"100px"}}>
                    <Col>
                      <Iframe height={420} src="https://www.youtube.com/embed/v64KOxKVLVg"/>
                      <hr/>
                    </Col>
                  </Row>
                  <Row center className="mt-3">
                    <MDBCol md="2">

                      <img
                        className="img-fluid rounded z-depth-1-half mb-3"
                        src="https://ws1.sinaimg.cn/large/94365dd2ly1fyhhfjkhk7j2069069glh.jpg"
                        alt=""
                        style={{width: '80px', height: '80px'}}
                      />


                    </MDBCol>
                    <MDBCol md="8">
                      <h5 className="font-weight-bold mb-3 p-0">
                        <strong>数据分析实习(2019 Summer), GE 通用电气</strong>
                        <MDBIcon icon="bookmark-o" size="1x" className="amber-text px-3"/>
                      </h5>

                      <br/>
                      <Row>
                        <Col md="3">
                          <MDBIcon icon="heart-o"/>
                          265 likes
                        </Col>
                        <Col md="4">
                          <MDBIcon icon="comment"/>
                          89 comments
                        </Col>
                      </Row>
                    </MDBCol>
                  </Row>
                  <Row center className="mx-3" style={{marginTop:"100px"}}>
                    <Col>
                      <Iframe height={420} src="https://www.youtube.com/embed/v64KOxKVLVg"/>
                      <hr/>
                    </Col>
                  </Row>
                  <Row center className="mt-3">
                    <MDBCol md="2">

                      <img
                        className="img-fluid rounded z-depth-1-half mb-3"
                        src="https://ws1.sinaimg.cn/large/94365dd2ly1fyhhfjkhk7j2069069glh.jpg"
                        alt=""
                        style={{width: '80px', height: '80px'}}
                      />


                    </MDBCol>
                    <MDBCol md="8">
                      <h5 className="font-weight-bold mb-3 p-0">
                        <strong>数据分析实习(2019 Summer), GE 通用电气</strong>
                        <MDBIcon icon="bookmark-o" size="1x" className="amber-text px-3"/>
                      </h5>

                      <br/>
                      <Row>
                        <Col md="3">
                          <MDBIcon icon="heart-o"/>
                          265 likes
                        </Col>
                        <Col md="4">
                          <MDBIcon icon="comment"/>
                          89 comments
                        </Col>
                      </Row>
                    </MDBCol>
                  </Row>
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

VideoRecommendation.propTypes = {
  // route
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  // react
  language: PropTypes.string.isRequired
};

export {VideoRecommendation};
