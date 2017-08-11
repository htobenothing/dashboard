import {combineReducers} from 'redux';
import UserReducer from './userReducer'
import AuthReducer from './authReducer'
import OAuthReducer from './oAuthReducer'
import RouterReducer from './routReducer'
import {routerReducer} from 'react-router-redux'

const reducer = combineReducers({
  user:UserReducer,
  auth:AuthReducer,
  routing:RouterReducer,
  router:routerReducer,
})

export default reducer;