import { combineReducers } from 'redux';
import { authReducer } from './auth_reducer';

export const reducers = combineReducers({
  auth: auth_reducer,
})
