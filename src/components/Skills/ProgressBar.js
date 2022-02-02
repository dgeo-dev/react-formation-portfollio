import React from 'react';
import { useInView } from 'react-intersection-observer';

function ProgressBar({ skill, lvl }) {

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce:true
  });

  const Css = `active bar-size-${lvl}`;

  return  (
    <div ref={ref} className="progressbar">
      <div className={`bar ${inView ? Css : 'inactive'}`}>{skill}</div>
    </div>
  );
}

export default ProgressBar;