import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {People} from '../ui/people';
import {Organization} from '../ui/organization';
import {Job} from '../ui/job';
import {PageNoFound} from '../ui/page-no-found';

const Delivery = (props) => {
  return (
    <Switch>
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

Delivery.propTypes = {};

export {Delivery};
