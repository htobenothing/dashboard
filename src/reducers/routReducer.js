import {REDIRECT} from '../actions/constants';

const initState={
  url:"/"
}

export default function(state=initState,action){
  switch (action.type) {
    case REDIRECT:
      
      state={
        ...state,
        url:action.payload
      }
      window.location = action.payload
      break;
  
    default:
      break;
  }
  return state;
}