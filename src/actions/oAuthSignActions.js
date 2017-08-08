import { LOGIN_SUBMITTED, LOGIN_SUCCED,LOGIN_FAILED } from './constants'
import { GoogleOAuth } from "./constants"
import { convertParamsToStr } from '../utils/params2Str'
import axios from 'axios'
import { getParamsFromURL } from '../utils/params2Str'
import {redirectTo} from '../actions/routerAction'



export function oAuthSign_Start() {

  return dispatch => {

    dispatch({ type: LOGIN_SUBMITTED })

    oAuthSignin()
  }
}




export function oAuthSign_Succed(queryString) {

  return dispatch=>{
    let params = getParamsFromURL(queryString)
    for (let key in params) {
      localStorage.setItem(key, params[key])
 

    }
    dispatch({ type: LOGIN_SUCCED, payload: "" })
    dispatch(redirectTo("/main/dasboard"))
  }
  


}

export function oAuthSign_Failed(error) {
  return ({ type: LOGIN_FAILED, payload: error })
}


function oAuthSignin() {
  window.open('/')
  // Google's OAuth 2.0 endpoint for requesting an access token
  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {
    'client_id': '1039803419205-otllnausstkpuoq3m8s8264rs55f7lu4.apps.googleusercontent.com',
    'redirect_uri': 'http://localhost:3000/main',
    'response_type': 'token',
    'scope': 'email',
    'include_granted_scopes': 'false',
    'state': LOGIN_SUCCED
  };

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}