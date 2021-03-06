import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import withWidth from 'material-ui/utils/withWidth';
import PropTypes from 'prop-types';
import ThemeDefault from './theme-default'

import { Switch, Route } from 'react-router-dom';
import LoginPage from './container/public/LoginPage';
import MainSystem from './container/private/MainSystem';
import AboutPage from './container/public/AboutPage'
import HomePage from './container/public/HomePage'
import NotFindPage from './container/public/NotFindPage'
class App extends Component {

  render() {

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/main/" component={MainSystem}></Route>
          <Route component={NotFindPage}></Route>
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

<Route component={NotFindPage}/>