import React from 'react';
import PropTypes from 'prop-types';

import {languageHelper} from '../../tool/language-helper';

import {Row, Col} from 'antd';

import {Divider} from 'antd';

const i18n = [
  {
    typename: '分类名称'
  },
  {
    typename: 'Type Name'
  }
];


class QuestionCard extends React.Component {
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
          backgroundColor: '#f6f8fb',
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
                          
                          <Row>
                            <Col span={24} offset={4}>
                              <p style={{
                                color: 'rgba(0,0,0,0.8)',
                                fontSize: '13px',
                                fontWeight: 500,
                                marginBottom: '9.1px',
                                lineHeight: '1.33em'
                              }}> {item.question}</p>
                            </Col>
                          </Row>


                          <Row>
                            <Col span={24} offset={4}>
                              <p style={{
                                color: 'rgba(0,0,0,0.8)',
                                fontSize: '13px',
                                fontWeight: 500,
                                marginBottom: '9.1px',
                                lineHeight: '1.33em'
                              }}> {item.answer}</p>
                            </Col>
                          </Row>

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
    );
  }
}

export {QuestionCard};
