import {CREATE_POST_START,CREATE_POST_SCUCCED,CREATE_POST_FAILED} from '../actions/postAction'

const initState={
  isProcessing:false,
  status:false,
  errorMessage:"",
  post:{}
}

export default function (state=initState,action) {

  switch (action.type) {
    case CREATE_POST_START:
      state = {
        ...state,
        isProcessing:true,
        post:action.payload,
      }
      break;
    case CREATE_POST_SCUCCED:
      state ={
        ...state,
        isProcessing:false,
        status:true,
      }
      break;
    case CREATE_POST_FAILED:
      state={
        ...state,
        isProcessing:false,
        status:false,
        errorMessage:action.payload,
      }
      break;      
    default:
      break;
  }
  return state;
}