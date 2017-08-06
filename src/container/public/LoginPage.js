import React, { Component } from 'react';
import {connect} from 'react-redux'
import Login from '../../component/Login';
import {Login_Submitted} from '../../actions/authActions'
import {} from '../../actions/oAuthSignActions'

export class LoginForm extends Component {
  
  render() {
    return (
      <Login
        onLoginClick={creds=>this.props.loginSubmit(creds)}
        isRedirect = {this.props.isAuthenticated}
        onGoogleLogin={this.props.oAuthGoogleLogin()}
      ></Login>

    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  loginSubmit: (creds) => {
    dispatch(Login_Submitted(creds));
  },
  oAuthGoogleLogin:()=>{
    dispatch()
  }


});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);




