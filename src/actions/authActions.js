import { LOGIN_SUBMITTED, LOGIN_SUCCED, LOGIN_FAILED, DEFAULT_ENDPOINT } from "./constants"
import * as C from './constants'
import { redirectTo } from './routerAction'
import React from 'react'
import ApiUtils from '../utils/apiUtils'
import axios from 'axios'
import {history} from '../reducers/store'

export function Login_Submitted(creds) {


  return dispatch => {

    dispatch({ type: LOGIN_SUBMITTED })
    axios.post(DEFAULT_ENDPOINT.authenToken,creds)
        .then(resp=>{
          dispatch(Login_Succed(creds))
          localStorage.setItem('access_token',resp.token)

          console.log('respdata',resp)
          // dispatch(redirectTo("/main/dasboard"))
          history.push("/main")
        })
        .catch(err=>{
          dispatch(Login_Failed(err))
        })
  }
}

export function Login_Failed(error) {
  return ({ type: LOGIN_FAILED, payload: error })
}

export function Login_Succed(user) {
  return { type: LOGIN_SUCCED,payload:user }
}

export function SignOut_Start(){
  return dispatch=>{

    console.log("sign out")
    dispatch({type:C.SIGNOUT_START})

    localStorage.removeItem("access_token")
    
    console.log("access_token", !localStorage.getItem("access_token"))
    if (!localStorage.getItem("access_token")){

      dispatch(SignOut_Succed())
      
    }else{
      dispatch(SignOut_Failed())
    }
  }
   
  
}

export function SignOut_Succed(){
  return({type:C.SIGNOUT_SUCCED})
}

export function SignOut_Failed(){
  return ({type:C.SIGNOUT_FAILED})
}

export function NotAuthorized(event){
  return( {type:C.NOTAUTHORIZED, payload:event})
}