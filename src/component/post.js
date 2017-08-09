import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const PostBrief = (props) => {

  const styles={
    img:{
      width:100,
      height:500
    }

  }
  return (

    <Card style={styles.card}>
      <CardMedia
        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
      >
        <img  src="http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_05_hd_picture_166257.jpg" alt="" />
      </CardMedia>
      <CardTitle title="Card title" subtitle="Card subtitle" />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
      <CardActions>
        <FlatButton label="Action1" />
        <FlatButton label="Action2" />
      </CardActions>
    </Card>
  )

}



export default PostBrief;