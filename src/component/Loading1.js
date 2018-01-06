import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Dialog from 'material-ui/Dialog';
const style = {
  container: {
    position: 'absolute',
    zIndex: 15,
    top: '50%',
    left: '50%',
    // margin: '-100px 0 0 -150px'

  },


  refresh: {
    // display: 'inline-block',
    // position: 'relative',
  },
};

const LoadingExample = (props) => (

  <div style={style.container}>

      <RefreshIndicator
        size={50}
        left={70}
        top={0}
        loadingColor="#FF9800"
        status="loading"
        style={style.refresh}
      />

  </div>
);

export default LoadingExample;