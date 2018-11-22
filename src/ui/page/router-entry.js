import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import {Home} from './home';
import {Login} from './login';
import {People} from './people';
import {Organization} from './organization';
import {Job} from './job';
import {PageNoFound} from './page-no-found';
import {Search} from './search';
import {Help} from './help';

const RouterEntryReact = (props) => {
  return (
    <Switch>
      <Route
        exact path="/"
        component={routeProps => <Home {...routeProps} language={props.language}/>}
      />
      <Route
        path="/login"
        component={routeProps => <Login {...routeProps} language={props.language}/>}
      />
      <Route
        path="/people/:id"
        component={routeProps => <People {...routeProps} language={props.language}/>}
      />
      <Route
        path="/organization/:id"
        component={routeProps => <Organization {...routeProps} language={props.language}/>}
      />
      <Route
        path="/job/:id"
        component={routeProps => <Job {...routeProps} language={props.language}/>}
      />
      <Route
        path="/search"
        component={routeProps => <Search {...routeProps} language={props.language}/>}
      />
      <Route
        path="/help"
        component={routeProps => <Help {...routeProps} language={props.language}/>}
      />
      <Route component={routeProps => <PageNoFound {...routeProps} language={props.language}/>}/>
    </Switch>
  );
};

RouterEntryReact.propTypes = {
  language: PropTypes.string.isRequired
};

const RouterEntry = connect(
  (state) => {
    return {
      language: state.language
    };
  }
)(RouterEntryReact);

export {RouterEntry};
