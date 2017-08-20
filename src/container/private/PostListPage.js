import React, { Component } from 'react';
import { connect } from 'react-redux'
import data from '../../data'
import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

import Paper from 'material-ui/Paper'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import PostTemplate from '../../component/PostTemplate'
import FlatButton from 'material-ui/FlatButton';
import { Responsive, WidthProvider, ReactGridLayout } from 'react-grid-layout';
import Card from 'material-ui/Card'
import MyEditor from '../../component/MyEditor'
import EditPostPage from './EditPostPage'
import { Switch, Route, Link } from 'react-router-dom';
import { Fetech_PostList_Start, Fetch_Post_Start } from '../../actions/postAction'
import Loading from '../../component/Loading'
const ResponsiveReactGridLayout = WidthProvider(Responsive);


let layouts = {}

class PostListPage extends Component {


  constructor(props) {
    super(props)

    this.state = {
      isOpenTemplate: false,
      editHtml: '',
    }
    this.handleTextChange = this.handleTextChange.bind(this)

  }

  handleTextChange(html) {
    this.setState({ editHtml: html })
  }


  handleOpen() {
    // this.setState({ isOpenTemplate: true })
    // this.props.post.post={Content:""}
  }

  handleClose() {
    this.setState({ isOpenTemplate: false })
  }


  componentWillMount() {

    if (this.props.post === undefined || this.props.post.posts.length === 0) {
      this.props.initGetPosts()
    }
  }



  render() {

    if (this.props.post === undefined || this.props.post.isProcessing) {
  
      return (
        <Loading></Loading>
      )
    }

    let { posts, post } = this.props.post

    const postItems = this.props.post.posts.map((post) => {
      return (
        <Paper key={post.Post_ID}>
          <li style={styles.post}>
            <h1>{"post" + post.Post_ID}</h1>
            <p>by {post.Author} --- { new Date(post.Create_Date).toLocaleDateString("en-us")}</p>
            <Link to={"/main/markdown/" + post.Post_ID}>Edit</Link>

          </li>
        </Paper>
      )
    })



    return (
      <div >
        <ul style={styles.posts}>
          {postItems}
        </ul>


        <FloatingActionButton style={styles.floatingAction} secondary={true}
          containerElement={<Link to="/main/markdown/"></Link>}
        >
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
  },
  initGetPosts: () => {
    dispatch(Fetech_PostList_Start())
  },
  handleViewDetail: () => {
    dispatch()
  }


});

PostListPage.propTypes = {

};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListPage);



const styles = {
  post: {
    margin: 5,
    padding: 5,
    
  },
  posts:{
    listStyleType: "none"
  },
  floatingAction: {
    position: "fixed",
    bottom: 0,
    right: 0,
    margin: 50
  },


};

