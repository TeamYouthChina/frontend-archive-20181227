import React from 'react';
import PropTypes from 'prop-types';

const Login = () => {
  return (
    <div>
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
