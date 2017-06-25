import React from 'react';
import { Link } from 'react-router-dom';

export default function (props) {
  return (
    <div id="home-container">
      <span>Choose a class:</span>
      <div>
        <div><strong>Samurai</strong></div>
        <Link to="/samurai"><img src="img/JobIcons/SAM.png"/></Link>
      </div>
      {
        props.children && React.cloneElement(props.children, props)
      }
    </div>
  );
}
