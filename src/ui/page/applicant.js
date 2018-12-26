import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardBody, CardImage, CardTitle, CardText} from 'mdbreact';

import {languageHelper} from '../../tool/language-helper';
import {TopBarg} from '../module/bar-general';

export class Applicant extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#f7f7f7'
        }}
      >
        <TopBarg/>
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
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Contact id={this.props.match.params.id}/>
              <Education id={this.props.match.params.id}/>
              <Experience id={this.props.match.params.id}/>
              <Certificate id={this.props.match.params.id}/>
              <Extracurricular id={this.props.match.params.id}/>
              <Project id={this.props.match.params.id}/>
              <Skill id={this.props.match.params.id}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Applicant.propTypes = {
  // route
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileLanguage: 'zh_CN',
    };
    this.text = Contact.i18n[languageHelper()];
  }

  render() {
    return (
      <Card>
        <CardBody
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <CardTitle
            style={{
              fontSize: '1rem'
            }}
          >
            {this.text.basic}
          </CardTitle>
          <CardText
            style={{
              fontSize: '0.8rem'
            }}
          >
            {this.text.email}
            <br/>
          </CardText>
          <CardText
            style={{
              fontSize: '0.8rem'
            }}
          >
            {this.text.phone}
            <br/>
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

Contact.i18n = [
  {
    basic: '联系方式',
    email: '邮箱：',
    phone: '电话：',
    edit: '编辑'
  },
  {
    basic: 'Contact',
    email: 'Email:',
    phone: 'Phone:',
    edit: 'Edit'
  }
];

Contact.propTypes = {
  // route
  id: PropTypes.string.isRequired
};

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileLanguage: 'zh_CN',
      backend: {
        status: {
          code: 2000
        },
        education: [
          {
            university: { // 二选一，有ID的情况下，从后端再取。
              id: undefined,
              other: '乔治华盛顿大学'
            },
            major: { // 二选一，有ID的情况下，从后端再取。
              id: undefined,
              other: '计算机科学'
            },
            degree: { // 二选一，有ID的情况下，从后端再取。
              id: undefined,
              other: '硕士'
            },
            durationBegin: 1543796843,
            durationEnd: 1543796843, // 可 undefined（不出现），表示在读
            location: { // 二选一，有ID的情况下，从后端再取。
              id: undefined,
              other: '美国 华盛顿特区'
            },
            description: '备注内容'
          },
          {
            university: { // 二选一，有ID的情况下，从后端再取。
              id: undefined,
              other: '同济大学'
            },
            major: { // 二选一，有ID的情况下，从后端再取。
              id: undefined,
              other: '计算机科学与技术'
            },
            degree: { // 二选一，有ID的情况下，从后端再取。
              id: undefined,
              other: '学士'
            },
            durationBegin: 1543796843,
            durationEnd: 1543796843, // 可 undefined（不出现），表示在读
            location: { // 二选一，有ID的情况下，从后端再取。
              id: '',
              other: '中国 上海市 杨浦区'
            },
            description: '备注内容'
          }
        ]
      }
    };
    this.text = Education.i18n[languageHelper()];
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
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
            {this.text.education}
          </p>
        </div>
        {
          this.state.backend.education.map(
            (item, index) => (
              <div
                key={index}
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
                      }}>
                        {(
                          () => {
                            if (item.university.id) {
                              return 'ID';
                            } else {
                              return item.university.other;
                            }
                          }
                        )()}
                      </p>
                      <p style={{
                        color: 'rgba(0,0,0,0.8)',
                        fontSize: '13px',
                        fontWeight: 500,
                        marginBottom: '9.1px',
                        lineHeight: '1.33em'
                      }}>
                        {(
                          () => {
                            if (item.degree.id) {
                              return 'ID';
                            } else {
                              return item.degree.other;
                            }
                          }
                        )()}
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
                      {item.durationBegin + ' - ' + item.durationEnd}
                    </p>
                    <p style={{
                      color: 'rgba(0,0,0,0.8)',
                      fontSize: '13px',
                      marginBottom: '9.1px',
                      lineHeight: '1.33em'
                    }}>
                     
                      <span style={{fontWeight: 'bold'}}>{this.text.major}</span>
                      {(
                        () => {
                          if (item.major.id) {
                            return 'ID';
                          } else {
                            return item.degree.other;
                          }
                        }
                      )()}
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
          {this.text.addExtracurricular}
        </button>
      </div>
    ) : null;
  }
}

Education.i18n = [
  {
    education: '教育',
    major: '专业：',
    addExtracurricular: '添加学校'
  },
  {
    education: 'Education',
    major: 'Major in ',
    addExtracurricular: 'Add School'
  }
];

