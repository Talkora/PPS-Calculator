'use strict';
import React from 'react';
// import { Router, Route, Redirect } from 'react-router';
// import { createBrowserHistory } from 'history';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.jsx';

import App from './containers/App.jsx';
import JobContainer from './containers/JobContainer.jsx';

render(
  <Provider store={store}>
    <Router>
      <div id="body">
        <App />
        <Route path="/:job" component={JobContainer} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('page-content')
);
