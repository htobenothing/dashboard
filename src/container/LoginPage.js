import React, { Component } from 'react';
import {connect} from 'react-redux'
import Login from '../component/Login';
import {LOGIN_SUBMITTED} from '../actions/constants'
import {Login_Submitted} from '../actions/authActions'
export class LoginForm extends Component {
  constructor(props, context) {
    super(props, context);
  }
  

  

  render() {
    return (
      <Login
        onLoginClick={creds=>Login_Submitted(creds)}
      ></Login>

    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  loginSubmit: (creds) => {
    dispatch({
      type:LOGIN_SUBMITTED,
      payload:{username:creds.username,password:creds.password},
    });
  },


});

const containerName = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginForm;


