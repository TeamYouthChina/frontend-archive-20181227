import React from 'react';
import PropTypes from 'prop-types';

import {languageHelper} from '../tool/language-helper';
import * as cssStyle from './cssStyle';


const i18n = [
  {
    education: '教育',
    major: '专业：',
    addProject: '添加学校'
  },
  {
    education: 'Education',
    major: 'Major in ',
    addProject: 'Add School'
  }
];

class Basic extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    // simulation data
    this.state = {};
    /*
    * */
    this.text = i18n[languageHelper(this.props.language)];
  }

  render() {
    return (
      <div style={cssStyle.peopleCard}>
        <div
          style={{
            height: '150px',
            backgroundColor: '#1569e0'
          }}
        />
        <div
          style={{
            display: 'block',
            height: '93px',
            padding: '17px 20px 17px 210px',
            position: 'relative'
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '3px',
              height: '150px',
              left: 30,
              padding: '4px',
              position: 'absolute',
              top: -70,
              width: '150px',
            }}
          >
            <img
              src="https://www.burns-360.com/wp-content/uploads/2018/09/Sample-Icon.png"
              alt=""
              width={145}
              height={145}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              left: '210px',
              top: '-120px',
              height: '100px',
              color: '#fff',
              fontSize: '1.77em',
              fontWeight: '500',
              margin: '0 0 16px',
              lineHeight: 'normal'
            }}
          >
            Zhicheng Zhang
          </div>
        </div>
      </div>
    );
  }
}

Basic.propTypes = {
  // react
  language: PropTypes.string.isRequired
};

export {Basic};
