import * as init from './initial-state';
import * as actionJs from './action';

export default (state = init.initialState, action) => {
  switch (action.type) {
    case actionJs.type.global.authentication:
      return Object.assign({}, state, {
        authorization: action.value
      });
    default:
      return {
        ...state
      };
  }
};
