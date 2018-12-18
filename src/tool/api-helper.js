import fetch from 'isomorphic-fetch';

import {store} from '../data/store';

const urlPrefix = 'https://3551b58a-a5b1-4159-9911-40e2c539f8a3.mock.pstmn.io/api/v1/';

const generateHeaders = () => {
  let headers = {
    'Content-Type': 'application/json'
  };
  const id = store.getState().id;
  if (id) {
    headers = {
      ...headers,
      'x-id': id
    };
  }
  const token = store.getState().token;
  if (token) {
    headers = {
      ...headers,
      'x-token': token
    };
  }
  const language = store.getState().language;
  if (language) {
    headers = {
      ...headers,
      'x-language': language
    };
  }
  return headers;
};

export const get = (urlSuffix) => {
  return fetch(
    `${urlPrefix}${urlSuffix}`,
    {
      method: 'GET',
      headers: generateHeaders()
    }
  ).then((response) => {
    return response.json();
  });
};

export const post = (urlSuffix, requestBody) => {
  return fetch(
    `${urlPrefix}${urlSuffix}`,
    {
      method: 'POST',
      headers: generateHeaders(),
      body: JSON.stringify(requestBody)
    }
  ).then((response) => {
    return response.json();
  });
};
