import axios from "axios";
import { every, identity } from "lodash/fp";
import { AUTH_ERROR, AUTH_SUCCESS } from "../types";

const APIBase = axios.create({
  baseURL: "/"
});

function authError(error) {
  return {
    type: AUTH_ERROR,
    error
  };
}

export const registerUser = (user, history) => dispatch => {
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
