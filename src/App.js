import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import withWidth from 'material-ui/utils/withWidth';
import PropTypes from 'prop-types';
import ThemeDefault from './theme-default'

import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';

import LoginPage from './container/LoginPage';
import MainSystem from './container/MainSystem';
import {connect} from 'react-redux';


class App extends Component {

  render() {
    console.log("go to app")
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
          
          <Switch>
            <LoginPage></LoginPage>
          </Switch>

      </MuiThemeProvider>
    )
  }
}

App.PropTypes = {
  children: PropTypes.element,
  width: PropTypes.number,
}




export default withWidth()(App);

            // <Route path={process.env.PUBLIC_URL+"/"} exact component={LoginPage} ></Route>
            // <Route path={process.env.PUBLIC_URL+"/system"} component={MainSystem}></Route>