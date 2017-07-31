
export const ADD_USER = "ADD_USER"

export const LOGIN_SUBMITTED = "LOGIN_SUBMITED"
export const LOGIN_SUCCED = "LOGIN_SUCCED"
export const LOGIN_FAILED ="LOGNIN_FAILED"

export const OAUTH_SIGNIN_START = "OAUTH_SIGNIN_START"
export const OAUTH_SIGNIN_SUCCED = "OAUTH_SIGNIN_SUCCED"
export const OAUTH_SIGNIN_FAILED = "OAUTH_SIGNIN_FAILED"


export const FETCH_USER = "FETCH_USER"
export const FETCH_USER_SUCCED ="FETCH_USER_SUCCED"
export const FETCH_USER_FAILED ="FETCH_USER_FAILED"

export const TOKEN_DELETE = "TOKEN_DELETE"
export const TOKEN_DELETE_SUCCED = "TOKEN_DELETE_SUCCED"
export const TOKEN_DELETE_FAILED = "TOKEN_DELETE_FAILED"

export const REDIRECT="REDIRECT"


const rootApi= "http://0.0.0.0:8001/api"
export const DEFAULT_ENDPOINT={
  rootApi:      rootApi,
  authenToken:  rootApi+"/token-auth/"  

}