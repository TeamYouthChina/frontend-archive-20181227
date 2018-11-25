import React from 'react';
import PropTypes from 'prop-types';

import {TopBar} from '../module/top-bar';
import {languageHelper} from "../../tool/language-helper";

/* route: '/login' */

const i18n = [
  {
    login: '登陆界面',
    username: '用户名',
    password: '密码',
    button:'登陆'
  },
  {
    login: 'Login page',
    username: 'username',
    password: 'password',
    button:'Login'
  }
];

class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.text = i18n[languageHelper(this.props.language)];
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#f7b0f3'
        }}
      >
        <TopBar language={this.props.language}/>
        <div
          style={{
            marginTop: '55px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 1224,
              backgroundColor: '#ffffff'
            }}
          >
            {this.text.login}

            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '3px',
                boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.05), 2px 2px 2px 1px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '24px'
              }}
            >
              <div
                style={{
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  padding: '16px',
                }}
              >
                {this.text.username}
                <p style={{
                  color: 'rgba(0,0,0,0.8)',
                  fontSize: '16px',
                  fontWeight: 500,
                  marginBottom: '4.8px',
                  lineHeight: '1.33em'
                }}>
                  {<input type='text' value=''/>}
                </p>
              </div>
              <div
                style={{
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  padding: '16px',
                }}
              >
                {this.text.password}
                <p style={{
                  color: 'rgba(0,0,0,0.8)',
                  fontSize: '16px',
                  fontWeight: 500,
                  marginBottom: '4.8px',
                  lineHeight: '1.33em'
                }}>
                  {<input type='text' value=''/>}
                </p>
              </div>
              <button style={{
                backgroundColor: 'transparent',
                borderBottomLeftRadius: '3px',
                borderBottomRightRadius: '3px',
                borderWidth: '0px',
                color: '#1569e0',
                display: 'block',
                fontSize: '13px',
                fontWeight: '500',
                lineHeight: '20px',
                padding: '8px',
                width: '100%'
              }}>
                {this.text.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

Login.propTypes = {
  // route
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  // react
  language: PropTypes.string.isRequired
};

export {Login};
