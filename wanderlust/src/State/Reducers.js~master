import * as types from "./Actions";

const initialAppState = {
  appState: [],
  isLoading: false,
  error: null,
  test: "its working"
};


export function appReducer(state = initialAppState, action) {
  switch (action.type) {
     case types.FETCH_DATA:
         return {
           ...state,
           isLoading: true,
           error: ""
         };
       case types.FETCHED_SUCCESSFULLY:
         return {
           ...state,
           isLoading: false,
           appState: action.payload
         };
       case types.FETCH_FAILED:
         return {
           ...state,
           error: action.payload
         };

    default:
      return state;
  }
}



const initialAuthState = {
  isAuthenticated: false,
  error: null,
  username: '',
  isLoading: false
};

export const authReducer = (state=initialAuthState, action) => {
    switch(action.type) {
      case types.AUTH_START:
        return {
          ...state,
          isLoading: true
        }

      case types.LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false
        }
  
      case types.SIGNUP_SUCCESS:
        return {
          ...state,
          username: action.payload,
          isLoading: false
        }
  
      case types.AUTH_FAILURE:
        debugger
        return {
          isAuthenticated: false,
          error: action.payload,
          isLoading: false
        }

      default:
        return state;
    }
  }
