import React from 'react';

const Job = (props) => {
  return (
    <div>
      Job ID: {props.match.params.id /* eslint-disable-line react/prop-types */}
    </div>
  );
};

Job.propTypes = {};

export {Job};
