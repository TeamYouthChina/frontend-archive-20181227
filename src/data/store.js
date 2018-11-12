import {applyMiddleware, createStore} from 'redux';

import reducer from './reducer';
import {sagaMiddleware} from './saga';

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

export {store};
