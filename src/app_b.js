import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftDrawer from './component/LeftDrawer'
import Header from './component/Header'
import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';
import PropTypes from 'prop-types';
import ThemeDefault from './theme-default'
import Data from './data'
import { BrowserRouter as Router,Route } from 'react-router-dom';
import DashboardPage from './container/DashboardPage'
import LoginPage from './container/LoginPage';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }

  }

  handleChangeReqNav() {
    this.setState({ open: !this.state.open })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({ open: nextProps.width === LARGE })
    }
  }


  render() {
    let { open } = this.state
    const paddingLeftDrawerOpen = 236;
    let styles = {
      header: {
        paddingLeft: open ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: open  ? paddingLeftDrawerOpen : 0
      }
    };
    console.log("Width",this.props.width)
    console.log("paddingleft",styles.container.paddingLeft)
    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
          
          <div>
            <Header styles={styles.header}
              handleChangeReqNav={this.handleChangeReqNav.bind(this)}></Header>

            <LeftDrawer
              open={this.state.open}
              menus={Data.menus}
              username={Data.username}>

            </LeftDrawer>

            <div style={styles.container}>
              <Route path="/" exact component={ LoginPage} ></Route>
              <Route path="/login" component={LoginPage}></Route>
              <Route path="/dashboard" component={DashboardPage}></Route>
              
            </div>

          </div>
   

      </MuiThemeProvider>
    )
  }
}

App.PropTypes = {
  children: PropTypes.element,
  width: PropTypes.number,
}
export default withWidth()(App);

