import {OAUTH_SIGNIN_FAILED,OAUTH_SIGNIN_SUCCED,OAUTH_SIGNIN_START} from './constants'
import {GoogleOAuth} from "./constants"
import {convertParamsToStr} from '../utils/params2Str'
export function oAuthSign_Start(){

  

  let config = {
    method:"Get",
    url:GoogleOAuth.endpoint,
    data:GoogleOAuth.params,
  }

  dispatch =>{


  }
}

export function oAuthSign_Succed(){
  return ({type:OAUTH_SIGNIN_SUCCED,payload:""})
}

export function oAuthSign_Failed(){
  return({type:OAUTH_SIGNIN_FAILED,payload:""})
}
