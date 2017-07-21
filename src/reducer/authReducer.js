import {LOGIN_SUBMITTED,LOGIN_SUCCED,LOGIN_FAILED} from '../actions/constants'

const initState ={
  isLoading:false,
  isLoaded:false,
  
  username:null,
}

export default function(state=initState,action){

  switch (action.type) {
    case LOGIN_SUBMITTED:
      state= {
        ...state,
        isLoading:true
      }
      break;
    case LOGIN_SUCCED:
      state = {
        ...state,
        isLoading:false,
        isLoaded:false,
        username:action.payload.username
      }
      break;
    case LOGIN_FAILED:
      state = {
        ...state,
        isLoading:false,
        isLoaded:false,
        username:null,
      }
      break;
  
    default:    
      break;
  }
  return state
}