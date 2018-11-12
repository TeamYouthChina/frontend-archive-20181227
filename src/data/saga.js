import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';

import * as watcher from './watcher';

const sagaMiddleware = createSagaMiddleware();

const saga = function* () {
  yield all([
    watcher.initialize(),
    watcher.login(),
    watcher.logout()
  ]);
};

export {saga, sagaMiddleware};
