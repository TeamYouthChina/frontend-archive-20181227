import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {store} from './data/store';

import 'antd/dist/antd.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Home} from './ui/page/home';
import {Login} from './ui/page/login';
import {Applicant} from './ui/page/applicant';
import {Organization} from './ui/page/organization';
import {Job} from './ui/page/job';
import {Search} from './ui/page/search';
import {Help} from './ui/page/help';
import {PageNoFound} from './ui/page/page-no-found';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route
            exact path="/"
            component={routeProps => <Home {...routeProps} />}
          />
          <Route
            path="/login"
            component={routeProps => <Login {...routeProps} />}
          />
          <Route
            path="/applicant/:id"
            component={routeProps => <Applicant {...routeProps} />}
          />
          <Route
            path="/organization/:id"
            component={routeProps => <Organization {...routeProps} />}
          />
          <Route
            path="/job/:id"
            component={routeProps => <Job {...routeProps} />}
          />
          <Route
            path="/search"
            component={routeProps => <Search {...routeProps} />}
          />
          <Route
            path="/help"
            component={routeProps => <Help {...routeProps} />}
          />
          <Route
            component={routeProps => <PageNoFound {...routeProps} />}
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export {App};
