import {all} from 'redux-saga/effects';
import * as watcher from './watcher';

export default function* () {
  yield all([
    watcher.initialize(),
    watcher.login(),
    watcher.logout()
  ]);
}
