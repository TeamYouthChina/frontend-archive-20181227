import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {Login} from '../ui/login';
import {People} from '../ui/people';
import {Organization} from '../ui/organization';
import {Job} from '../ui/job';
import {PageNoFound} from '../ui/page-no-found';

const RouterHelper = (props) => {
  return (
    <Switch>
      <Route
        path={props.match.path + 'login/' /* eslint-disable-line react/prop-types */}
        component={Login}
      />
      <Route
        path={props.match.path + 'people/:id' /* eslint-disable-line react/prop-types */}
        component={People}
      />
      <Route
        path={props.match.path + 'organization/:id' /* eslint-disable-line react/prop-types */}
        component={Organization}
      />
      <Route
        path={props.match.path + 'job/:id' /* eslint-disable-line react/prop-types */}
        component={Job}
      />
      <Route component={PageNoFound}/>
    </Switch>
  );
};

RouterHelper.propTypes = {};

export {RouterHelper};
