import React from 'react';
import PropTypes from 'prop-types';

import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  FormInline,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Row
} from 'mdbreact';

import {languageHelper} from '../../tool/language-helper';
import {TopBar} from '../module/top-bar';
import {FooterPage} from '../module/foot';
import {JobCardSquare} from '../module/job-card-square';

/* route: '/' */

const i18n = [
  {
    hot: '热门企业',
    new: '新锐公司',
    it: 'IT / 互联网',
    finance: '金融'
  },
  {
    hot: 'Hot',
    new: 'New',
    it: 'IT / Internet',
    finance: 'Finance'
  },
];

const css = {
  button: {
    backgroundColor: 'transparent',
    borderBottomLeftRadius: '3px',
    borderBottomRightRadius: '3px',
    borderWidth: '0px',
    display: 'block',
    padding: '8px',
    color: 'rgba(0,0,0,0.8)',
    fontSize: '16px',
    fontWeight: 500,
    marginBottom: '4.8px',
    lineHeight: '1.33em'
  }
};

export class Home extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      selectedTab: 1
    };
    /*
    * */
    this.text = i18n[languageHelper()];
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <TopBar language={this.props.language}/>
        <Navbar expand="md">
          <NavbarNav center>
            <NavItem>
              <NavLink
                onClick={
                  () => {
                    this.setState({selectedTab: 1});
                  }
                }
                to={`${this.props.location.pathname}#`}
              >
                {i18n[languageHelper()].hot}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={
                  () => {
                    this.setState({selectedTab: 2});
                  }
                }
                to={`${this.props.location.pathname}#`}
              >
                {i18n[languageHelper()].new}
              </NavLink>
            </NavItem>
          </NavbarNav>
        </Navbar>
        <div
          style={{
            display: 'flex',
            marginTop: '55px',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 1224,
            }}
          >
            {
              (
                () => {
                  let tag;
                  if (this.state.selectedTab === 2) {
                    return null;
                  } else { // this.state.selectedTab === 1
                    return (
                      <div>
                        <JobListHome
                          name={this.text.it}
                          search={{
                            industry: 'IT',
                            tagList: [
                              `${tag}`
                            ],
                            page: 1,
                            size: 4,
                            skipAuth: true
                          }}
                        />
                        <JobListHome
                          name={this.text.finance}
                          search={{
                            industry: 'finance',
                            tagList: [
                              `${tag}`
                            ],
                            page: 1,
                            size: 4,
                            skipAuth: true
                          }}
                        />
                      </div>
                    );
                  }
                }
              )()
            }
          </div>
        </div>
        <FooterPage/>
      </div>
    );
  }
}

class JobListHome extends React.Component {

  constructor(props) {
    super(props);
    /*
    * */
    this.state = {};
  }

  componentWillMount() {
    let mockData =
      {
        searchResult: ['1', '2', '3', '4'],
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div
        style={{
          padding: '24px 16px'
        }}
      >
        <div
          style={{
            marginBottom: '16px'
          }}
        >
          <span style={{
            fontSize: '24px'
          }}>
            {this.props.name}
          </span>
        </div>
        <Row>
          {
            this.state.backend.searchResult.map(
              (item, index) =>
                <Col
                  key={index}
                >
                  <JobCardSquare
                    id={item}
                  />
                </Col>
            )
          }
        </Row>
        <div>
          <div>
            <a
              href="https://www.google.com/"
              style={{
                marginTop: '8px',
                display: 'inline-block',
                fontWeight: '500',
                color: '#1569e0'
              }}
            >
              See More →
            </a>
          </div>
        </div>
      </div>
    ) : null;
  }
}

JobListHome.propTypes = {
  name: PropTypes.string.isRequired,
  search: PropTypes.object.isRequired
};
