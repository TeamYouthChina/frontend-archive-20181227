import React from 'react';
import PropTypes from 'prop-types';

/* route: '/organization/:id' */

const Organization = (props) => {
  return (
    <div>
      Organization ID: {props.match.params.id}
    </div>
  );
};

Organization.propTypes = {
  // router
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  // react
  language: PropTypes.string.isRequired
};

export {Organization};
