import React, { Component } from 'react';
import { connect } from 'react-redux'
import MarkDownShower from '../../component/MarkDownShower'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import MySnackBar from '../../component/MySnackBar'
import MyCodeMirror from '../../component/MyCodeMirror'
// import {initText} from '../../data'
import { Create_Post_Start } from '../../actions/postAction'
import { Fetch_Post_Start, Update_Post_Start, View_Post_Detail } from '../../actions/postAction'

class EditoPostPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: "",
      isPreview: false,
      isCreate: false,
      isProcessing: false,
    }
    this.handleUpdate = this.handleUpdatePost.bind(this)

  }

  
  componentDidMount() {
    this.props.initPost(this.props.id)
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.postR !== this.props.postR) {
      if (nextProps.postR.post.Content !== undefined) {
        this.setState({ text: nextProps.postR.post.Content })
      }

    }
  }
  // only the sub component update, will renrender
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.postR != this.props.postR)
  }
  

  handleUpdatePost(content) {
    let post = this.props.postR.post
    post = {...post,Content:content}

    
    this.props.updatePost(post)
  }

  render() {

    let message;
    if (this.props.postR.status) {
      message = "Update Successful"
    } else {
      message = "Update Failed"
    }



    return (
      <div >
        <Subheader>Update Post</Subheader>
        <div>
          <MyCodeMirror
            content={this.state.text}
            status={this.props.postR.status}
            handleUpdateClick={(content) => this.handleUpdatePost(content)}
          ></MyCodeMirror>


          <MySnackBar
            status={this.props.postR.status}
            isOpen={this.props.postR.isFinished}
            message={message}
          >
          </MySnackBar>

        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => {
    dispatch(Create_Post_Start(post));
  },
  updatePost: (post) => {
    dispatch(Update_Post_Start(post))
  },
  initPost: (id) => {
    dispatch(Fetch_Post_Start(id))

  },
  viewPostDetail: (post) => {
    dispatch(View_Post_Detail(post))
  }

});

const mapStateToProps = (state, ownProps) => {

  return {
    postR: state.post,
    id: ownProps.match.params.id,

  }
};


const styles = {}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditoPostPage);

