import React from 'react';
import {JobCard1} from './job-card-1';

class JobCard1List extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    // simulation data <= use `this.props.fetchURL` to fetch from backend
    this.state = {
      name: '互联网',
      description: '描述：互联网',
      list: [
        {
          key: 0,
          jobID: 0,
        },
        {
          key: 1,
          jobID: 1,
        },
        {
          key: 2,
          jobID: 2,
        },
        {
          key: 3,
          jobID: 3,
        }
      ]
    };
  }

  render() {
    return (
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
            {this.state.name}
          </span>
        </div>
        <div
          style={{
            marginBottom: '16px'
          }}
        >
          <span
            style={{
              color: 'rgba(0,0,0,0.8)',
              fontSize: '14px',
              lineHeight: '22px'
            }}
          >
            {this.state.description}
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
            this.state.list.map(
              item =>
                <JobCard1
                  key={item.key}
                  jobID={item.jobID}
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
    );
  }
}

export {JobCard1List};
