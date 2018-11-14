import * as init from './initial-state';
import * as actionJs from './action';

export default (state = init.initialState, action) => {
  switch (action.type) {
    case actionJs.type.id:
      return Object.assign({}, state, {
        id: action.value
      });
    case actionJs.type.token:
      return Object.assign({}, state, {
        token: action.value
      });
    case actionJs.type.language:
      return Object.assign({}, state, {
        language: action.value
      });
    default:
      return {
        ...state
      };
  }
};
