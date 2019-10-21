import * as types from "./Actions";


const initialState = {
    appState : [],
    isLoading : false,
    error : "",
    test: "its working",
}


export function appReducer(state=initialState, action){
switch(action.type){

    
    // case types.FETCH_DATA:
    //     return {
    //       ...state,
    //       isLoading: true,
    //       error: ""
    //     };
    //     case types.FETCH_DATA:
    //     return {
    //       ...state,
    //       isButtonTouched: true,
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
return state
}
} 