Education.propTypes = {
  // react
  id: PropTypes.string.isRequired
};

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileLanguage: 'zh_CN',
      backend: {
        experience: [
          {
            employer: { // 二选一，有ID的情况下，从后端取。
              id: undefined,
              other: '百度'
            },
            location: { // 二选一，有ID的情况下，从后端取。
              id: undefined,
              other: '中国 上海'
            },
            position: '软件工程师',
            durationBegin: 1543796843,
            durationEnd: 1543796843, // 可 undefined（不出现），表示在职
            description: '（暂无）'
          },
          {
            employer: {
              id: undefined,
              other: '阿里巴巴'
            },
            location: { // 二选一，有ID的情况下，从后端取。
              id: undefined,
              other: '中国 上海'
            },
            position: '软件工程师',
            durationBegin: 1543796843,
            durationEnd: 1543796843, // 可 undefined（不出现），表示在职
            description: '（暂无）'
          }
        ],
        status: {
          code: 2000
        }
      },
    };
    this.text = Experience.i18n[languageHelper()];
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
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
            {this.text.skill}
          </p>
        </div>
        {
          this.state.backend.experience.map(
            (item, index) => (
              <div
                key={index}
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
                      }}>
                      <p style={{
                        color: 'rgba(0,0,0,0.8)',
                        fontSize: '16px',
                        fontWeight: 500,
                        marginBottom: '4.8px',
                        lineHeight: '1.33em'
                      }}> {item.position}</p>
                      <p style={{
                        color: 'rgba(0,0,0,0.8)',
                        fontSize: '13px',
                        fontWeight: 500,
                        marginBottom: '9.1px',
                        lineHeight: '1.33em'
                      }}>
                        {(
                          () => {
                            if (item.employer.id) {
                              return 'ID';
                            } else {
                              return item.employer.other;
                            }
                          }
                        )()}
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
                    <p style={{
                      color: 'rgba(0,0,0,0.8)',
                      fontSize: '13px',
                      marginBottom: '9.1px',
                      lineHeight: '1.33em'
                    }}>
                      {item.durationBegin + ' - ' + item.durationEnd + ' | '}
                      {(
                        () => {
                          if (item.location.id) {
                            return 'ID';
                          } else {
                            return item.location.other;
                          }
                        }
                      )()}
                    </p>
                    <p style={{
                      color: 'rgba(0,0,0,0.8)',
                      fontSize: '13px',
                      marginBottom: '9.1px',
                      lineHeight: '1.33em'
                    }}>
                      {item.description}
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
          {this.text.addSkill}
        </button>
      </div>
    ) : null;
  }
}

Experience.i18n = [
  {
    skill: '工作经历',
    addSkill: '添加工作经历'
  },
  {
    skill: 'Experience',
    addSkill: 'Add Work Experience'
  }
];

Experience.propTypes = {
  // react
  id: PropTypes.string.isRequired
};

class Certificate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileLanguage: 'zh_CN',
      backend: {
        status: {
          code: 2000
        },
        certification: [
          {
            name: '一级注册结构工程师',
            number: '12345',
            authority: '中华人民共和国住房与城乡建设部',
            durationBegin: 1543796843,
            durationEnd: 1543796843, // 可 undefined（不出现）
            description: ''
          },
          {
            name: '注册会计师',
            number: '67890',
            authority: '中国注册会计师协会',
            durationBegin: 1543796843,
            durationEnd: 1543796843, // 可 undefined（不出现）
            description: ''
          }
        ]
      }
    };
    this.text = Certificate.i18n[languageHelper()];
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
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
          this.state.backend.certification.map(
            (item, index) => (
              <div
                key={index}
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
                      {item.durationBegin + ' - ' + item.durationEnd}
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
    ) : null;
  }
}

Certificate.i18n = [
  {
    certification: '证书',
    addCertificate: '添加证书'
  },
  {
    certification: 'Certification',
    addCertificate: 'Add Certification'
  }
];

Certificate.propTypes = {
  id: PropTypes.string.isRequired
};

class Extracurricular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileLanguage: 'zh_CN',
      backend: {
        extracurricular: [
          {
            role: '志愿者',
            organization: '2015年上海国际马拉松赛',
            location: { // 二选一，有ID的情况下，从后端取。
              id: undefined,
              other: '中国 上海'
            },
            durationBegin: 1543796843,
            durationEnd: 1543796843, // 可 undefined（不出现）
            description: '（暂无）'
          },
          {
            role: '志愿者',
            organization: '2014年上海国际马拉松赛',
            location: { // 二选一，有ID的情况下，从后端取。
              id: undefined,
              other: '中国 上海'
            },
            durationBegin: 1543796843,
            durationEnd: 1543796843, // 可 undefined（不出现）
            description: '（暂无）'
          }
        ],
        status: {
          code: 2000
        }
      },
    };
    this.text = Extracurricular.i18n[languageHelper()];
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
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
            {this.text.project}
          </p>
        </div>
        {
          this.state.backend.extracurricular.map(
            (item, index) => (
              <div
                key={index}
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
                      }}>
                      <p style={{
                        color: 'rgba(0,0,0,0.8)',
                        fontSize: '16px',
                        fontWeight: 500,
                        marginBottom: '4.8px',
                        lineHeight: '1.33em'
                      }}> {item.role}</p>
                      <p style={{
                        color: 'rgba(0,0,0,0.8)',
                        fontSize: '13px',
                        fontWeight: 500,
                        marginBottom: '9.1px',
                        lineHeight: '1.33em'
                      }}> {item.organization}</p>
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
                    <p style={{
                      color: 'rgba(0,0,0,0.8)',
                      fontSize: '13px',
                      marginBottom: '9.1px',
                      lineHeight: '1.33em'
                    }}>
                      {item.durationBegin + ' - ' + item.durationEnd}
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
          {this.text.addProject}
        </button>
      </div>
    ) : null;
  }
}

