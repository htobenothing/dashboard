import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import RaisedButton from 'material-ui/RaisedButton'


const PostTemplacte = (props) => {

  const styles = {
    paper: {
      margin: 10,
      padding: 10
    },
    diaglog: {
    },
    raiseButton: {
      margin: 5
    }

  }

  const actions = [
    <RaisedButton
      style={styles.raiseButton}
      label="Submit"
      primary={true}
      onTouchTap={props.handleClose}
    />,
    <RaisedButton
      style={styles.raiseButton}
      label="Cancel"
      secondary= {true}
      onTouchTap={props.handleClose}
    />,
  ];


  return (

    <Dialog
      title="Create New Post"
      actions={actions}
      modal={true}
      open={props.isOpenTemplate}
      onRequestClose={props.handleClose}
      style={styles.diaglog}
      autoScrollBodyContent={true}>
      <TextField
        hintText="Title"
        floatingLabelText="Title" />

      <DatePicker hintText="Birth Date" />
      
      The actions in this window were passed in as an array of React objects.
    </Dialog>


  );
}


PostTemplacte.propTypes = {

};

export default PostTemplacte;