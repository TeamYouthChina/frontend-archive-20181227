import React from 'react';

const Organization = (props) => {
  return (
    <div>
      Organization ID: {props.match.params.id /* eslint-disable-line react/prop-types */}
    </div>
  );
};

Organization.propTypes = {};

export {Organization};
