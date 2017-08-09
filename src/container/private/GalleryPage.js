import React, { Component } from 'react';
// import PostBrief from '../../component/post'
// import MyGrid from '../../component/MyGrid'
import data from '../../data'
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// import Card from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PostTemplacte from '../../component/PostTemplate'
import FlatButton from 'material-ui/FlatButton'


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {

    display: 'flex',
    flexWrap: 'nowrap',
    overflowY: 'auto',
    margin: 10
  },
  paper: {
    margin: 20
  },
  floatingAction: {
    position: "fixed",
    bottom: 0,
    right: 0,
    margin: 50
  }
};



class GalleryPage extends Component {


  constructor(props) {
    super(props)

    this.state = {
      isOpenTemplate: false
    }
  }

  handleOpen() {
    this.setState({ isOpenTemplate: true })
  }

  handleClose() {
    this.setState({ isOpenTemplate: false })
  }



  render() {



    const { posts } = data
    const postItems = posts.map((post) => {
      return (

        <GridTile
          key={post.id}
          title={post.title}
          subtitle={<span>by <b>{post.author} --- {post.date}</b></span>}
          onTouchTap={() => { alert("click post:" + post.id) }}
        >
          <img src={post.imageUrl} alt={post.title} />

        </GridTile>

      )
    })

    return (
      <div>
        <Paper zDepth={2}>
          <div style={styles.root}>
            <Subheader>December</Subheader>
            <GridList
              cols={3}
              cellHeight={180}
              padding={4}
              style={styles.gridList}>
              {postItems}
            </GridList>
          </div>

          <PostTemplacte
            handleClose={this.handleClose.bind(this)}
            handleOpen={this.handleOpen.bind(this)}
            isOpenTemplate={this.state.isOpenTemplate}
          ></PostTemplacte>
        </Paper>

        <FloatingActionButton style={styles.floatingAction} secondary={true} onClick={this.handleOpen.bind(this)}>
          <ContentAdd />
        </FloatingActionButton>
      </div>



    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: state.post
});

const mapDispatchToProps = (dispatch) => ({
  handleShowPostTemplate: () => {
    // dispatch(actionCreator(params));
  }
});

GalleryPage.propTypes = {

};

export default GalleryPage;