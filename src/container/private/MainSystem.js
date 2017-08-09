import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftDrawer from '../../component/LeftDrawer'
import Header from '../../component/Header'
import withWidth, { LARGE } from 'material-ui/utils/withWidth';
import PropTypes from 'prop-types';
import ThemeDefault from '../../theme-default'
import Data from '../../data'
import { Route } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import GalleryPage from './GalleryPage'
// import { getParamsFromURL } from '../../utils/params2Str';
// import { oAuthSign_Succed } from '../../actions/oAuthSignActions';
import { SignOut_Start } from '../../actions/authActions'
import { connect } from 'react-redux'


class MainSystem extends Component {

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
    // if (this.props.width !== nextProps.width) {
    //   this.setState({ open: nextProps.width === LARGE })
    // }

  }

  componentDidMount() {
    // if (!localStorage.getItem('access_token')) {
    //   let queryString = window.location.hash.substring(1);
    //   this.props.OAuth_Succed(queryString)
    // }
        console.log("auth",this.props.auth)
  }

  render() {

    // let { open } = this.state
    const paddingLeftDrawerOpen = 236;
    let styles = {
      // header: {
      //   paddingLeft: open ? paddingLeftDrawerOpen : 0
      // },
      container: {
        margin: '80px 20px 20px 15px',
        // paddingLeft: open ? paddingLeftDrawerOpen : 0
      }
    };

    function handleRequestChange() {
      this.setState({ open: false })
    }

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>

        <div>
          <Header styles={styles.header}
            handleChangeReqNav={this.handleChangeReqNav.bind(this)}
            handleSignOut={this.props.handleSignOut}
          ></Header>

          <LeftDrawer
            open={this.state.open}
            menus={Data.menus}
            imageUrl={this.props.auth.user.imageUrl}
            username={this.props.auth.user.username}
            email={this.props.auth.email}
            handleRequestChange={(open) => this.setState({ open: false })}
          >
          </LeftDrawer>

          <div style={styles.container}>
            <Route path={process.env.PUBLIC_URL + "/main" + "/system"} exact component={DashboardPage}></Route>
            <Route path={process.env.PUBLIC_URL + "/main" + "/gallery"} exact component={GalleryPage}></Route>
          </div>
        </div>


      </MuiThemeProvider>
    )
  }
}

MainSystem.PropTypes = {
  children: PropTypes.element,
  width: PropTypes.number,
}

const mapDispatchToProps = (dispatch) => ({
  handleSignOut: () => {
    console.log("Signout")
    dispatch(SignOut_Start())
  }
});

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withWidth()(MainSystem));


