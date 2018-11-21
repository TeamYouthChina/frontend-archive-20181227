import React from 'react';
import PropTypes from 'prop-types';

import {TopBar} from '../module/top-bar';

/* route: '/login' */

const Login = () => {
  return (
    <div>
      <TopBar language={this.props.language}/>
      <div>
        Login
      </div>
    </div>
  );
};

Login.propTypes = {
  // route
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  // react
  language: PropTypes.string.isRequired
};

export {Login};
