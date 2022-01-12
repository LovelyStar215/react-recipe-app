import {
  RECIPE_LOADING,
  GET_RECIPES,
  GET_DETAIL_RECIPE,
  GET_ERRORS,
  CREATE_RECIPE,
  LIKE_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
  SAVE_RECIPE,
} from "./types";
import axiosInstance from "../../utils/axios";
import { tokenConfig } from "./auth";

export const getRecipes = () => (dispatch) => {
  dispatch({ type: RECIPE_LOADING });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  axiosInstance
    .get("/recipe/", null, config)
    .then((res) => {
      dispatch({
        type: GET_RECIPES,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const getDetailRecipe = (id) => (dispatch, getState) => {
  dispatch({ type: RECIPE_LOADING });

  axiosInstance
    .get(`/recipe/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_DETAIL_RECIPE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const createRecipe = (formData) => (dispatch, getState) => {
  dispatch({ type: RECIPE_LOADING });

  axiosInstance
    .post("/recipe/create/", formData, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CREATE_RECIPE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const editRecipe = (id, formData) => (dispatch, getState) => {
  dispatch({ type: RECIPE_LOADING });

  axiosInstance
    .patch(`/recipe/${id}/`, formData, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: EDIT_RECIPE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const deleteRecipe = (id) => (dispatch, getState) => {
  dispatch({ type: RECIPE_LOADING });

  axiosInstance
    .delete(`/recipe/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_RECIPE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const likeRecipe = (id) => (dispatch, getState) => {
  dispatch({ type: RECIPE_LOADING });

  axiosInstance
    .post(`/recipe/${id}/like/`, null, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: LIKE_RECIPE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const saveRecipe = (user_id, id) => (dispatch, getState) => {
  dispatch({ type: RECIPE_LOADING });

  const body = JSON.stringify({ id });

  axiosInstance
    .post(`/user/profile/${user_id}/bookmarks/`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SAVE_RECIPE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};
