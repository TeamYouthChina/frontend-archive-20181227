import React from 'react';
import PropTypes from 'prop-types';

import {languageHelper} from '../../tool/language-helper';
// import {apiHelper} from '../../tool/api-helper';

import {Education} from './education';

const i18n = [
  {
    basic: '基本',
    education: '教育',
    experience: '工作经历'
  },
  {
    basic: 'Basic',
    education: 'Education',
    experience: 'Experience'
  }
];

class People extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      education: {}
    };
    /*
    * */
    this.text = i18n[languageHelper(this.props.language)];
  }

  render() {
    /*
    apiHelper('...').then((receivedData) => {
      this.setState({list: receivedData});
    });
    */
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 1000
          }}
        >
          <div>
            People ID: {this.props.match.params.id}
          </div>
          <br/>
          {
            this.state.education ? <Education language={this.props.language}/> : null
          }
        </div>
      </div>
    );
  }
}

People.propTypes = {
  // route
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  // react
  language: PropTypes.string.isRequired
};

export {People};
