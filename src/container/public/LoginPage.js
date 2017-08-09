import React, { Component } from 'react';
import { connect } from 'react-redux'
import Login from '../../component/Login';
import { Login_Submitted } from '../../actions/authActions'
import { oAuthSign_Start } from '../../actions/oAuthSignActions'
import Loading from '../../component/Loading'

const styles={
  loading:{

  }
}

export class LoginForm extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Login
          onLoginClick={(creds) => this.props.loginSubmit(creds)}
          isRedirect={this.props.auth.isAuthenticated}
          onGoogleLogin={() => this.props.oAuthGoogleLogin()}
        >
        </Login>

        { this.props.auth.isLoading && 
          <Loading></Loading>
        }
        
      </div>



    );
  }
}



const mapStateToProps = (state, ownProps) => {

  return {
    auth: state.auth,
  }
};

const mapDispatchToProps = (dispatch) => ({
  loginSubmit: (creds) => {
    dispatch(Login_Submitted(creds));
  },
  oAuthGoogleLogin: () => {
    dispatch(oAuthSign_Start())
  },


});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);




