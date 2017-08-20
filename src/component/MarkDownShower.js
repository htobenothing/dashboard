import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkDownShower = (props)=>{
  
  return(
    <ReactMarkdown
      source={props.input}
      className='ReactMarkdown'
      >

    </ReactMarkdown>
  )
}





export default MarkDownShower;