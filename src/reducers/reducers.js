import {combineReducers} from 'redux';
import UserReducer from './userReducer'
import AuthReducer from './authReducer'
const reducer = combineReducers({
  user:UserReducer,
  auth:AuthReducer,
})

export default reducer;