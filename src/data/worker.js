/* eslint-disable no-console */

import {call, put} from 'redux-saga/effects';

import * as actionJs from './action';
import {apiHelper} from '../tool/api-helper';

const initialize = function* () {
};

const login = function* (action) {
  try {
    // get data from backend
    let backendData = yield call(apiHelper, 'login/', action.value);
    // format
    let standardData = backendData;
    // set data to the store and (update states)
    yield put(actionJs.creator(
      actionJs.type.global.authentication,
      standardData
    ));
  } catch (error) {
    console.log('data/saga/worker.login', error);
  }
};

const logout = function* () {
  try {
    // get data from backend
    let backendData = yield call(apiHelper, 'logout/');
    // transform
    let standardData = backendData;
    // set data to the store and update states
    yield put(actionJs.creator(
      actionJs.type.global.authentication,
      standardData
    ));
  } catch (error) {
    console.log('data/saga/worker.logout', error);
  }
};

export {initialize, login, logout};
