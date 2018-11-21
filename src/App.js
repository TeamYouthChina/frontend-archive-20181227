import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {store} from './data/store';
import {RouterEntry} from './ui/page/router-entry';
import 'antd/dist/antd.css'; // It provides basic style of <body>.

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterEntry/>
      </BrowserRouter>
    </Provider>
  );
};

export {App};
