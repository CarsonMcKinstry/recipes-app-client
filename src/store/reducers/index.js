import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import authReducer from "./authReducer";
import recipesReducer from "./recipesReducer";

export default combineReducers({
  form,
  auth: authReducer,
  recipes: recipesReducer
});
