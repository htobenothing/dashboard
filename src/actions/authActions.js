import {LOGIN_SUBMITTED,LOGIN_SUCCED,LOGIN_FAILED} from "./constants"
import React from 'react'

export function Login_Submitted(payload){

  const {username, password} = payload
  
  console.log("in function")
  let data = {username:username, password:password}
  
  let config ={
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    })
  }
  let resp = fetch("http://localhost:8001/api/token-auth/",config).then((resp)=>resp.json())
  .then(respJson=> console.log(respJson,respJson.token))


  return dispatch=>{

    console.log("dispatching")
    dispatch({type:LOGIN_SUBMITTED,payload})
    
    try {
      let resp =  fetch('http://0.0.0.0:8001/api/token-auth/',{method:"POST",data:data,})
      let respJson = resp.json()
      
      dispatch(Login_Succed(respJson.user))
    
    } catch (error) {
      dispatch (Login_Failed(error))
    }
  }
}

export function Login_Failed(error){
  return ({type:LOGIN_FAILED,payload:error})
}

export function Login_Succed(payload){
  return {type:LOGIN_SUCCED,payload:payload.user}
}
