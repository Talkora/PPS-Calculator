'use strict';
import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.jsx';

import Navbar from './containers/Navbar.jsx';
import JobContainer from './containers/JobContainer.jsx';

render(
  <Provider store={store}>
    <Router>
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Route path="/:job" component={JobContainer} />
        </main>
      </div>
    </Router>
  </Provider>,
  document.getElementById('page-content')
);
