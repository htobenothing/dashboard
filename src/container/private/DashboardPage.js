import React, { Component } from 'react';
import PostBrief from '../../component/post'
import MyGrid from '../../component/MyGrid'
class DashBoard extends Component {
  render() {
    return (
      <div>
        <PostBrief></PostBrief>
        <PostBrief></PostBrief>
      </div>
    );
  }
}

export default DashBoard;