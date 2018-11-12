import fetch from 'isomorphic-fetch';

import {store} from '../data/store';

const apiHelper = (parameter, data = undefined) => {
  return fetch(
    'https://www.youthchina.group/api/' + parameter,
    {
      method: data ? 'POST' : 'GET',
      headers: {
        'cache-control': 'no-store',
        'token': store.getState().authentication.token,
      },
      body: data
    }
  ).then((response) => {
    return response.json();
  }).then((data) => {
    return data;
  });
};

export {apiHelper};
