import React from 'react';

function ProgressBar({ skill, lvl }) {
  return  (
  <div className="progressbar">
    <div className="bar" data-width={lvl}>{skill}</div>
  </div>
  );
}

export default ProgressBar;
