import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom'
class NotFindPage extends Component {
  

  render() {
    console.log("rendering")
    return (
    
       <div>404</div>
    
    );
  }
}

NotFindPage.propTypes = {

};

export default NotFindPage;