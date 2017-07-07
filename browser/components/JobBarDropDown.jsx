import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  console.log(props.classes);
  const dropdownitems = props.classes.map(classname =>
    <li>{classname}</li>
  );
  console.log(dropdownitems);
  return (
    <div id={`${props.classtype}-dropdown`}>
      <a className='dropdown-button btn' href='#' data-hover="true" data-activates={`${props.classtype}-dropdown`}>{props.classtype} Classes</a>
      <ul id={`${props.classtype}-dropdown`} className='dropdown-content'>{dropdownitems}</ul>
    </div>
  );
}
