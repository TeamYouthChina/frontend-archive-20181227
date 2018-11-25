import React from 'react';
import PropTypes from 'prop-types';

import {languageHelper} from '../../tool/language-helper';
import {TopBar} from './top-bar';

const i18n = [
  {
    category: '问题类型'
  },
  {
    category: 'Category'
  }
];

class Questions extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    // simulation data
    this.state = {
      list: [
        {
          id: 1,
          category: '新手',
          question: '什么是PEP 8？',
          answer: 'PEP 8是一个编码约定，一组推荐，关于如何编写Python代码更具可读性。',
        },
        {
          id: 2,
          category: '简历',
          question: '个人家庭情况?',
          answer: '家庭情况对于了解应聘者的性格、观念、心态等有一定的作用。',
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
          flexDirection: 'column',
          backgroundColor: '#ffffff'
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
            帮助页面

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
                <p style={{
                  color: 'rgba(0,0,0,0.8)',
                  fontSize: '16px',
                  fontWeight: 500,
                  marginBottom: '4.8px',
                  lineHeight: '1.33em'
                }}>
                  {this.text.question}
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
                              }}> {item.category}</p>
                              <p style={{
                                color: 'rgba(0,0,0,0.8)',
                                fontSize: '13px',
                                fontWeight: 500,
                                marginBottom: '9.1px',
                                lineHeight: '1.33em'
                              }}> {item.question}</p>
                              <p style={{
                                color: 'rgba(0,0,0,0.8)',
                                fontSize: '13px',
                                fontWeight: 500,
                                marginBottom: '9.1px',
                                lineHeight: '1.33em'
                              }}> {item.answer}</p>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Questions.propTypes = {
  // react
  language: PropTypes.string.isRequired
};

export {Questions};
