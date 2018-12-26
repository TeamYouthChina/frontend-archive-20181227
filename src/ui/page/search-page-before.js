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
  MDBListGroup,MDBListGroupItem
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

class SearchPageBefore extends React.Component {
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
          <MDBCol md="7" className="offset-md-1">
            <MDBContainer>
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
                      <MDBRow>
                        <MDBCol>
                          <MDBCol md="7">
                            <h3 className="font-weight-bold mb-3 p-0">
                              <strong>Title of the news</strong>
                            </h3>
                            <MDBChip src="https://mdbootstrap.com/img/Photos/Avatars/img(7).jpg" alt="Contact Person"
                                     bgColor="blue lighten-4"
                                     waves>
                              Caroline Smith
                            </MDBChip>
                            <h6>This is the sixth heading
                            </h6>
                          </MDBCol>
                          <p className="dark-grey-text">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                            aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                            ipsum quia dolor sit amet, psam voluptatem quia consectetur.
                          </p>
                          <blockquote className="blockquote">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer className="blockquote-footer mb-3">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                          </blockquote>
                        </MDBCol>
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
            </MDBContainer>
          </MDBCol>

          <MDBCol md="3" className="offset-md-1">
            <MDBCard>
              <MDBIcon icon="shield" /> normal<br />
            </MDBCard>
            <MDBListGroup >
              <MDBListGroupItem><MDBIcon icon="home" fixed />  Home</MDBListGroupItem>
              <MDBListGroupItem><MDBIcon icon="book" fixed />  Library</MDBListGroupItem>
              <MDBListGroupItem><MDBIcon icon="pencil" fixed />  Applications</MDBListGroupItem>
              <MDBListGroupItem><MDBIcon icon="cog" fixed />  Settings</MDBListGroupItem>
            </MDBListGroup>
          </MDBCol>
        </Row>

      </div>
    );
  }
}

SearchPageBefore.propTypes = {
  // route
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  // react
  language: PropTypes.string.isRequired
};

export {SearchPageBefore};
