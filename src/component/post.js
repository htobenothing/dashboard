import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const PostBrief = (props) => {

  
  const styles={

    card:{
      width:'50%',
      height:'50%',
      margin:20,
    }


  }
  return (
    <Card style={styles.card}>
        <span>{props.id}</span>
      <CardText>
        {props.author} --- {props.date}
      </CardText>
      <CardMedia
        overlay={<CardTitle title={props.title} subtitle={props.title} />}
      >

        <img  src="http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg" alt="" />
      </CardMedia>
      <CardTitle title={props.title} subtitle={props.title} />
      <CardText>
      {props.breifInfo}
    </CardText>
      <CardActions>
        <FlatButton label="view" />
        <FlatButton label="edit" />
      </CardActions>
    </Card>
  )

}



export default PostBrief;