import React from 'react';

import {languageHelper} from '../../tool/language-helper';
import {JobListHome} from '../module/job-list-home';
import {TopBar} from '../module/top-bar';
import {FooterPage} from '../module/foot';
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

class Home extends React.Component {
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
            <div
              style={{
                display: 'flex',
              }}
            >
              <button
                style={css.button}
                onClick={
                  () => {
                    this.setState(
                      () => {
                        return {
                          selectedTab: 1
                        };
                      }
                    );
                  }
                }
              >
                {this.text.hot}
              </button>
              <button
                style={css.button}
                onClick={
                  () => {
                    this.setState(
                      () => {
                        return {
                          selectedTab: 2
                        };
                      }
                    );
                  }
                }
              >
                {this.text.new}
              </button>
            </div>
            {(() => {
              let tag;
              switch (this.state.selectedTab) {
                case 2:
                  tag = 'new';
                  break;
                default:
                  tag = 'hot';
                  break;
              }
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
            })()}
          </div>
        </div>
        <FooterPage/>
      </div>
    );
  }
}

export {Home};
