import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import store, {history} from './reducers/store';

import { BrowserRouter as Router} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'


injectTapEventPlugin();


ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App></App>
    </ConnectedRouter>
  </Provider>
),document.getElementById('root'));

registerServiceWorker();



