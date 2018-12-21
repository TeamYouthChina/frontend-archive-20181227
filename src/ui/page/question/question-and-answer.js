import React from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import {TopBar} from '../../module/top-bar';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import {AnswerText} from './answerText';

export class QuestionAndAnswer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    const style = {}
    return (
      <div style={style}>
        <TopBar></TopBar>
        <AnswerText></AnswerText>
      </div>
    );
  }
}
