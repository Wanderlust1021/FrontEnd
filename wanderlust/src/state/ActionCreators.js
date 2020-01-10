import * as types from "./Actions";
import axios from "./node_modules/axios";
import axiosWithAuth from "../axiosWithAuth";

export const fetchExperiences = () => dispatch => {
  dispatch({ type: types.FETCH_DATA });
  axiosWithAuth()
    .get("/exp")
    .then(res => {
      dispatch({ type: types.FETCHED_SUCCESSFULLY, payload: res.data });
    })
    .catch(err => {
      debugger
      dispatch({ type: types.FETCH_FAILED, payload: err.response });
    });
};


export const fetchOrganizers = () => dispatch => {
  dispatch({ type: types.FETCH_DATA });
  axiosWithAuth()
    .get("/org")
    .then(res => {
      debugger
      dispatch({ type: types.FETCHED_SUCCESSFULLY, payload: res.data });
    })
    .catch(err => {
      debugger
      dispatch({ type: types.FETCH_FAILED, payload: err.response });
    });
};

export const deleteExperiences = () => dispatch => {
  dispatch({});
  axiosWithAuth()
    .delete("")
    .then(res => {
      dispatch({});
    })
    .catch(err => {
      dispatch({});
    });
};

export const filterExperiences = (data) => {
  return {
    type: types.FILTER_EXPERIENCES,
    payload: data
  }
};

export const addExperience = (newExp) => {
  return {
    type: types.ADD_EXPERIENCE,
    payload: newExp
  }
};

export const fetchSuccess = (data) => {
  return { type: types.FETCHED_SUCCESSFULLY, payload: data };
}

export const startAuth = () => {
  return {
    type: types.AUTH_START
  }
}

export const loginSuccess = (username) => {
  return { 
    type: types.LOGIN_SUCCESS,
    payload: username
   }
 }

export const signupSuccess = (data) => {
  return {
    type: types.SIGNUP_SUCCESS,
    payload: data
  }
}

export const authFailure = (data) => {
 return { 
   type: types.AUTH_FAILURE,
   payload: data
 }
}

