import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftDrawer from './component/LeftDrawer'
import Header from './component/Header'
import withWidth, { LARGE, SMALL } from 'material-ui/utils/withWidth';
import PropTypes from 'prop-types';
import ThemeDefault from './theme-default'
import Data from './data'



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }

  }

  handleChangeReqNav() {
    this.setState({ open:!this.state.open })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({ open: nextProps.width === LARGE })
    }
  }


  render() {
    let {open} = this.state
    const paddingLeftDrawerOpen = 236;
    let styles = {
      header: {
        paddingLeft: open ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: open && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };
    
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
              {this.props.children}
          </div>

        </div>
      </MuiThemeProvider>
    )
  }
}

App.PropTypes={
  children:PropTypes.element,
  width:PropTypes.number,
}
export default withWidth()(App);

