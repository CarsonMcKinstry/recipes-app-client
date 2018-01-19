import axios from "axios";
import { AUTH_ERROR, AUTH_SUCCESS, SIGNOUT } from "../types";
import { handleSignin, handleRegister } from "../api";

export function signin(user, history) {
  return function(dispatch) {
    handleSignin(user)
      .then(res => {
        dispatch({
          type: AUTH_SUCCESS,
          payload: res.data.token
        });
        localStorage.setItem("token", res.data.token);
        history.push("/");
      })
      .catch(err => {
        dispatch(authError(err.message));
      });
  };
}

export const signout = () => dispatch => {
  dispatch({ type: SIGNOUT });
};

export const authError = error => {
  return {
    type: AUTH_ERROR,
    error
  };
};

export function registerUser(user, history) {
  return function(dispatch) {
    handleRegister
      .then(res => {
        dispatch({
          type: AUTH_SUCCESS,
          payload: res.data.token
        });
        localStorage.setItem("token", res.data.token);
        history.push("/");
      })
      .catch(err => {
        dispatch(authError(err.message));
      });
  };
}
