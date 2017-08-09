
export const ADD_USER = "ADD_USER"

export const LOGIN_SUBMITTED = "LOGIN_SUBMITED"
export const LOGIN_SUCCED = "LOGIN_SUCCED"
export const LOGIN_FAILED ="LOGNIN_FAILED"

export const OAUTH_SIGNIN_START = "OAUTH_SIGNIN_START"
export const OAUTH_SIGNIN_SUCCED = "OAUTH_SIGNIN_SUCCED"
export const OAUTH_SIGNIN_FAILED = "OAUTH_SIGNIN_FAILED"

export const SIGNOUT_START ="SIGNOUT_START"
export const SIGNOUT_SUCCED= "SIGNOUT_SUCCED"
export const SIGNOUT_FAILED="SIGNOUT_FAILED"

export const FETCH_USER = "FETCH_USER"
export const FETCH_USER_SUCCED ="FETCH_USER_SUCCED"
export const FETCH_USER_FAILED ="FETCH_USER_FAILED"

export const TOKEN_DELETE = "TOKEN_DELETE"
export const TOKEN_DELETE_SUCCED = "TOKEN_DELETE_SUCCED"
export const TOKEN_DELETE_FAILED = "TOKEN_DELETE_FAILED"

export const REDIRECT="REDIRECT"


export const FETCH_POST_START = "FETCH_POST_START"
export const FETCH_POST_SUCCED = "FETCH_POST_SUCCED"
export const FETCH_POST_FAILED ="FETCH_POST_FAILED"

export const FETCH_POSTLIST_START = "FETCH_POSTLIST_START"
export const FETCH_POSTLIST_SUCCED = "FETCH_POSTLIST_SUCCED"
export const FETCH_POSTLIST_FAILED = "FETCH_POSTLIST_FAILED"

const rootApi= "http://0.0.0.0:8001/api"
export const DEFAULT_ENDPOINT={
  rootApi:      rootApi,
  authenToken:  rootApi+"/token-auth/"  

}

export const GoogleOAuth = {
  endpoint: "https://accounts.google.com/o/oauth2/v2/auth",
  params:{  
    scope:"email",
    include_granted_scopes:true,
    redirect_uri:"http://localhost:3000/main",
    state:LOGIN_SUCCED,
    response_type:"token",
    prompt:"consent",
    client_id:"1039803419205-otllnausstkpuoq3m8s8264rs55f7lu4.apps.googleusercontent.com",
  }

}