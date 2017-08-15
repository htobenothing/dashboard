import * as C from './constants'
import axios from 'axios'

export const CREATE_POST_START = "CREATE_POST_START"
export const CREATE_POST_SCUCCED = "CREATE_POST_SUCCED"
export const CREATE_POST_FAILED = "CREATE_POST_FAILED"

export function Create_Post_Start(post){
  return dispatch=>{
    dispatch({type:CREATE_POST_START,payload:post})

    console.log('post save success',post)
    // post 'post'  
  }
}

export function Fetch_Post_Start(params) {

  return dispatch => {
    dispatch({type:C.FETCH_POST_START})
    axios.get("url")
      .then(() => {
        dispatch(Fetch_Post_Succed)
      })
      .catch((err) => {
        dispatch(Fetch_Post_Failed(err))
      })
  }

}

export function Fetch_Post_Succed(post) {
  return ({ type: C.FETCH_POST_SUCCED, payload: post })
}

export function Fetch_Post_Failed(err) {
  return ({ type: C.FETCH_POST_FAILED, payload: err })
}
