import React from 'react';

/*
Service(props)
console.log(props.title)
const { title, icon, text, children } = props;
{children}
*/

function Service({title, icon, text, children}) {
  
  console.log(icon)
  return (
    <div className="service">      
      <div className="service__icon">        
        <img src={icon} className='icon' alt='' />
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
