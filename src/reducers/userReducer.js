import {FETCH_USER,FETCH_USER_SUCCED,TOKEN_DELETE_SUCCED} from '../actions/constants'


const initState = {
  isAuthenticated:false,
  username : null,
}

export default function(state = initState,action){
  switch (action.type) {
    case FETCH_USER_SUCCED:
      return{
        ...state,
        isAuthenticated:true,
        username:action.payload.username
      }
      break;
    case (action.FETCH_USER):
      state = {
        ...state,
        
        
      }
      break;
    case TOKEN_DELETE_SUCCED:
      return {
        ...state,
        isAuthenticated:false,
        username:null,
      }
      
      break;


    default:
      return state;
  }
}