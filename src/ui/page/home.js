import React from 'react';

import {languageHelper} from '../../tool/language-helper';
import {JobCard1List} from '../module/job-card-1-list';
import {TopBar} from '../module/top-bar';

/* route: '/' */

const i18n = [
  {
    hot: '热门企业',
    new: '新锐公司'
  },
  {
    hot: 'Hot',
    new: 'New'
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
      selectedTab: 0,
      list: [
        {
          key: 0,
          fetchURL: 'https://www.google/com'
        },
        {
          key: 1,
          fetchURL: 'https://www.google/com'
        },
        {
          key: 2,
          fetchURL: 'https://www.google/com'
        }
      ]
    };
    /*
    * */
    this.text = i18n[languageHelper(this.props.language)];
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
                          selectedTab: 0
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
                          selectedTab: 1
                        };
                      }
                    );
                  }
                }
              >
                {this.text.new}
              </button>
            </div>
            <div>
              {
                this.state.list.map(
                  item =>
                    <JobCard1List
                      key={item.key}
                      name={item.name}
                      description={item.description}
                      fetchURL={item.fetchURL}
                    />
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {Home};
