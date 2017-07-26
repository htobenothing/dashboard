
import parseEndpointConfig from './client-setting'
import C from './constants'
import {
  getApiUrl,
  getCurrentSettings,
  setCurrentSettings,
  getInitEndpointKey,
  setDefaultEndpointKey,
  setCurrentEndpoint,
  setCurrentEndpointKey,
  resetConfig,
  removeData,
  retrieveData,
  storeData,
  } from './session-storage'

// var root = Function("return this")() || (42, eval)("this");
var root = window

const defaultSettings={
  proxyIf: function(){return false},
  proxyUrl : '/proxy',
  forceHardRedirect: false,
  storage : 'cookies',
  cookieExpiry: 14,
  cookiePath : '/',
  initialCredentials: null,

  passwordResetSuccessUrl: function(){
    return root.location.href
  },

  confirmationSuccessUrl: function(){
    return root.location.href
  },

  tokenFormat:{
    "access-token": "{{ access-token }}",
    "token-type":   "Bearer",
    client:         "{{ client }}",
    expiry:         "{{ expiry }}",
    uid:            "{{ uid }}"
  },

  passExpiry:function(headers){
    // convert ruby time(seconds) to js time(miliseconds)
    return (parseInt(headers["expiry"],10)*1000) || null
  },

  handleLoginResponse: function(resp) {
    return resp.data;
  },

  handleAccountUpdateResponse: function(resp) {
    return resp.data;
  },

  handleTokenValidationResponse: function(resp) {
    return resp.data;
  }
};

export function applyConfig({dispatch,endpoint={},settings={},reset=false}={}){
  let currentEndpointKey;

  if(reset){
    resetConfig();
  }

  if (settings.initialCredentials){
    currentEndpointKey = settings.initialCredentials.currentEndpointKey
  }

  setCurrentEndpointKey(extend(),defaultSettings,settings)
  // getInitEndpointKey: get value from cookie or session by  'currentConfigName' key
  let {defaultEndpointKey,currentEndpoint} = parseEndpointConfig(
    endpoint,getInitEndpointKey()
  )

  if (!currentEndpointKey){
    currentEndpointKey = defaultEndpointKey
  }

  setDefaultEndpointKey(defaultEndpointKey)
  setCurrentEndpoint(currentEndpoint)

  dispatch(setEndpointKeys(Object.keys(currentEndpoint), currentEndpointKey, defaultEndpointKey))
  setCurrentEndpointKey(currentEndpointKey)

  let savedCreds = retrieveData(C.SAVED_CREDS_KEY);
  // if the cookie or storage have the information of 'currentConfigName'
  if(getCurrentSettings().initialCredentials){
    let {user,headers} = getCurrentSettings().initialCredentials;
    
    storeData(C.SAVED_CONFIG_KEY,headers)
    return Promise.resolve(user)

  }else if (savedCreds){
    // veryfy session credentail from api
    return fetch(`${getApiUrl(currentEndpointKey)}${currentEndpoint[currentEndpointKey].tokenValidationPath}`)
    .then(resp=>{
      if(resp.status >=200 && resp.status < 300){
        return resp.json().then(({data})=>(data))
      }
      removeData(C.SAVED_CREDS_KEY)
      return Promise.reject({reason:"No Credential"})
    })
  }else {
    return Promise.reject({reason:"No Credential"})
  } 
}