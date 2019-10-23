import * as types from "./Actions";
import axios from "axios";
import axiosWithAuth from "../axiosWithAuth";

export const fetchData = () => dispatch => {
  dispatch({ type: types.FETCH_DATA });
  axios
    .get("")
    .then(res => {
      dispatch({ type: types.FETCHED_SUCCESSFULLY, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: types.FETCH_FAILED, payload: err.response });
    });
};

export const deleteExperience = () => dispatch => {
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

export const updateExperience = () => dispatch => {
  dispatch({});
  axiosWithAuth()
    .put("")
    .then(res => {
      dispatch({});
    })
    .catch(err => {
      dispatch({});
    });
};

export const startAuth = () => {
  return {
    type: types.AUTH_START
  }
}

export const loginSuccess = () => {
  return { 
     type: types.LOGIN_SUCCESS
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
