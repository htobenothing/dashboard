import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import { BackGround } from "../../img/materialdesignwallpaper.jpg";
class NotFindPage extends Component {


  render() {
    console.log("404")
    return (

      <div style={style.root}>

        <div style={style.container}>
          <div></div>

          <h1>404, Ooops! </h1>
          <p>Page not find. go bakc to <a href="/">Home page</a> </p>
        </div>

      </div>

    );
  }
}

const style = {
  
  root:{
    backgroundImage:`url()`
  },
  container: {

    position: "relative",
    width: 800,
    margin: "0 auto",
    textAlign: "center",
    top: 100

  }
}

NotFindPage.propTypes = {

};

export default NotFindPage;