import React from 'react';
import PropTypes from 'prop-types';

const Job = (props) => {
  return (
    <div>
      Job ID: {props.match.params.id}
    </div>
  );
};

Job.propTypes = {
  // route
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  // react
  language: PropTypes.string.isRequired
};

export {Job};
