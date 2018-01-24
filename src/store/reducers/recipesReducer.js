import * as types from "../types";

const defaultState = {
  featured: [],
  current: undefined,
  error: null
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case types.FEATURED_RECIPES:
      return {
        ...state,
        error: null,
        featured: [...action.payload]
      };
    case types.GET_CURRENT_RECIPE:
      return {
        ...state,
        error: null,
        current: action.payload
      };
    case types.RECIPES_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case types.RESET_RECIPE:
      return {
        ...state,
        current: undefined
      };
    default:
      return state;
  }
}
