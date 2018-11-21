import React from 'react';
import PropTypes from 'prop-types';

import {languageHelper} from '../../tool/language-helper';

const i18n = [
  {
    project: '项目',
    addProject: '添加项目'
  },
  {
    project: 'Project',
    addProject: 'Add Project'
  }
];

class Project extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    // simulation data
    this.state = {
      list: [
        {
          id: 1,
          name: '类 C 语言编译器',
          location: '中国 上海',
          role: '独立开发者',
          duration: {
            begin: '2015年7月',
            end: '2015年9月'
          },
          links: [
            'https://github.com/zzc-tongji/c-like-compiler',
            'https://github.com/zzc-tongji/'
          ],
          others: '开发了一款编译器，能够将 C 语言转化为 x86-64 汇编语言（实现部分语言特性）。利用了 C++ 编程语言来构建项目。'
        },
        {
          id: 2,
          name: '基于安卓平台的图像加密系统',
          location: '中国 上海',
          role: '团队成员',
          duration: {
            begin: '2014年6月',
            end: '2015年6月'
          },
          links: [],
          others: '协助团队成员开发了一款 Android 应用。利用了傅立叶变换和斐波那契变换（使用 Java 实现）来加密和解密图片。'
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
            {this.text.project}
          </p>
        </div>
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          {
            this.state.list.map(
              item => (
                <div
                  key={item.id}
                  style={{
                    border: '1px solid #e0e0e0',
                    display: 'flex',
                    flexDirection: 'column',
                    flexShrink: 0,
                    margin: '0px 15px 15px 15px',
                    height: '219px',
                    width: '219px'
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgb(21, 105, 224)', // may be changed based on type
                      height: '20px'
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                      padding: '10px'
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
                        <p 
                          style={{
                            color: 'rgba(0,0,0,0.8)',
                            fontSize: '16px',
                            fontWeight: 500,
                            marginBottom: '4.8px',
                            lineHeight: '1.33em'
                          }}
                        > 
                          {item.name}
                        </p>
                      </div>
                      <div>
                        <img
                          src="https://cdn4.iconfinder.com/data/icons/finance-banking-2/32/edit-512.png"
                          alt=""
                          width={16}
                          height={16}
                        />
                      </div>
                    </div>
                    <div>
                      <p 
                        style={{
                          color: 'rgba(0,0,0,0.8)',
                          fontSize: '13px',
                          marginBottom: '9.1px',
                          lineHeight: '1.33em'
                        }}
                      >
                        {item.role}
                      </p>
                    </div>
                    <div>
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
                    </div>
                    <div>
                      <p 
                        style={{
                          color: 'rgba(0,0,0,0.8)',
                          fontSize: '13px',
                          marginBottom: '9.1px',
                          lineHeight: '1.33em'
                        }}
                      >
                        {item.others}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )
          }
          <div 
            style={{
              border: '1px solid #e0e0e0',
              display: 'flex',
              flexDirection: 'column',
              flexShrink: 0,
              margin: '0px 15px 15px 15px',
              height: '219px',
              width: '219px'
            }}
          >
            <button 
              style={{
                backgroundColor: 'transparent',
                color: 'rgba(0,0,0,0.8)',
                display: 'flex',
                flexDirection: 'row',
                fontSize: '1.6em',
                height: '100%',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <div
                style={{
                  paddingTop: '4px',
                  width: '20px'
                }}
              >
                <svg
                  aria-hidden="true"
                  data-prefix="fas"
                  data-icon="plus"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                style={{
                  marginLeft: '6px'
                }}
              >
                {this.text.addProject}
              </div>

            </button>
          </div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  // react
  language: PropTypes.string.isRequired
};

export {Project};