Extracurricular.i18n = [
  {
    project: '社团和组织经历',
    addProject: '添加社团和组织经历'
  },
  {
    project: 'Organization / Extracurricular',
    addProject: 'Add Organization / Extracurricular'
  }
];

Extracurricular.propTypes = {
  // react
  id: PropTypes.string.isRequired
};

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileLanguage: 'zh_CN',
      backend: {
        status: {
          code: 2000
        },
        project: [
          {
            name: '类 C 语言编译器',
            location: '中国 上海',
            role: '独立开发者',
            durationBegin: 1543796843,
            durationEnd: 1543796843, // 可 undefined（不出现）
            links: [
              'https://github.com/zzc-tongji/c-like-compiler',
              'https://github.com/zzc-tongji/'
            ],
            description: '开发了一款编译器，能够将 C 语言转化为 x86-64 汇编语言（实现部分语言特性）。利用了 C++ 编程语言来构建项目。'
          },
          {
            name: '基于安卓平台的图像加密系统',
            location: '中国 上海',
            role: '团队成员',
            durationBegin: 1543796843,
            durationEnd: 1543796843, // 可 undefined（不出现）
            links: [],
            description: '协助团队成员开发了一款 Android 应用。利用了傅立叶变换和斐波那契变换（使用 Java 实现）来加密和解密图片。'
          }
        ]
      }
    };
    this.text = Project.i18n[languageHelper()];
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
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
            this.state.backend.project.map(
              (item, index) => (
                <div
                  key={index}
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
                        {item.durationBegin + ' - ' + item.durationEnd}
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
                        {item.description}
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
    ) : null;
  }
}

Project.i18n = [
  {
    project: '项目',
    addProject: '添加项目'
  },
  {
    project: 'Project',
    addProject: 'Add Project'
  }
];

Project.propTypes = {
  id: PropTypes.string.isRequired
};

class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          content: 'C++'
        },
        {
          id: 2,
          content: 'Java'
        },
        {
          id: 3,
          content: 'JavaScript'
        },
        {
          id: 4,
          content: 'Python'
        },
        {
          id: 5,
          content: 'C#'
        },
        {
          id: 6,
          content: 'Git'
        },
        {
          id: 7,
          content: 'Bash'
        },
        {
          id: 8,
          content: 'MATLAB'
        },
        {
          id: 9,
          content: 'GitHub'
        },
        {
          id: 10,
          content: 'C'
        },
        {
          id: 11,
          content: 'React.js'
        },
        {
          id: 12,
          content: 'Redux.js'
        },
        {
          id: 13,
          content: 'Node.js'
        },
        {
          id: 14,
          content: 'Go'
        },
        {
          id: 15,
          content: 'TopProfile'
        },
        {
          id: 16,
          content: 'Word'
        },
        {
          id: 17,
          content: 'Excel'
        }
      ]
    };
    this.text = Skill.i18n[languageHelper()];
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
            {this.text.skill}
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            padding: '0 16px 16px 16px',
          }}
        >
          {
            this.state.list.map(
              item => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: '#f0f0f0',
                    borderRadius: '3px',
                    display: 'flex',
                    flexShrink: 0,
                    lineHeight: '15px',
                    margin: '0 8px 8px 0',
                    padding: '4px 8px'
                  }}
                >
                  <span
                    style={{
                      color: '#575757',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}
                  >
                    {item.content}
                  </span>
                  <button
                    style={{
                      background: 'transparent',
                      border: 0,
                      color: '#adadad',
                      height: '15px',
                      padding: '0 0 0 4px',
                      width: '14px'
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      data-prefix="fas"
                      data-icon="times"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"
                    >
                      <path
                        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              )
            )
          }
        </div>
      </div>
    );
  }
}

Skill.i18n = [
  {
    skill: '技能',
    addSkill: '添加工作经历'
  },
  {
    skill: 'Skill',
    addSkill: 'Add Skill'
  }
];

Skill.propTypes = {
  id: PropTypes.string.isRequired
};
