import React from 'react';
import PropTypes from 'prop-types';

import {languageHelper} from '../tool/language-helper';
import {Education} from './education';
import {Experience} from './experience';
import {Extracurricular} from './extracurricular';
import {Project} from './project';
import {Certification} from './certification';
import {Skill} from './skill';
import {Basic} from './basic';


const i18n = [
  {
    basic: '基本',
    project: '教育',
    skill: '工作经历'
  },
  {
    basic: 'Basic',
    project: 'Education',
    skill: 'Experience'
  }
];

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
    /*
    * */
    this.text = i18n[languageHelper(this.props.language)];
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
        <div
          style={{
            background: '#1569e0',
            boxShadow: '0 0 4px 1px rgba(0,0,0,0.05), 2px 2px 6px 2px rgba(0,0,0,0.15)',
            position: 'fixed',
            height: '55px',
            width: document.body.offsetWidth
          }}
        >
        </div>
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
                  <Basic language={this.props.language}/>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '66.66%',
                      marginRight: '12px'
                    }}
                  >
                    <Education language={this.props.language}/>
                    <Experience language={this.props.language}/>
                    <Certification language={this.props.language}/>
                    <Extracurricular language={this.props.language}/>
                    <Project language={this.props.language}/>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '33.33%',
                      marginLeft: '12px'
                    }}
                  >
                    <Skill language={this.props.language}/>
                  </div>

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
