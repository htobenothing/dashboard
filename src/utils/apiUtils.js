
const ApiUtils ={
  checkStatus:function(resp){
    if(resp.status>=200&& resp.status<600){
      return resp
    }else{
      let error = new Error(resp.statusText)
      error.response= resp
      throw error
    }
  }
}

export default ApiUtils;