import React from 'react';
import PropTypes from 'prop-types';

import {languageHelper} from '../../tool/language-helper';

const i18n = [
  {
    certification: '证书',
    addCertificate: '添加证书'
  },
  {
    certification: 'Certification',
    addCertificate: 'Add Certification'
  }
];

class Certification extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    // simulation data
    this.state = {
      list: [
        {
          id: 1,
          name: '一级注册结构工程师',
          number: '12345',
          authority: '中华人民共和国住房与城乡建设部',
          duration: {
            begin: '2016年9月',
            end: '2036年9月'
          },
          others: ''
        },
        {
          id: 2,
          name: '注册会计师',
          number: '67890',
          authority: '中国注册会计师协会',
          duration: {
            begin: '2017年9月',
            end: '2027年9月'
          },
          others: ''
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
          <p 
            style={{
              color: 'rgba(0,0,0,0.8)',
              fontSize: '16px',
              fontWeight: 500,
              marginBottom: '4.8px',
              lineHeight: '1.33em'
            }}
          >
            {this.text.certification}
          </p>
        </div>
        {
          this.state.list.map(
            item => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  padding: '0px 16px 16px 16px'
                }}
              >
                <div 
                  style={{
                    display: 'flex',
                    marginRight: '16px'
                  }}
                >
                  <img
                    src="http://icons.iconarchive.com/icons/graphicloads/100-flat/128/home-icon.png"
                    alt=""
                    width={54}
                    height={54}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1
                  }}
                >
                  <div
                    style={{
                      display: 'flex'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1
                      }}
                    >
                      <p style={{
                        color: 'rgba(0,0,0,0.8)',
                        fontSize: '16px',
                        fontWeight: 500,
                        marginBottom: '4.8px',
                        lineHeight: '1.33em'
                      }}> {item.name}</p>
                      <p 
                        style={{
                          color: 'rgba(0,0,0,0.8)',
                          fontSize: '13px',
                          fontWeight: 500,
                          marginBottom: '9.1px',
                          lineHeight: '1.33em'
                        }}
                      > 
                        {item.number}
                      </p>
                    </div>
                    <div>
                      <button
                        style={{
                          border: 0,
                          backgroundColor: 'transparent',
                          display: 'flex',
                          padding: '0px'
                        }}
                      >
                        <div style={{width: '20px'}}>
                          <svg
                            aria-hidden="true"
                            data-prefix="fas"
                            data-icon="edit"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path
                              d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                              fill="#1569e0"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div 
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <p 
                      style={{
                        color: 'rgba(0,0,0,0.8)',
                        fontSize: '13px',
                        marginBottom: '9.1px',
                        lineHeight: '1.33em'
                      }}
                    >
                      {item.duration.begin + ' - ' + item.duration.end}
                    </p>
                    <p style={{
                      color: 'rgba(0,0,0,0.8)',
                      fontSize: '13px',
                      marginBottom: '9.1px',
                      lineHeight: '1.33em'
                    }}>
                      {item.authority}
                    </p>
                  </div>
                </div>
              </div>
            )
          )
        }
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
          {this.text.addCertificate}
        </button>
      </div>
    );
  }
}

Certification.propTypes = {
  // react
  language: PropTypes.string.isRequired
};

export {Certification};