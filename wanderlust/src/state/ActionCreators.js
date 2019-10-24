import * as types from "./Actions";
import axios from "axios";
import axiosWithAuth from "../axiosWithAuth";

export const fetchExperience = () => dispatch => {
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

// const addExperience = e => dispatch => {
//   e.preventDefault();
//   axiosWithAuth()
//     .post("/org/register", );
// };

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
  };
};

<<<<<<< HEAD
export const loginSuccess = () => {
  return {
    type: types.LOGIN_SUCCESS
  };
};
=======
export const loginSuccess = (username) => {
  return { 
    type: types.LOGIN_SUCCESS,
    payload: username
   }
 }
>>>>>>> master

export const signupSuccess = data => {
  return {
    type: types.SIGNUP_SUCCESS,
    payload: data
  };
};

<<<<<<< HEAD
export const authFailure = data => {
  return {
    type: types.AUTH_FAILURE,
    payload: data
  };
};
=======
export const authFailure = (data) => {
 return { 
   type: types.AUTH_FAILURE,
   payload: data
 }
}

>>>>>>> master
