import {combineReducers} from 'redux';
import UserReducer from './userReducer'
import AuthReducer from './authReducer'
import OAuthReducer from './oAuthReducer'
import RouterReducer from './routReducer'


const reducer = combineReducers({
  user:UserReducer,
  auth:AuthReducer,
  oauth:OAuthReducer,
  routing:RouterReducer,
})

export default reducer;