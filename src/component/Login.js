import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';

import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import { Link,Redirect } from 'react-router-dom';
import ThemeDefault from '../theme-default';

import styles from './loginStyles'


class LoginForm extends Component {

  constructor(props){
    super(props)
    this.state={
      username:"",
      password:"",
      errormsg:"",
    }

  }

  componentDidMount() {
    console.log("rerender")
  }
  

  handleUserNameChange(e){
    if (!e.target.value){
      this.setState({username:e.target.value})
      this.setState({errormsg:"please enter the name"})
    }else{
      this.setState({errormsg:""})
      this.setState({username:e.target.value})
    }

  }
  handlePasswordChange(e){
    this.setState(
      {password:e.target.value},
    )
  }

  handleClick(){
    const username = this.state.username
    const password = this.state.password
    const creds = {username:username,password:password}
    this.props.onLoginClick(creds)
  }

  handleGoogleLoginClick(){
    this.props.onGoogleLogin()
  }

  render() {
    if(this.props.isRedirect){
      return <Redirect to="/main"></Redirect>
    }

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <div style={styles.loginContainer}>

            <Paper style={styles.paper}>

              <form>
                <TextField
                  hintText="E-mail"
                  floatingLabelText="E-mail"
                  fullWidth={true}
                  value= {this.state.username}
                  errorText = {this.state.errormsg}
                  onBlur={this.handleUserNameChange.bind(this)}
                  onChange={this.handleUserNameChange.bind(this)}
                />
                
                <TextField
                  hintText="Password"
                  floatingLabelText="Password"
                  fullWidth={true}
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange.bind(this)}
                />

                <div>
                  <Checkbox
                    label="Remember me"
                    style={styles.checkRemember.style}
                    labelStyle={styles.checkRemember.labelStyle}
                    iconStyle={styles.checkRemember.iconStyle}
                  />
                    <RaisedButton label="Login"
                      primary={true}
                      style={styles.loginBtn}
                      onClick={(event)=>this.handleClick()}
                    />
                  
                </div>
              </form>
            </Paper>

            <div style={styles.buttonsDiv}>
              <FlatButton
                label="Register"
                href="/"
                style={styles.flatButton}
                icon={<PersonAdd />}
                onClick = {this.props.register}
              />

              <FlatButton
                label="Forgot Password?"
                href="/"
                style={styles.flatButton}
                icon={<Help />}
                onClick={this.props.forgetPassword}
              />
            </div>

            <div style={styles.buttonsDiv}>
              
              <RaisedButton 
                primary={true}
                onClick={()=>this.handleGoogleLoginClick()}
              >
              <span>Google Login</span>
              </RaisedButton>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );

  }
};

export default LoginForm;
