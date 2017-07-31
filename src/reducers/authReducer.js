import {LOGIN_SUBMITTED,LOGIN_SUCCED,LOGIN_FAILED} from '../actions/constants'

const initState ={
  isLoading:false,
  isAuthenticated:localStorage.getItem('token') ?true:false,
  errorMessage:"",
}

export default function(state=initState,action){

  switch (action.type) {
    case LOGIN_SUBMITTED:
     
    state= {
        ...state,
        isLoading:true,
        isAuthenticated:false,
      }
      break;
    case LOGIN_SUCCED:
      state = {
        ...state,
        isLoading:false,
        isAuthenticated:true,
        errorMessage:"",
      }
      break;
    case LOGIN_FAILED:
      state = {
        ...state,
        isLoading:false,
        isAuthenticated:false,
        errorMessage:action.payload
      }
      break;
  
    default:    
      break;
  }
  return state
}