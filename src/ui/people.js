import React from 'react';

const People = (props) => {
  return (
    <div>
      People ID: {props.match.params.id /* eslint-disable-line react/prop-types */}
    </div>
  );
};

People.propTypes = {};

export {People};
