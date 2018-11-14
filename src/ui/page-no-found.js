import React from 'react';
import PropTypes from 'prop-types';

const PageNoFound = () => {
  return (
    <div>
      PageNoFound
    </div>
  );
};

PageNoFound.propTypes = {
  // route
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  // react
  language: PropTypes.string.isRequired
};

export {PageNoFound};
