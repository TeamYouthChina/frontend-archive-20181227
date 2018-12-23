import React from 'react';
import {Row, Col, Icon} from 'antd';
import ReactTextCollapse from 'react-text-collapse';

class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const hrStyle = {
      width: '95%',
      margin: '0 auto',
      border: '0',
      height: '1px',
      backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))'
    };
    // todo，根据内容高度而不是写死
    const TEXT_COLLAPSE_OPTIONS = {
      collapse: false,
      collapseText: '... 展开',
      expandText: '收起',
      minHeight: 68,
      maxHeight: 200,
      textStyle: {
        color: 'rgba(0, 0, 0, 0.65)',
        fontSize: '10px'
      }
    }
    
    return (
      <div>
        <Row>
          <Col span={2}><span style={{fontSize: '18px', color: '#000'}}>公司介绍</span></Col>
          <Col span={22} style={{marginTop: '13px'}}>
            <hr style={hrStyle}></hr>
          </Col>
        </Row>
        <Row>
          <div style={{paddingTop:'20px'}}>
            <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
              <p>
                React text collapse is awesome. React text collapse is awesome.<br />
                React text collapse is awesome. React text collapse is awesome.<br />
                React text collapse is awesome. React text collapse is awesome.<br />
                React text collapse is awesome. React text collapse is awesome.<br />
                React text collapse is awesome. React text collapse is awesome.<br />
                React text collapse is awesome. React text collapse is awesome.<br />
                React text collapse is awesome. React text collapse is awesome.<br />
                React text collapse is awesome. React text collapse is awesome.<br />
              </p>
            </ReactTextCollapse>
          </div>
        </Row>
      </div>
    );
  }
}

export default Introduction;
