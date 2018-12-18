import React from 'react';
import PropTypes from 'prop-types';

import {TopBar} from '../module/top-bar';

/* route: '/job/:id' */

const Job = (props) => {
  return (
    <div>
      <TopBar language={this.props.language}/>
      <div>
        Job ID: {props.match.params.id}
      </div>
    </div>
  );
};

Job.propTypes = {
  // route
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export {Job};
