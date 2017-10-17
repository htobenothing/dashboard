import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LeftDrawer from '../../component/LeftDrawer'
import Header from '../../component/Header'
import withWidth, { LARGE } from 'material-ui/utils/withWidth';
import PropTypes from 'prop-types';
import ThemeDefault from '../../theme-default'
import Data from '../../data'
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import PostListPage from './PostListPage'
// import { getParamsFromURL } from '../../utils/params2Str';
// import { oAuthSign_Succed } from '../../actions/oAuthSignActions';
import { SignOut_Start } from '../../actions/authActions'
import { connect } from 'react-redux'
import ChatPage from './ChatPage'
import EditPostPage from './EditPostPage'
import CreatePostPage from './CreatePostPage'
import Authorization from '../public/auth'


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

  }

  componentDidMount() {
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
            <Switch>
              <Route path={"/main/"} exact component={DashboardPage}></Route>
              <Route path={"/main/posts"} exact  component={User(PostListPage)}></Route>
              <Route path={"/main/chat"} exact component={User(ChatPage)}></Route>
              <Route path={"/main/posts/:id"} exact component={User(EditPostPage)} />
              <Route path={"/main/post"} exact component={User(CreatePostPage)} />
            </Switch>
          </div>
        </div>

      </MuiThemeProvider>
    )
  }
}


const User = Authorization(['user', 'manager', 'admin'])
const Manager = Authorization(['manager', 'admin'])
const Admin = Authorization(['admin'])



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


