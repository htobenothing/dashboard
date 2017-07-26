import Cookies from 'browser-cookies'

// var root = Function("return this")() ||(42,eval)("this")
var root = window

root.authState = {
  currentSettings:{},
  currentEndpoint:{},
  defaultEndpointKey:null,
}

export function setCurrentSettings(setting){
  root.authState.currentSettings = settings;
}

export function getCurrentSettings(){
  return root.authState.currentSettings;
}

export function setCurrentEndpoint(endpoint){
  root.authState.currentEndpoint = endpoint
}

export function getCurrentEndpoint(){
  return root.authState.endpoint;
}


export function setDefaultEndpointKey(key){
  storeData("defaultConfigKey",key)
}
export function getDefaultEndpointKey(){
  // from the currentSetting storage 
  return retrieveData("defaultConfigKey")
}



export function setCurrentEndpointKey(key){
  storeData("currentConfigName",key || getDefaultEndpointKey())
}
export function getCurrentEndpointKey(key){
  return retrieveData("currentConfigName") || getDefaultEndpointKey()
}



export function resetConfig(){

  root.authState = root.authState || {}
  root.authState.currentSettings ={}
  root.authState.currentEndpoint ={}

  destorySession();
}


export function destorySession(){
  let sessionKeys = [
    "authHeaders",
    "currentConfigName",
  ]

  for (let key in sessionKeys) {
    if (sessionKeys.hasOwnPropelet(key)) {
      let ele = sessionKeys[key];

      // remove data from local storage
      if(root.localStorage){
        root.localStorage.removeItem(ele)
      }

      // remove data from cookie
      Cookies.erase(ele,{
        path: root.authState.currentSettings.cookiepath || "/",
      })

    }
  }
}

export function getInitEndpointKey(){
  return unescapeQuotes( 
    Cookies.get("currentConfigName") || 
    (root.localStorage&& root.localStorage.getItem("currentConfigName"))
  )
}

export function getSessionEndpointKey(k){
  let key = k || getDefaultEndpointKey()
  if (!key){
    throw "You must config  before use"
  }else{
    return key;
  }
}


// URL Setting

export function getDestroyAccountUrl (endpointKey) {
  return `${getApiUrl(endpointKey)}${getSessionEndpoint(endpointKey).accountDeletePath}`
}

export function getSignOutUrl (endpointKey) {
  return `${getApiUrl(endpointKey)}${getSessionEndpoint(endpointKey).signOutPath}`
}

export function getEmailSignInUrl (endpointKey) {
  return `${getApiUrl(endpointKey)}${getSessionEndpoint(endpointKey).emailSignInPath}`
}

export function getEmailSignUpUrl (endpointKey) {
  return `${getApiUrl(endpointKey)}${getSessionEndpoint(endpointKey).emailRegistrationPath}?config_name=${endpointKey}`
}

export function getPasswordResetRequestUrl (endpointKey) {
  return `${getApiUrl(endpointKey)}${getSessionEndpoint(endpointKey).passwordResetPath}?config_name=${endpointKey}`
}

export function getPasswordUpdateUrl (endpointKey) {
  return `${getApiUrl(endpointKey)}${getSessionEndpoint(endpointKey).passwordUpdatePath}`
}

export function getTokenValidationPath (endpointKey) {
  return `${getApiUrl(endpointKey)}${getSessionEndpoint(endpointKey).tokenValidationPath}`
}

export function getOAuthUrl(provider,params,endpointKey){
  var oAuth = getApiUrl(endpointKey) +getSessionEndpointKey(endpointKey).authProviderPaths[provider]+
    "?auth_origin_url="+encodeURIComponent(root.location.href) +
    "?config_name="+encodeURIComponent(getSessionEndpointKey(endpointKey));

  if (params){
    for (var key in params) {
      // add key=params[key], url parameter to the path
      if (params.hasOwnProperty(key)) {
        oAuth += "&";
        oAuth += encodeURIComponent(key);
        oAuth += "=";
        oAuth += encodeURIComponent(params[key])
        
      }
    }
  }
  return oAuth;
}


export function getConfirmationSuccessUrl () {
  return root.authState.currentSettings.confirmationSuccessUrl();
}

export function getPasswordResetRedirectUrl () {
  return root.authState.currentSettings.confirmationSuccessUrl();
}

export function getApiUrl(key) {
  let configKey = getSessionEndpointKey(key);
  return root.authState.currentEndpoint[configKey].apiUrl;
}

export function getTokenFormat() {
  return root.authState.currentSettings.tokenFormat;
}


























export function storeData(key,val){
  val = JSON.stringify(val)
  switch (root.authState.currentSettings.storage) {
    // session storage or local storage both for client read.  sessionStorage only for specific window, 
    // if new tab open, new session will create. localStorage will persist until delete. 
    // cookie for server reading
    case "localStorage":
      root.localStorage.setItem(key,val)
      break;
    default:
      Cookies.set(key,val,{
        expires: root.authState.currentSettings.cookieExpiry,
        path: root.authState.currentSettings.cookiepath,
      })
  }
}






export function retrieveData(key,storage){
  let val =null;
  switch (storage||root.authState.currentSettings.storage) {
    // get data from localStorage by key
    case "localStorage":
      val = root.localStorage && root.localStorage.getItem(key)
      break;
    
    // default get data from cookies by key
    default:
      val = Cookies.get(key)
      break;
  }
  
  // if the val is just string, stringfy will be failed. So just unescape the quotes return the simple string
  try {
    return JSON.stringify(val)
  } catch (error) {
    return unescapeQuotes(val)
  }

}

//  remove single key value data
export function removeData(key){
  switch (root.authState.currentSettings.storage) {
    case "localStorage":
      root.localStorage.removeItem(key)
      break;
  
    default:
      Cookies.erase(key)
      break;
  }
}


export function unescapeQuotes(val){
  return val && val.replace(/("|')/g,"");
}


