import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconMenu from 'material-ui/IconMenu';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { white } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import MenuItem from 'material-ui/MenuItem'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import ActionAccountCircle from 'material-ui/svg-icons//action/account-circle'

class Header extends Component {


  render() {
    const { styles, handleChangeReqNav } = this.props;
    const style = {
      appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        maxHeight: 57,
       
      },
      menuButton: {
        marginLeft: 10
      },
      iconsRightContainer: {
        marginLeft: 20
      }
    };

    return (
      <div>
        <AppBar
          style={{...styles,...style.appBar}}
          title="Admin User"
          iconElementLeft={
            <IconButton style={style.menuButton} onClick={handleChangeReqNav}>
              <Menu color={white}></Menu>
            </IconButton>
          }
          iconElementRight={
            <div style={style.iconsRightContainer}>
              <IconMenu
                iconButtonElement={<IconButton><ViewModule color={white}></ViewModule></IconButton>}
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
                <MenuItem key={1} primaryText="Application 1" />
                <MenuItem key={2} primaryText="Application 2" />
                <MenuItem key={3} primaryText="Application 3" />
                
              </IconMenu>
              <IconMenu iconButtonElement={<IconButton><MoreVertIcon color={white}></MoreVertIcon></IconButton>}
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>

                <MenuItem onTouchTap={this.props.handleSignOut} primaryText="Sign Out"></MenuItem>


              </IconMenu>
            </div>
          }
        ></AppBar>
      </div>
    );
  }
}

Header.ProperTypes = {
  styles: PropTypes.object,
  handleChangeReqNav: PropTypes.func,
}
export default Header;