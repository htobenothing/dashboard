import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './reducer/store';




injectTapEventPlugin();

ReactDOM.render((
  <Provider store={store}>
    <Router >
      <App />
    </Router>
  </Provider>

)

  ,
  document.getElementById('root'));
registerServiceWorker();



