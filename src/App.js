import React from 'react';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import * as actionJs from './redux/action';
import reducer from './redux/reducer';
import saga from './redux/saga/entrance';

import {Home} from './ui/home';
import {RouterHelper} from './tool/router-helper';

// data

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga);

store.dispatch(actionJs.creator(
  actionJs.type.saga.initialize
));

// ui

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={RouterHelper}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

App.propTypes = {};

export {store, App};
