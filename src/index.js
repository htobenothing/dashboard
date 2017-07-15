import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {BrowserRouter as Router} from 'react-router-dom';

injectTapEventPlugin();

ReactDOM.render((
  <Router>
    <App />
  </Router>
)

, 
document.getElementById('root'));
registerServiceWorker();
