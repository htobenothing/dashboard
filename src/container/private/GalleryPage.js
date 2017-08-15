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
import PostTemplate from '../../component/PostTemplate'
import FlatButton from 'material-ui/FlatButton';
import { Responsive, WidthProvider, ReactGridLayout } from 'react-grid-layout';
import Card from 'material-ui/Card'
import MyEditor from '../../component/MyEditor'
import MarkDownPage from './MarkDownPage'
import { Switch, Route,Link} from 'react-router-dom';


const ResponsiveReactGridLayout = WidthProvider(Responsive);


let layouts = {}

class GalleryPage extends Component {


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
    this.setState({ isOpenTemplate: true })
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


  render() {


    const { posts } = data
    const layouts = {
      lg: this.generateLayout(posts)
    }
   
    console.log(layouts.lg)

    const postItems = posts.map((post) => {
      return (
        <div key={post.id}>
          <Paper style={styles.paper}>
            <GridTile
              // key={post.id}
              title={post.title}
              subtitle={<span>by <b>{post.author} --- {post.date}</b></span>}
              onTouchTap={() => { alert("click post:" + post.id) }}>
              <img src={post.imageUrl} alt={post.title} style={styles.image} />

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

        
        <FloatingActionButton style={styles.floatingAction} secondary={true} onClick={this.handleOpen.bind(this)}>
          <ContentAdd />
        </FloatingActionButton>
        <Link to={process.env.PUBLIC_URL + "/main"+"/markdown" }>markdown</Link>
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

