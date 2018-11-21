import React from 'react';
import PropTypes from 'prop-types';

import {Education} from '../module/education';
import {Experience} from '../module/experience';
import {Extracurricular} from '../module/extracurricular';
import {Project} from '../module/project';
import {Certification} from '../module/certification';
import {Skill} from '../module/skill';
import {TopProfile} from '../module/top-profile';
import {TopBar} from '../module/top-bar';
import {Basic} from '../module/basic';

class People extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    // simulation data
    if (this.props.match.params.id > 5) {
      this.state = {
        type: 'B'
      };
    } else {
      this.state = {
        type: 'C'
      };
    }
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#f7f7f7'
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
          {
            this.state.type === 'B' ? (
              null
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 1224,
                }}
              >
                <div>
                  <TopProfile language={this.props.language}/>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Basic language={this.props.language}/>
                  <Education language={this.props.language}/>
                  <Experience language={this.props.language}/>
                  <Certification language={this.props.language}/>
                  <Extracurricular language={this.props.language}/>
                  <Project language={this.props.language}/>
                  <Skill language={this.props.language}/>
                </div>
              </div>
            )
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
