import * as types from "./Actions";

const initialState = {
  appState: [],
  isLoading: false,
  error: "",
  test: "its working"
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    // case types.FETCH_DATA:
    //     return {
    //       ...state,
    //       isLoading: true,
    //       error: ""
    //     };
    //   case types.FETCHED_SUCCESSFULLY:
    //     return {
    //       ...state,
    //       isLoading: false,
    //       appState: action.payload
    //     };
    //   case types.FETCH_FAILED:
    //     return {
    //       ...state,
    //       error: action.payload
    //     };

    default:
      return state;
  }
}




const initialAuthState = {
    isAuthenticated: false,
    error: null
  }

export const authReducer = (state=initialAuthState, action) => {
    switch(action.type) {
      case types.LOGIN_SUCCESS:
      case types.SIGNUP_SUCCESS:
        debugger
        return {
          ...state,
          isAuthenticated: true
        }
  
      case types.LOGIN_FAILURE:
      case types.SIGNUP_FAILURE:
        debugger
        return {
          isAuthenticated: false,
          error: action.payload
        }
  
      default:
        return state;
    }
  }