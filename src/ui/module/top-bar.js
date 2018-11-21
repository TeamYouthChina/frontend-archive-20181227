import React from 'react';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          background: '#1569e0',
          boxShadow: '0 0 4px 1px rgba(0,0,0,0.05), 2px 2px 6px 2px rgba(0,0,0,0.15)',
          position: 'fixed',
          height: '55px',
          width: document.body.offsetWidth,
          zIndex: 1
        }}
      >
      </div>
    );
  }
}

export {TopBar};
