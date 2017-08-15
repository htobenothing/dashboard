import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkDownShower = (props) => {
  
  return (
    <div>
      <div>
        <ReactMarkdown source={props.input} className='ReactMarkdown'/>
      </div>
    </div>
  );

}

export default MarkDownShower;