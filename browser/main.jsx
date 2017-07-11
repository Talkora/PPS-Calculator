'use strict';
import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.jsx';

import Navbar from './containers/Navbar.jsx';
import JobContainer from './containers/JobContainer.jsx';
import Footer from './components/Footer.jsx';

render(
  <Provider store={store}>
    <Router>
      <div>
        <header className="z-depth-5">
          <Navbar />
        </header>
        <main>
          <Route path="/:job" component={JobContainer} />
        </main>
        <footer className="z-depth-5">
          <Footer />
        </footer>
      </div>
    </Router>
  </Provider>,
  document.getElementById('page-content')
);
