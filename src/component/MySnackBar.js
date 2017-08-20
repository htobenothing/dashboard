import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';


import PropTypes from 'prop-types';






const MySnackBar = (props) => {

  let { status,isOpen, message } = props


  let styles={
    snackBar:{
      color: status? 'green':'red',
    }
  }

  return (
    <Snackbar style={styles.snackBar}
      open={isOpen}
      message={message}
      action="undo"
      
      autoHideDuration={4000}
    // onRequestClose={this.handleRequestClose}
    />
  )

}
MySnackBar.propTypes = {
  status:PropTypes.bool,
  isLoading:PropTypes.bool,
  message:PropTypes.string,  
};

export default MySnackBar;