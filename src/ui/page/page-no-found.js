import React from 'react';
import PropTypes from 'prop-types';

import {TopBar} from '../module/top-bar';

/* route: (no match) */

class PageNoFound extends React.Component {
  render() {
    return (
      <div>
        <TopBar language={this.props.language}/>
        <div>
          PageNoFound
        </div>
      </div>
    );
  }
}


PageNoFound.propTypes = {
  // route
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export {PageNoFound};
