import React from 'react';
import PropTypes from 'prop-types';

import {TopBar} from '../module/top-bar';

/* route: (no match) */

const PageNoFound = () => {
  return (
    <div>
      <TopBar language={this.props.language}/>
      <div>
        PageNoFound
      </div>
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
