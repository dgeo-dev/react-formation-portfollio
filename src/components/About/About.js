import React from 'react';
import './About.css';

function About() {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="grid">
            <div className="grid__item">
              <img src="../images/person.jpg" width="560" height="453" loading="lazy"
                alt="John Doe - Développeur web freelance" />
            </div>
            <div className="grid__item">
              <h2 className="section-title">A propos</h2>
              <h3>Qui suis-je</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong>Mot ou portion de phrase
                importante</strong>, ipsum aut
                beatae quis nemo dolore! Culpa officia explicabo obcaecati sint!
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <strong>Mot ou portion de phrase
                importante</strong>, ipsum aut
                beatae quis nemo dolore! Culpa officia explicabo obcaecati sint!
              </p>
              <ul>
                <li>Liste</li>
                <li>Liste</li>
                <li>Liste</li>
                <li>Liste</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
