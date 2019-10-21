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
