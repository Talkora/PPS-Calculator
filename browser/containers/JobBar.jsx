import React from 'react';
import { Link } from 'react-router-dom';
import melee from '../utils/melee.jsx';
import ranged from '../utils/ranged.jsx';
import magic from '../utils/magic.jsx';
import tanks from '../utils/tanks.jsx';
import healers from '../utils/healers.jsx';

import JobBarDropDown from '../components/JobBarDropDown.jsx';

export default function (props) {
  return (
    <div id="jobbar" className="container">
      {
        melee.length > 0 && <JobBarDropDown classtype="Melee" classes={melee} />
      }
      {
        ranged.length > 0 && <JobBarDropDown classtype="Ranged" classes={ranged} />
      }
      {
        magic.length > 0 && <JobBarDropDown classtype="Magic" classes={magic} />
      }
      {
        tanks.length > 0 && <JobBarDropDown classtype="Tank" classes={tanks} />
      }
      {
        healers.length > 0 && <JobBarDropDown classtype="Healer" classes={healers} />
      }
    </div>
  );
}
