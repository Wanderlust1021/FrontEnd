import * as types from "./Actions";

const initialAppState = {
  experiences: [],
  organizers: [],
  data: [],
  isLoading: false,
  error: null
};

export function experienceReducer(state = initialAppState, action) {
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
        data: action.payload
      };
    case types.FETCH_FAILED:
      return {
        ...state,
        error: action.payload
      };

    case types.ADD_EXPERIENCE:
      debugger
      return {
        ...state,
        data: [...state.data, action.payload]
      }

    default:
      return state;
  }
}

const initialAuthState = {
  isAuthenticated: false,
  error: null,
  username: '',
  orgname: '',
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
          isLoading: false,
          username: action.payload.username,
          orgname: action.payload.organization
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
