import { LOGIN_SUBMITTED, LOGIN_SUCCED, LOGIN_FAILED, DEFAULT_ENDPOINT } from "./constants"
import { redirectTo } from './routerAction'
import React from 'react'
import ApiUtils from '../utils/apiUtils'

export function Login_Submitted(creds) {


  return dispatch => {

    let config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: creds.username,
        password: creds.password,
      })
    }

    dispatch({ type: LOGIN_SUBMITTED })

    fetch(DEFAULT_ENDPOINT.authenToken, config)
      .then(ApiUtils.checkStatus)
      .then(resp => resp.json())
      .then(respJson =>{
        dispatch(Login_Succed())
        localStorage.setItem('token',respJson.token)

        dispatch(redirectTo("/dashboard"))
      })
      .catch(error => {
        dispatch(Login_Failed(error))
      })
  }
}

export function Login_Failed(error) {
  return ({ type: LOGIN_FAILED, payload: error })
}

export function Login_Succed() {
  return { type: LOGIN_SUCCED }
}
