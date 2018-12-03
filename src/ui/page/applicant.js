import React from 'react';
import PropTypes from 'prop-types';

import {Education} from '../module/education';
import {Experience} from '../module/experience';
import {Extracurricular} from '../module/extracurricular';
import {Project} from '../module/project';
import {Certificate} from '../module/certificate';
import {Skill} from '../module/skill';
import {TopProfile} from '../module/top-profile';
import {TopBar} from '../module/top-bar';
import {Contact} from '../module/contact';

class Applicant extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {};
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 1224,
            }}
          >
            <div>
              <TopProfile language={this.props.language} id={this.props.match.params.id}/>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Contact language={this.props.language} id={this.props.match.params.id}/>
              <Education language={this.props.language} id={this.props.match.params.id}/>
              <Experience language={this.props.language} id={this.props.match.params.id}/>
              <Certificate language={this.props.language} id={this.props.match.params.id}/>
              <Extracurricular language={this.props.language} id={this.props.match.params.id}/>
              <Project language={this.props.language} id={this.props.match.params.id}/>
              <Skill language={this.props.language} id={this.props.match.params.id}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Applicant.propTypes = {
  // route
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  // react
  language: PropTypes.string.isRequired
};

export {Applicant};
