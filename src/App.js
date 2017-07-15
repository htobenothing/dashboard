import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import withWidth from 'material-ui/utils/withWidth';
import PropTypes from 'prop-types';
import ThemeDefault from './theme-default'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from './container/LoginPage';
import MainSystem from './container/MainSystem'
class App extends Component {




  render() {

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <Router>
          <div>
            <Route path="/" exact component={LoginPage} ></Route>
            <Route path="/system" component={MainSystem}></Route>
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

App.PropTypes = {
  children: PropTypes.element,
  width: PropTypes.number,
}
export default withWidth()(App);

