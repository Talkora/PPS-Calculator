import React from 'react';
import { connect } from 'react-redux';

import TitleName from "../components/TitleName.jsx";
import JobBar from '../containers/JobBar.jsx';

function AppContainer (props) {
  return (
    <div id="navbar" className="section">
      <TitleName />
      <JobBar />
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(AppContainer);
