import React, { Component } from 'react';
import { connect } from 'react-redux'
import MarkDownShower from '../../component/MarkDownShower'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import Snackbar from 'material-ui/Snackbar';
import MyCodeMirror from '../../component/MyCodeMirror'
// import {initText} from '../../data'
import { Create_Post_Start } from '../../actions/postAction'


class EditoPostPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }
  
  handleCreatePost(content){
    let post = {
      content:content
    }
    this.props.createPost(post)
  }

  render() {

    return (
      <div >
        <Subheader>MarkDown Editor</Subheader>
        <div >
          <MyCodeMirror
           
            status = {this.props.postR.status}
            handleUpdateClick= {(content)=>this.handleCreatePost(content)}
          ></MyCodeMirror>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => {
    dispatch(Create_Post_Start(post));
  },


});

const mapStateToProps = (state, ownProps) => ({
  postR: state.post,

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditoPostPage);

