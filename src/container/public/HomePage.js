import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
class HomePage extends Component {
  render() {
    return (
      <div>
        <Link to="/login" >Login in</Link>
      </div>
    );
  }
}

HomePage.propTypes = {
  

};


export default HomePage;