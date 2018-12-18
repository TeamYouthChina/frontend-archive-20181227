import React from 'react';
import PropTypes from 'prop-types';

import {languageHelper} from '../../tool/language-helper';
import * as apiHelper from '../../tool/api-helper';

const i18n = [
  {
    project: '项目',
    addExtracurricular: '添加项目'
  },
  {
    project: 'Project',
    addExtracurricular: 'Add Project'
  }
];

class Project extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {};
    /*
    * */
    this.text = i18n[languageHelper()];
  }

  componentWillMount() {
    apiHelper.get(
      `applicant/${this.props.id}/project`
    ).then((receivedData) => {
      this.setState(receivedData);
    });
  }

  render() {
    return this.state.id ? (
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
            this.state.project.map(
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
                          {item.name[languageHelper(this.props.language)]}
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
                        {item.role[languageHelper(this.props.language)]}
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
                        {item.note[languageHelper(this.props.language)]}
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
                {this.text.addExtracurricular}
              </div>

            </button>
          </div>
        </div>
      </div>
    ) : null;
  }
}

Project.propTypes = {
  // react
  id: PropTypes.string.isRequired
};

export {Project};
