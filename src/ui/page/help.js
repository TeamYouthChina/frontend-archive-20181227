import React from 'react';
import {Questions} from '../module/questions';

class Help extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Questions/>
      </div>
    );
  }
}

export {Help};
