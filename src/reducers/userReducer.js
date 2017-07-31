import { FETCH_USER_SUCCED, TOKEN_DELETE_SUCCED } from '../actions/constants'


const initState = {
  isAuthenticated: false,
  username: null,
}

export default function (state = initState, action) {
  switch (action.type) {
    case FETCH_USER_SUCCED:
      state = {
        ...state,
        isAuthenticated: true,
        username: action.payload.username
      }
      break;
    case (action.FETCH_USER):
      state = {
        ...state,


      }
      break;
    case TOKEN_DELETE_SUCCED:
      state = {
        ...state,
        isAuthenticated: false,
        username: null,
      }

      break;


    default:
      break;
  }
  return state;
}