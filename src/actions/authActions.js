import {LOGIN_SUBMITTED,LOGIN_SUCCED,LOGIN_FAILED} from "./constants"


export async function Login_Submitted(payload){

  return dispatch=>{

    dispatch({type:LOGIN_SUBMITTED,payload})

    try {
      let resp = await fetch(authUrl)
      let respJson = await resp.json()

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
  return {type:LOGIN_SUCCED,payload:respJson.user}
}
