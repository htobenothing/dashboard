import * as C from './constants'
import axios from 'axios'
import {saveFile} from '../utils/saveFile'
import {history} from '../reducers/store'

export const CREATE_POST_START = "CREATE_POST_START"
export const CREATE_POST_SUCCED = "CREATE_POST_SUCCED"
export const CREATE_POST_FAILED = "CREATE_POST_FAILED"

export const FETCH_POST_START = "FETCH_POST_START"
export const FETCH_POST_SUCCED = "FETCH_POST_SUCCED"
export const FETCH_POST_FAILED ="FETCH_POST_FAILED"


export const FETCH_POSTLIST_START = "FETCH_POSTLIST_START"
export const FETCH_POSTLIST_SUCCED ="FETCH_POSTLIST_SUCCED"
export const FETCH_POSTLIST_FAILED ="FETCH_POSTLIST_FAILED"

export const UPDATE_POST_START = "UPDATE_POST_START"
export const UPDATE_POST_SUCCED="UPDATE_POST_SUCCED"
export const UPDATE_POST_FAILED = "UPDATE_POST_FAILED"

export const VIEW_POST_DETAIL = "VIEW_POST_DETAIL"


const postEndPoint = C.DEFAULT_ENDPOINT.post

// fetch post list
export function Create_Post_Start(post){
  return dispatch=>{
    dispatch({type:CREATE_POST_START,payload:post})    
    axios.post(postEndPoint,{
      Author:'htobenothing@gmail.com',
      Content:post.content,
      Status:0
    })
    .then((post)=>{
      dispatch(Create_Post_Succed(post.data))
      history.push("/main/gallery")
    })
    .catch((err)=>{
      dispatch(Create_Post_Failed(err))
    })
  }
}

export function Create_Post_Succed(post){
  return({type:CREATE_POST_SUCCED,payload:post})
}
export function Create_Post_Failed(err){
  return ({type:CREATE_POST_FAILED,payload:err})
}


// fetch post
export function Fetch_Post_Start(id) {

  return dispatch => {
    dispatch({type:FETCH_POST_START})
    axios.get(postEndPoint+id)
      .then((resp) => {
        
        dispatch(Fetch_Post_Succed(resp.data))

        // history.push("/main/markdown/"+id)
      })
      .catch((err) => {
        dispatch(Fetch_Post_Failed(err))
      })
  }

}

export function Fetch_Post_Succed(post) {
  // console.log('post',post)
  return ({ type: FETCH_POST_SUCCED, payload: post })
}

export function Fetch_Post_Failed(err) {
  return ({ type: FETCH_POST_FAILED, payload: err })
}

export function Update_Post_Start(post){

  return dispatch=>{
    console.log("new post",post)
    dispatch({type:UPDATE_POST_START,payload:post})

    axios.put(postEndPoint+post.Post_ID+"/",post)
    .then((resp)=>{
      dispatch(Update_Post_Succed(resp.data))
      // history.push("/main/posts/")
    })
    .catch((err)=>{
      Update_Post_Failed(err)
    })
  }
}
export function Update_Post_Succed(post){
  return ({type:UPDATE_POST_SUCCED,payload:post})

}
export function Update_Post_Failed(err){
  return ({type:UPDATE_POST_FAILED,payload:err})
}


// fetch post list
export function Fetech_PostList_Start(){
  return dispatch=>{
    // console.log("in list")
    dispatch({type:FETCH_POSTLIST_START})
    axios.get(postEndPoint)
    .then((resp)=>{
      
      dispatch(Fetech_PostList_Succed(resp.data))
      // history.push('/main/markdown');
    })
    .catch((err)=>{
      dispatch(Fetech_PostList_Failed(err))
    })
  }
}

export function Fetech_PostList_Succed(posts){
  return({type:FETCH_POSTLIST_SUCCED,payload:posts})
}

export function Fetech_PostList_Failed(err){
  return ({type:FETCH_POSTLIST_FAILED,payload:err})
}

export function View_Post_Detail(post){
  return({type:VIEW_POST_DETAIL,payload:post})
}