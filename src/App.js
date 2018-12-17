import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import {store} from './data/store';
import {RouterEntry} from './ui/page/router-entry';

import 'antd/dist/antd.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

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
