
import * as C from '../actions/constants'
export function redirectTo(url){
  return({type:C.REDIRECT, payload:url})
}

