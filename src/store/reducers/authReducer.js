import * as types from "../types";
import jwtDecode from "jwt-decode";

export default function(
  state = { authenticated: false, error: null, user: undefined },
  action
) {
  switch (action.type) {
    case types.SIGNOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        authenticated: false,
        error: null,
        user: undefined
      };
    case types.AUTH_SUCCESS:
      const user = jwtDecode(action.payload);

      return {
        ...state,
        authenticated: true,
        error: null,
        user
      };
    case types.AUTH_ERROR:
      return {
        ...state,
        authenticated: false,
        user: undefined,
        error: action.error
      };
    default:
      return state;
  }
}
