import * as types from "./Actions";
import axios from "axios";
import axiosWithAuth from "../axiosWithAuth";

export const fetchExperiences = () => dispatch => {
  dispatch({ type: types.FETCH_DATA });
  axiosWithAuth()
    .get("/exp")
    .then(res => {
      dispatch({ type: types.FETCHED_SUCCESSFULLY, payload: res.data });
    })
    .catch(err => {
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


// export const loginSuccess = () => {
//   return { 
//     type: ACTION_TYPES.LOGIN_SUCCESS
//   }
// }

// export const loginFailure = (data) => {
//   return { 
//     type: ACTION_TYPES.LOGIN_FAILURE,
//     payload: data
//   }
// }

// export const signupSuccess = () => {
//   return { 
//     type: ACTION_TYPES.SIGNUP_SUCCESS
//   }
// }

// export const signupFailure = (data) => {
//   return { 
//     type: ACTION_TYPES.SIGNUP_FAILURE,
//     payload: data
//   }
// }
