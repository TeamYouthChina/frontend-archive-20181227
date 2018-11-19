import React from 'react';
import PropTypes from 'prop-types';

import {languageHelper} from '../tool/language-helper';
import * as cssStyle from './cssStyle';


const i18n = [
  {
    skill: '技能',
    addSkill: '添加工作经历'
  },
  {
    skill: 'Skill',
    addSkill: 'Add Skill'
  }
];

class Skill extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    // simulation data
    this.state = {
      list: [
        {
          id: 1,
          content: 'C++'
        },
        {
          id: 2,
          content: 'Java'
        },
        {
          id: 3,
          content: 'JavaScript'
        },
        {
          id: 4,
          content: 'Python'
        },
        {
          id: 5,
          content: 'C#'
        },
        {
          id: 6,
          content: 'Git'
        },
        {
          id: 7,
          content: 'Bash'
        },
        {
          id: 8,
          content: 'MATLAB'
        },
        {
          id: 9,
          content: 'GitHub'
        },
        {
          id: 10,
          content: 'C'
        },
        {
          id: 11,
          content: 'React.js'
        },
        {
          id: 12,
          content: 'Redux.js'
        },
        {
          id: 13,
          content: 'Node.js'
        },
        {
          id: 14,
          content: 'Go'
        },
        {
          id: 15,
          content: 'Basic'
        },
        {
          id: 16,
          content: 'Word'
        },
        {
          id: 17,
          content: 'Excel'
        }
      ]
    };
    /*
    * */
    this.text = i18n[languageHelper(this.props.language)];
  }

  render() {
    return (
      <div style={cssStyle.peopleCard}>
        <div style={cssStyle.peopleCardTitle}>
          <p style={cssStyle.textStyle3}>
            {this.text.skill}
          </p>
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '0 16px 16px 16px',
        }}>
          {
            this.state.list.map(
              item => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: '#f0f0f0',
                    borderRadius: '3px',
                    display: 'flex',
                    flexShrink: 0,
                    lineHeight: '15px',
                    margin: '0 8px 8px 0',
                    padding: '4px 8px'
                  }}
                >
                  <span
                    style={{
                      color: '#575757',
                      fontSize: '13px',
                      fontWeight: '500'
                    }}
                  >
                    {item.content}
                  </span>
                  <button
                    style={{
                      background: 'transparent',
                      border: 0,
                      color: '#adadad',
                      height: '15px',
                      padding: '0 0 0 4px',
                      width: '14px'
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      data-prefix="fas"
                      data-icon="times"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"
                    >
                      <path
                        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              )
            )
          }
        </div>
      </div>
    );
  }
}

Skill.propTypes = {
  // react
  language: PropTypes.string.isRequired
};

export {Skill};
