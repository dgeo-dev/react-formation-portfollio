import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="grid">
          <div className="hero__item left">
            <span>Développeur Web Freelance</span>
            <h1 className="title">Hello, Je suis John Doe de Paris</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="hero__item right">
            <div className="hero__avatar">
              <img src="../images/avatar.png" width="400" height="400" loading="lazy"
                alt="Avatar John Doe - Développeur web freelance" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
