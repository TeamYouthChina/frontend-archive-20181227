import {takeLatest} from 'redux-saga/effects';
import * as actionJs from '../action';

import * as worker from './worker';

const initialize = function* () {
  yield takeLatest(actionJs.type.saga.initialize, worker.initialize);
};

const login = function* () {
  yield takeLatest(actionJs.type.saga.login, worker.login);
};

const logout = function* () {
  yield takeLatest(actionJs.type.saga.logout, worker.logout);
};

export {initialize, login, logout};
