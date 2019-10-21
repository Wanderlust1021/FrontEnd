import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
  isAuthenticated: false,
  error: null
}

export const authReducer = (state=initialState, action) => {
  switch(action.type) {
    case ACTION_TYPES.LOGIN_SUCCESS:
    case ACTION_TYPES.SIGNUP_SUCCESS:
      debugger
      return {
        ...state,
        isAuthenticated: true
      }

    case ACTION_TYPES.LOGIN_FAILURE:
    case ACTION_TYPES.SIGNUP_FAILURE:
      debugger
      return {
        isAuthenticated: false,
        error: action.payload
      }

    default:
      return state;
  }
}
