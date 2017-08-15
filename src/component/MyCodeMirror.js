

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror'
import monokai from 'codemirror/theme/monokai.css'
import codemirror from 'codemirror/lib/codemirror.css'
import markdown from 'codemirror/mode/markdown/markdown'




class MyCodeMirror extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const cm = this.refs.editor.getCodeMirror();
    const { width, height } = this.props;
    // set width & height
    cm.setSize(width, height);
  }


  render() {
    const { code, updateCode } = this.props
    let options = {
      lineNumbers: true,
      mode: 'markdown',
      theme: 'monokai',
      lineWrapping: true,

    }
    return (
      <div>
        <CodeMirror ref="editor"
          value={code}
          onChange={(newCode) => updateCode(newCode)}
          options={options}
          autoFocus={true}>
        </CodeMirror>
      </div>
    )
  }

}




MyCodeMirror.propTypes = {
  width:PropTypes.string,
  height:PropTypes.string,
  code:PropTypes.string,
};


export default MyCodeMirror;
