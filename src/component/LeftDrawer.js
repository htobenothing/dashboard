import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';

import { spacing, typography } from 'material-ui/styles';
import { white, blue600 } from 'material-ui/styles/colors';
import manImg from '../img/pao.gif'


import {  Link } from 'react-router-dom'


const LeftDrawer = (props) => {

  let { open,handleRequestChange } = props;
  const style = {
    logo: {
      cursor: 'pointer',
      fontSize: 22,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: blue600,
      paddingLeft: 40,
      height: 56,
    },
    menuItem: {
      color: white,
      fontSize: 14
    },
    avatar: {
      div: {
        padding: '15px 0 20px 15px',
        backgroundImage: 'url(' + require('../img/material_bg.png') + ')',
        height: 45
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
      },
      span: {
        paddingTop: 12,
        display: 'block',
        color: 'white',
        fontWeight: 300,
        textShadow: '1px 1px #444'
      }
    }
  }
  return (
    <Drawer
      docked={false}
      open={open}
      style={style.drawer}
      onRequestChange={(open)=>handleRequestChange(open)}>
      <div style={style.logo}>Material Admin</div>
      <div style={style.avatar.div}>
        <Avatar
          src={props.imageUrl}
          size={50}
          style={style.avatar.icon} ></Avatar>
          <span style={style.avatar.span}>{props.username}</span>
      </div>
      <div>
      
          <div>
            {props.menus.map((menu, index) =>
              <MenuItem key={index}
                style={style.menuItem}
                primaryText={menu.text}
                leftIcon={menu.icon}
                containerElement={<Link to={menu.link}></Link>}
              > 
              </MenuItem>)}
          </div>

    


      </div>
    </Drawer>

  );

}


LeftDrawer.protoTypes = {
  open: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
}
export default LeftDrawer;