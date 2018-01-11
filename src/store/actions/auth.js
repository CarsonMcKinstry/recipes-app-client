import axios from "axios";
import { AUTH_ERROR, AUTH_SUCCESS, SIGNOUT } from "../types";

const APIBase = axios.create({
  baseURL: "/"
});

export function signin(user, history) {
  return function(dispatch) {
    APIBase.post("login", user)
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
    APIBase.post("register", user)
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
