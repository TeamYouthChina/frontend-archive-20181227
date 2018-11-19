import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.css';

import {store} from './data/store';
import {RouterHelper} from './tool/router-helper';

// test pull request

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterHelper/>
      </BrowserRouter>
    </Provider>
  );
};

App.propTypes = {};

export {App};
