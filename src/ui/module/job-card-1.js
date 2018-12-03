import React from 'react';
import PropTypes from 'prop-types';
import * as apiHelper from '../../tool/api-helper';

class JobCard1 extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {};
  }

  componentWillMount() {
    apiHelper.get(
      `job/${this.props.id}?detailLevel=1`
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
          width: '265px',
          padding: '15px'
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '40px',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}
        >
          <div>
            <img
              src={this.state.organization.avatarUrl}
              alt=""
              width={38}
              height={38}
            />
          </div>
          <button
            style={{
              border: 0,
              backgroundColor: 'transparent',
              display: 'flex',
              padding: '0px'
            }}
          >
            <div
              style={{width: '20px'}}
            >
              <svg
                aria-hidden="true"
                data-prefix="fal"
                data-icon="star"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM405.8 317.9l27.8 162L288 403.5 142.5 480l27.8-162L52.5 203.1l162.7-23.6L288 32l72.8 147.5 162.7 23.6-117.7 114.8z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </div>
        <div
          style={{
            marginBottom: '0.3em'
          }}
        >
          <span
            style={{
              fontSize: '16px',
              color: 'rgba(0,0,0,0.98)',
              fontWeight: 500
            }}
          >
            {this.state.name}
          </span>
        </div>
        <div
          style={{
            marginBottom: '1.33em'
          }}
        >
          <span
            style={{
              fontSize: '14px',
              color: 'rgba(0,0,0,0.98)',

            }}
          >
            {this.state.organization.name}
          </span>
        </div>
        <div>
          <span
            style={{
              fontSize: '14px',
              color: 'rgba(0,0,0,0.56)'
            }}
          >
            {`${this.state.location[0]} ${this.state.location[1]} ${this.state.location[2]}`}
          </span>
        </div>
        <div>
          <span
            style={{
              fontSize: '14px',
              color: 'rgba(0,0,0,0.56)'
            }}
          >
            {this.state.type}
          </span>
        </div>
      </div>
    ) : null;
  }
}

JobCard1.propTypes = {
  id: PropTypes.number.isRequired
};

export {JobCard1};
