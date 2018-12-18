import React from 'react';
import PropTypes from 'prop-types';

/* route: '/organization/:id' */
class Organization extends React.Component {
  render() {
    return (
      <div>
        Organization ID: {this.props.match.params.id}
      </div>
    );
  }
}

Organization.propTypes = {
  // router
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export {Organization};
