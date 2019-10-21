import * as ACTION_TYPES from './action_types';

export const loginSuccess = () => {
  return { 
    type: ACTION_TYPES.LOGIN_SUCCESS
  }
}

export const loginFailure = (data) => {
  return { 
    type: ACTION_TYPES.LOGIN_FAILURE,
    payload: data
  }
}

export const signupSuccess = () => {
  return { 
    type: ACTION_TYPES.SIGNUP_SUCCESS
  }
}

export const signupFailure = (data) => {
  return { 
    type: ACTION_TYPES.SIGNUP_FAILURE,
    payload: data
  }
}
