import React from 'react';
import { Link } from 'react-router-dom';
import melee from '../utils/melee.jsx'

import JobBarDropDown from '../components/JobBarDropDown.jsx';

export default function (props) {
  console.log(melee.length);
  console.log(melee);
  return (
    <div id="jobbar" className="container">
      {
        melee.length > 0 && <JobBarDropDown classtype="Melee" classes={melee} />
      }
    </div>
  );
}
