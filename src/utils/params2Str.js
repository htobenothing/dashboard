
export function convertParamsToStr(params){
  let paramsStr=""
  let count 

  for (let key in params){
    paramsStr = key+"="+params[key]

    //  the last param will not add &
    if(count !== Object.keys(params).length){
      paramsStr +="&"
    }
    count += count
    
  }
  return paramsStr;
}

export function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



export function getParamsFromURL(queryString){
  // Parse the query string to extract access token and other parameters.
  // This code is useful if you set a value for the 'state' parameter when
  // redirecting the user to the OAuth 2.0 server, but otherwise isn't needed.
  var params = {};

  var regex = /([^&=]+)=([^&]*)/g, m;

  while (m = regex.exec(queryString)) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    // Try to exchange the param values for an access token.
    
  }
  return params
}


