import React, { Component } from 'react';
import ReactQuill from 'react-quill'
import theme from 'react-quill/dist/quill.snow.css'

const modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [10, 14, 16, 18, 24] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' },
    { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image', 'video'],
    ['clean']
  ]
}

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote', 'color',
  'list', 'bullet', 'indent', 'code-block',
  'link', 'image', 'video', 'formula'
]

const MyEditor = (props) => {

  return (
    <div>
      <ReactQuill
        onChange={this.handleTextChange}
        themes='snow'
        value={props.editHtml}
        modules={this.modules}
        formats={this.formats}
        
        placeholder='write your own story' />
    </div>
  )
}



export default MyEditor;