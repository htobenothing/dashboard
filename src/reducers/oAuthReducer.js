import {OAUTH_SIGNIN_START,OAUTH_SIGNIN_SUCCED,OAUTH_SIGNIN_FAILED} from '../actions/constants'

const initState ={
  isLoading:false,
  isAuthenticated:localStorage.getItem('access-token') ?true:false,
  errorMessage:"",
}

export default function (state=initState,action) {

  switch (action.type) {
    case OAUTH_SIGNIN_START:
      state = {
        ...state,
        isLoading:true,
        isAuthenticated:false,
      }
      break;
    case OAUTH_SIGNIN_SUCCED:
      state ={
        ...state,
        isLoading:false,
        isAuthenticated:true,
      }
      break;
    case OAUTH_SIGNIN_FAILED:
      state={
        ...state,
        isLoading:false,
        isAuthenticated:false,
        errorMessage:action.payload,
      }
      break;      
    default:
      break;
  }
  return state;
}