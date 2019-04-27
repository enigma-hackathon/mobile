import { combineReducers } from 'redux';
import authReducer from './auth';
import matchReducer from './match';

export default combineReducers({
  auth: authReducer,
  match: matchReducer,
});