import React from 'react';

/*

Service(props)
console.log(props.title)

*/

function Service({ icon, title, text }) {

  console.log(icon)
  return (
    <div className="service">
      <div className="service__icon">
        <img src={icon} className='icon' />
      </div>
      <div className="service__content">
        <h3>{title}</h3>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}

export default Service;
