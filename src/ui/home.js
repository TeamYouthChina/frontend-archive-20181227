import React from 'react';
import PropTypes from 'prop-types';

const Home = () => {
  return (
    <div>
      <div>
        Home
      </div>
    </div>
  );
};

Home.propTypes = {
  // route
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  // react
  language: PropTypes.string.isRequired
};

export {Home};
