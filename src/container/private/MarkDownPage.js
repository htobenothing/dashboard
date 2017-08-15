import React, { Component } from 'react';
import { connect } from 'react-redux'
import MarkDownShower from '../../component/MarkDownShower'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MyCodeMirror from '../../component/MyCodeMirror'
import {initText} from '../../data'
import {Create_Post_Start} from '../../actions/postAction'


class MarkDownPage extends Component {
  constructor() {
    super()
    this.state = {
      text: initText,
      isPreview: false,
    }
    
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
    this.updateCode = this.handleUpdateCode.bind(this)
  }

  handleTextChange(e) {
    this.setState({ text: e.target.value })

  }

  handleUpdateCode(newCode) {
    this.setState({ text: newCode })
    
  }


  handleSaveClick() {
    let content = this.state.text
    let date = new Date()

    let post = {
      date:date,
      content:content
    }

    this.props.createPost(post)
    
  }

  render() {
    const styles = {

      code: {
        position: 'fixed',
        left: 0,
        // bottom: 0,
        width: '50%',
        height: 'auto',
        overflow: 'auto',
        margin: 10,

        minHeight: 500,

      },
      result: {
        position: 'fixed',

        right: 0,
        left: '50%',
        height: '100%',
        overflow: 'auto',
        paddingLeft: 20,
        color: '#444',
        margin: 10
      },
      floatingAction: {
        position: "fixed",
        bottom: 0,
        right: 0,
        margin: 50
      },
    }


    return (

      <div >
        <Subheader>MarkDown Editor</Subheader>
        <div style={styles.code}>
          <MyCodeMirror
            code={this.state.text}
            updateCode={(newcode) => this.handleUpdateCode(newcode)}
            width='100%'
            height='100%'
          ></MyCodeMirror>
        </div>



        <div style={styles.result}>
          <MarkDownShower
            input={this.state.text}
          ></MarkDownShower>
        </div>

        <FloatingActionButton onClick={this.handleSaveClick}
          style={styles.floatingAction}
        >Save</FloatingActionButton>
      </div>


    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => {
    dispatch(Create_Post_Start(post));
  }
});

const mapStateToProps = (state, ownProps) => ({
  post: state.post
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarkDownPage);

