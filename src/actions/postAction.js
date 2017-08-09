import * as C from './constants'
import axios from 'axios'





function Fetch_Post_Start(params) {

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
