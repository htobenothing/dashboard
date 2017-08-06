
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