import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import {Home} from '../ui/home';
import {Login} from '../ui/login';
import {People} from '../ui/people/index';
import {Organization} from '../ui/organization';
import {Job} from '../ui/job';
import {PageNoFound} from '../ui/page-no-found';

const RouterHelperReact = (props) => {
  return (
    <Switch>
      <Route
        exact path="/"
        component={routeProps => <Home {...routeProps} language={props.language}/>}
      />
      <Route
        path="/login/"
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
      <Route component={routeProps => <PageNoFound {...routeProps} language={props.language}/>}/>
    </Switch>
  );
};

RouterHelperReact.propTypes = {
  language: PropTypes.string.isRequired
};

const RouterHelper = connect(
  (state) => {
    return {
      language: state.language
    };
  }
)(RouterHelperReact);

export {RouterHelper};
