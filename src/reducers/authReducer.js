import { LOGIN_SUBMITTED, LOGIN_SUCCED, LOGIN_FAILED } from '../actions/constants'
import * as C from '../actions/constants'
const initState = {
  isLoading: false,
  // isAuthenticated: localStorage.getItem('access-token') ? true : false,
  isAuthenticated:false,
  user:{},
  errorMessage: "",
}

export default function (state = initState, action) {

  switch (action.type) {
    case LOGIN_SUBMITTED:

      state = {
        ...state,
        isLoading: true,
        isAuthenticated: false,
      }
      break;
    case LOGIN_SUCCED:
      state = {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user:action.payload,
      }
      
      break;
    case LOGIN_FAILED:
      state = {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        errorMessage: action.payload
      }
      break;

    case C.SIGNOUT_START:
      state = {
        ...state,
        isLoading: true,
      }
      break;
    case C.SIGNOUT_SUCCED:
      state = {
        ...state,
        isLoading: false,
        isAuthenticated: false
      }
      break;
    case C.SIGNOUT_FAILED:
      state = {
        ...state,
        isLoading: false,
      }
      break;

    default:
      break;
  }
  return state
}