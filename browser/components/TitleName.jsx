import React from 'react';
import { Link } from 'react-router-dom';

export default function (props) {
  return (
    <div id="title" className="container">
      <Link to="/" id="titlename">Talkora's PPS Calculator</Link>
    </div>
  );
}
