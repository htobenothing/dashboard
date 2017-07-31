import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import store from './reducers/store';
import { BrowserRouter as Router} from 'react-router-dom'


injectTapEventPlugin();


ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App></App>
    </Router>
  </Provider>
),document.getElementById('root'));

registerServiceWorker();



