import React from 'react';
import { connect } from 'react-redux';
import styles from "../styles/App.jsx";

import TitleBar from "../components/TitleBar.jsx";
import Home from '../components/Home.jsx';

function AppContainer (props) {
  return (
    <div id="title" className="container" style={styles}>
      <TitleBar />
      <Home />
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(AppContainer);
