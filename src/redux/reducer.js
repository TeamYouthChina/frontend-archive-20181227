import * as init from './init';
import * as actionJs from './action';

export default (state = init.state, action) => {
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
