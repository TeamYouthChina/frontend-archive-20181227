import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';

import {languageHelper} from '../../tool/language-helper';
// import {apiHelper} from '../../tool/api-helper';

const i18n = [
  {
    education: '教育'
  },
  {
    education: 'Education'
  }
];

class Education extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      // list: []
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
      <Card
        title={this.text.education}
      >
        {
          /*
          this.state.list.map(
            (item) => {
              return (
                <div key={item.id}>
                  {item.university}
                </div>
              );
            }
          )
          */
        }
      </Card>
    );
  }
}

Education.propTypes = {
  // react
  language: PropTypes.string.isRequired
};

export {Education};
