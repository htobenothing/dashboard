import {combineReducers} from 'redux';
import UserReducer from './userReducer'
import AuthReducer from './authReducer'
import RouterReducer from './routReducer'

const reducer = combineReducers({
  user:UserReducer,
  auth:AuthReducer,
  routing:RouterReducer,
})

export default reducer;