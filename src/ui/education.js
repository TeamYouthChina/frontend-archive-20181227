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

class Education extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    // simulation data
    this.state = {
      list: [
        {
          id: 1,
          degree: '硕士',
          university: '乔治华盛顿大学',
          major: '计算机科学',
          location: '美国 华盛顿特区',
          duration: {
            begin: '2018年9月',
            end: '2020年7月'
          },
          others: '（暂无）'
        },
        {
          id: 2,
          degree: '学士',
          university: '同济大学',
          major: '计算机科学与技术',
          location: '中国 上海',
          duration: {
            begin: '2012年9月',
            end: '2016年7月'
          },
          others: '（暂无）'
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
            {this.text.education}
          </p>
        </div>
        {
          this.state.list.map(
            item => (
              <div
                key={item.id}
                style={cssStyle.peopleCardItem}
              >
                <div style={cssStyle.peopleCardItemLeft}>
                  <img
                    src="http://icons.iconarchive.com/icons/graphicloads/100-flat/128/home-icon.png"
                    alt=""
                    width={54}
                    height={54}
                  />
                </div>
                <div
                  style={cssStyle.peopleCardItemRight}
                >
                  <div style={cssStyle.peopleCardItemRightTop}>
                    <div style={cssStyle.peopleCardItemRightTopLeft}>
                      <p style={cssStyle.textStyle3}> {item.university}</p>
                      <p style={cssStyle.textStyle2}> {item.degree}</p>
                    </div>
                    <div style={cssStyle.peopleCardItemRightTopRight}>
                      <button
                        style={cssStyle.peopleCardButton2}
                      >
                        <div style={{width: '20px'}}>
                          <svg
                            aria-hidden="true"
                            data-prefix="fas"
                            data-icon="edit"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path
                              d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                              fill="#1569e0"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div style={cssStyle.peopleCardItemRightBottom}>
                    <p style={cssStyle.textStyle1}>
                      {item.duration.begin + ' - ' + item.duration.end}
                    </p>
                    <p style={cssStyle.textStyle1}>
                      <span style={{fontWeight: 'bold'}}>{this.text.major}</span>
                      {item.major}
                    </p>
                  </div>
                </div>
              </div>
            )
          )
        }
        <div style={cssStyle.peopleCardLine}/>
        <button style={cssStyle.peopleCardButton}>
          {this.text.addProject}
        </button>
      </div>
    );
  }
}

Education.propTypes = {
  // react
  language: PropTypes.string.isRequired
};

export {Education};
