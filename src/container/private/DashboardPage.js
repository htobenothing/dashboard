import React, { Component } from 'react';
import {connect} from 'react-redux'
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
import { Switch, Route,Link} from 'react-router-dom';
import {Fetech_PostList_Start,Fetch_Post_Start} from '../../actions/postAction'

const ResponsiveReactGridLayout = WidthProvider(Responsive);


let layouts = {}

class DashboardPage extends Component {


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

  generateLayout(items) {
    return items.map((item, i) => {

      let w = 4;
      let h = 2;
      let x = i * w % 12;
      let y = x * h;
      return { x: x, y: y, w: w, h: h, i: "post" + (i + 1).toString() };
    });

  }

  
  componentWillMount() {
    if (this.props.post===undefined|| this.props.posts===undefined){
      this.props.initGetPosts()
    }
  }
  


  render() {

    if (this.props.post ===undefined){
      return(
        <div>Rendering</div>
      )
    }



    let {posts, post} = this.props.post
    // const { posts } = data
    const layouts = {
      lg: this.generateLayout(posts)
    }
   
    // console.log(layouts.lg)

    // console.log('posts',this.props.post)
    
    const postItems = this.props.post.posts.map((post,index) => {
      return (
        <div key={'post'+index}>
          <Paper style={styles.paper}>
            <GridTile
              
              title={"Hello"}
              subtitle={<span>by <b>{post.Author} --- {post.Date}</b></span>}
              containerElement={<Link to={"/main/markdown/"+post.Post_ID} ></Link>}
              >

            </GridTile>
          </Paper>
        </div>
      )
    })



    return (
      <div style={styles.out}>


        <ResponsiveReactGridLayout className="layout" layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}>
          {postItems}

        </ResponsiveReactGridLayout>


        <PostTemplate

          handleClose={this.handleClose.bind(this)}
          handleOpen={this.handleOpen.bind(this)}
          isOpenTemplate={this.state.isOpenTemplate}
        ></PostTemplate>

        
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
  initGetPosts: ()=>{
    dispatch(Fetech_PostList_Start())
  },
  handleViewDetail:()=>{
    dispatch()
  }


});

DashboardPage.propTypes = {

};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardPage);



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
    padding: 5,
    width: '100%',
    height: "100%",
  },
  floatingAction: {
    position: "fixed",
    bottom: 0,
    right: 0,
    margin: 50
  },
  div: {
    backgroundColor: "#000099",
    width: 100,
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",

  }

};

