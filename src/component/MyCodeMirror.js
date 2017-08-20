import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror'
import monokai from 'codemirror/theme/monokai.css'
import codemirror from 'codemirror/lib/codemirror.css'
import markdown from 'codemirror/mode/markdown/markdown'
import MarkDownShower from '../component/MarkDownShower'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Snackbar from 'material-ui/Snackbar';


class MyCodeMirror extends Component {
  constructor() {
    super()
    this.state = {
      text: "",
      open: false,
    }
    this.updateCode = this.updateCode.bind(this)
    this.handleRequestClose = this.handleRequestClose.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.content !== undefined && nextProps.content != this.state.text) {
      this.setState({ text: nextProps.content })

    }
  }

  editorRefCallback (ref) {
    if (ref!==null) {
      const cm = ref.getCodeMirror();
      let width = '100%'
      let height = '100%'
      cm.setSize(width, height)
    }

  }

  



  handleRequestClose() {
    this.setState({ open: false })
  }

  updateCode(newCode) {

    this.setState({ text: newCode })
  }

  render() {
    // console.log("props content", this.props.content)
    if (this.props.content === "") {
      return (
        <div>rendering</div>
      )
    }


    let options = {
      lineNumbers: true,
      mode: 'markdown',
      theme: 'monokai',
      lineWrapping: true,

    }

    return (
      <div>
        <div style={styles.code}>
          <CodeMirror ref={(ref)=>this.editorRefCallback(ref)}
            // defaultValue={this.props.content}
            value={this.props.content}
            onChange={this.updateCode}
            options={options}
            autoFocus={false}>
          </CodeMirror>
        </div>

        <div style={styles.result}>
          <MarkDownShower
            input={this.state.text}>
          </MarkDownShower>
        </div>

        <FloatingActionButton onClick={() => this.props.handleUpdateClick(this.state.text)}
          style={styles.floatingAction}
        >Save</FloatingActionButton>


      </div>

    )
  }

}

const styles = {

  code: {
    position: 'fixed',
    left: 0,
    // bottom: 0,
    width: '50%',
    height: '100%',
    overflow: 'auto',
    margin: 10,

    minHeight: 500,

  },
  floatingAction: {
    position: "fixed",
    bottom: 0,
    right: 0,
    margin: 50
  },
  result: {
    position: 'fixed',

    right: 0,
    left: '50%',
    height: '80%',
    overflow: 'auto',
    paddingLeft: 20,
    color: '#444',
    margin: 10
  },

}


MyCodeMirror.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  code: PropTypes.string,
};


export default MyCodeMirror;
