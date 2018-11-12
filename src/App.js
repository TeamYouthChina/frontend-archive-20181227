import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// DO NOT exchange the next two lines!
import {store} from './data/store';
import {sagaMiddleware, saga} from './data/saga';
import * as actionJs from './data/action';
import {Home} from './ui/home';
import {RouterHelper} from './tool/router-helper';

/* UI */

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

/* start */

sagaMiddleware.run(saga);

store.dispatch(actionJs.creator(
  actionJs.type.saga.initialize
));

export {App};
