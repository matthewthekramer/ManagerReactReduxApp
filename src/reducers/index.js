import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
//creates the state from combining the different reducers
export default combineReducers({
  auth: AuthReducer
});
