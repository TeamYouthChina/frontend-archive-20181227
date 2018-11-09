import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Home} from './ui/home';
import {Delivery} from './tool/delivery';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route component={Delivery}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {};

export default App;
