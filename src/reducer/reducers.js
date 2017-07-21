import {combineReducers} from 'redux';
import UserReducer from './userReducer'
import AuthReducer from './authReducer'

const reducer = combineReducers({
  UserReducer,
  AuthReducer
})

export default reducer;