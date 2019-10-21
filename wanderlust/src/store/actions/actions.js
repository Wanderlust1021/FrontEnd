import * as ACTION_TYPES from './action_types';

export const loginSuccess = () => {
  return { 
    type: ACTION_TYPES.LOGIN_SUCCESS
  }
}

export const loginFailure = () => {
  return { 
    type: ACTION_TYPES.LOGIN_FAILURE
  }
}

export const signupSuccess = () => {
  return { 
    type: ACTION_TYPES.SIGNUP_SUCCESS
  }
}

export const signupFailure = () => {
  return { 
    type: ACTION_TYPES.SIGNUP_FAILURE
  }
}
