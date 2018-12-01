import React from 'react';
import PropTypes from 'prop-types';

import {JobCard1} from './job-card-1';
import * as apiHelper from '../../tool/api-helper';

class JobCard1List extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {};
  }

  componentWillMount() {
    apiHelper.post(
      'job',
      this.props.search
    ).then((receivedData) => {
      this.setState(() => {
        return receivedData;
      });
    });
  }

  render() {
    return this.state.searchResult ? (
      <div
        style={{
          padding: '24px 16px'
        }}
      >
        <div
          style={{
            marginBottom: '16px'
          }}
        >
          <span style={{
            fontSize: '24px'
          }}>
            {this.props.name}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            marginBottom: '16px',
            justifyContent: 'space-between'
          }}
        >
          {
            this.state.searchResult.map(
              item =>
                <JobCard1
                  key={item}
                  id={item}
                />
            )
          }
        </div>
        <div>
          <div>
            <a
              href="https://www.google.com/"
              style={{
                marginTop: '8px',
                display: 'inline-block',
                fontWeight: '500',
                color: '#1569e0'
              }}
            >
              See More →
            </a>
          </div>
        </div>
      </div>
    ) : null;
  }
}

JobCard1List.propTypes = {
  name: PropTypes.string.isRequired,
  search: PropTypes.object.isRequired
};

export {JobCard1List};
