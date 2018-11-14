import fetch from 'isomorphic-fetch';

import {store} from '../data/store';

const apiHelper = (urlParameter, sentData = undefined) => {
  return fetch(
    'https://www.youthchina.group/api/v1/' + urlParameter,
    {
      method: sentData ? 'POST' : 'GET',
      headers: {
        'cache-control': 'no-store',
        'token': store.getState().token,
      },
      body: sentData
    }
  ).then((response) => {
    return response.json();
  }).then((receivedData) => {
    return receivedData;
  });
};

export {apiHelper};
