import {FETCH_USER,FETCH_USER_SUCCED,FETCH_USER_FAILED} from './constants'

export async function Fetch_User() {
  (dispatch)=>{

    dispatch({type:FETCH_USER})

  }
}