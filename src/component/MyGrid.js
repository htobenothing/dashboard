import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout'
import PostBrief from './post'

let MyGrid = React.createClass({
  render: function () {
    return (
      <ReactGridLayout className="layout" cols={12} rowHeight={30} width={1200} isResizable={true}>
        <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, }} style={styles.div}>
          <span  className="text"></span>
        </div>
        <div key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2 }} style={styles.div}>
          <span className="text"></span>
        </div>
        <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }} style={styles.div}>
          <span  className="text"></span>
        </div>
      </ReactGridLayout>
    )
  }
})

const styles = {
  div: {
    backgroundColor: "#000099",
    width: 100,
    height: 100,
  }
}
export default MyGrid;