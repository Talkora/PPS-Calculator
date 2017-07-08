import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Button } from 'react-materialize';

export default (props) => {
  return (
    <Dropdown trigger={
        <Button data-hover="true">{props.classtype} Classes</Button>
      } className="select-dropdown">
      {props.classes.map(classinfo =>
        <li key={classinfo.shortname}><img className="left" src={`/img/JobIcons/${classinfo.shortname}.png`} /><Link to={`/${classinfo.fullname}`} className={`${props.classtype}`}>{classinfo.fullname}</Link></li>
      )}
    </Dropdown>
  );
}

// <img className="right" height="32" width="32" src={`/img/JobIcons/${classinfo.shortname}.png`} />
