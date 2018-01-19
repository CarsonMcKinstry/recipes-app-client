import axios from "axios";
import { FEATURED_RECIPES, RECIPES_ERROR, GET_CURRENT_RECIPE } from "../types";

import { handleGetFeatured, handleGetRecipe } from "../api";

export function getFeatured() {
  return function(dispatch) {
    handleGetFeatured(3)
      .then(res => {
        dispatch({
          type: FEATURED_RECIPES,
          payload: res.data.recipes
        });
      })
      .catch(err => {
        dispatch({
          type: RECIPES_ERROR,
          payload: "There was an error fetching featured recipes"
        });
      });
  };
}

export function getRecipe(id) {
  return function(dispatch) {
    handleGetRecipe(id)
      .then(res => {
        dispatch({
          type: GET_CURRENT_RECIPE,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: RECIPES_ERROR,
          payload: "There was an error fetching that recipe"
        });
      });
  };
}
