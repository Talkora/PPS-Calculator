import React from 'react';
import { connect } from 'react-redux';

function JobContainer (props) {
  return (
    <div id="jobContainer" className="container">
      <h1>Welcome to the {props.match.params.job} Page</h1>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(JobContainer);
