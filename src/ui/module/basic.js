import React from 'react';
import {languageHelper} from '../../tool/language-helper';

const i18n = [
  {
    basic: '基本信息',
    email: '电子邮箱：',
    phoneNumber: '联系电话：',
    location: '位置',
    edit: '编辑'
  },
  {
    basic: 'Basic',
    email: 'Email:',
    phoneNumber: 'Phone Number:',
    location: 'Location',
    edit: '编辑'
  }
];

class Basic extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    // simulation data
    this.state = {
      phoneNumber: '+86 123-456-7890',
      email: 'example@youthchina.group',
      location: '中国 上海'
    };
    /*
    * */
    this.text = i18n[languageHelper(this.props.language)];
  }

  render() {
    return (
      <div 
        style={{
          backgroundColor: '#fff',
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
          <p style={{
            color: 'rgba(0,0,0,0.8)',
            fontSize: '16px',
            fontWeight: 500,
            marginBottom: '4.8px',
            lineHeight: '1.33em'
          }}>
            {this.text.basic}
          </p>
        </div>
        <div
          style={{
            padding: '0px 16px 16px 16px'
          }}
        >
          <span>{this.text.phoneNumber}</span><span>{this.state.phoneNumber}</span>
        </div>
        <div
          style={{
            padding: '0px 16px 16px 16px'
          }}
        >
          <span>{this.text.email}</span><span>{this.state.email}</span>
        </div>
        <div 
          style={{
            borderTop: '1px solid #e0e0e0',
            display: 'block',
            margin: 0,
            width: '100%'
          }}
        />
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
          {this.text.edit}
        </button>
      </div>
    );
  }
}

export {Basic};
