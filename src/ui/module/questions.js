import React from 'react';
import PropTypes from 'prop-types';

import {languageHelper} from '../../tool/language-helper';
import {TopBar} from './top-bar';
import {Layout, Menu, Breadcrumb, Divider} from 'antd';

import {QuestionCard} from './question-card';

const {Header, Content, Footer} = Layout;


const i18n = [
  {
    pagename: '帮助页',
    category: '问题分类'
  },
  {
    pagename: 'Help',
    category: 'Problem Types'
  }
];

class Questions extends React.Component {
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
          backgroundColor: '#f3f5f8'
        }}
      >
        <TopBar language={this.props.language}/>
        <Layout className="layout">

          <Content style={{padding: '0 50px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
              <Breadcrumb.Item>
                {this.text.pagename}
              </Breadcrumb.Item>
            </Breadcrumb>
            <div style={{background: '#f5f7fa', padding: 24, minHeight: 280}}>
              {this.text.category}

              <QuestionCard language={this.props.language}/>

            </div>


          </Content>
          <Footer style={{textAlign: 'center'}}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    );
  }
}

Questions.propTypes = {
  // react
  language: PropTypes.string.isRequired
};

export {Questions};
