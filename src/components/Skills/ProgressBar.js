import React from 'react';
import { InView } from 'react-intersection-observer';

function ProgressBar({ skill, lvl }) {

  const Css = `active bar-size-${lvl}`;

  return  (
    <InView>
      {({ inView, ref, entry }) => (
        <div ref={ref} className="progressbar">
          <div className={`bar ${inView ? Css : 'inactive'}`}>{skill}</div>
        </div>
      )}
    </InView>
  
  );
}

export default ProgressBar;
