import * as types from "../types";

export default function(state = {}, action) {
  switch (action.type) {
    case types.AUTH_SUCCESS:
      /**
       * TODO: get the user from the token
       */
      return {
        ...state,
        authenticated: true,
        error: null,
        user: action.payload
      };
    case types.AUTH_ERROR:
      return {
        ...state,
        authenticated: false,
        user: undefined
      };
    default:
      return state;
  }
}
