import React, { Component } from 'react';

import { Switch, Route,Redirect } from 'react-router-dom';
import LoginPage from '../../container/public/LoginPage';
import store, {history} from '../../reducers/store'
import {NotAuthorized} from '../../actions/authActions'

const Authorization = (allowedRoles) =>(WrappedComponent)=> {
  return class WithAuthorization extends Component {
    constructor(props){
      super(props)

    }

    render() {
      // const {role} = this.props
      let user = {
        username:"",
        role:"admin"
      }
      console.log("Wrapped component")
      localStorage.setItem("user",JSON.stringify(user))

      user =JSON.parse(localStorage.getItem('user'))
      
      const {role} = user
      if (allowedRoles.includes(role)){
        return <WrappedComponent {...this.props}/>
      }else{
        
    
        return  <Redirect to="/login"></Redirect>
       
      }

    }
  }

}

export default Authorization;




