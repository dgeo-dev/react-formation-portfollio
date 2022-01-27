import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mes compétences</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius eos dolore obcaecati perspiciatis. Eos neque
            similique placeat doloremque cupiditate, ut vero autem officia repellat explicabo, doloribus vel? Culpa, fuga
            quod!</p>
        </div>
        <div className="grid">
          <div className="grid__item">
            <h3>Domaines de compétences</h3>
            <ul className="list-unstyled">
              <li>
                <h4>Compétence</h4>
                <p>Description de la compétence</p>
              </li>
              <li>
                <h4>Compétence</h4>
                <p>Description de la compétence</p>
              </li>
              <li>
                <h4>Compétence</h4>
                <p>Description de la compétence</p>
              </li>
              <li>
                <h4>Compétence</h4>
                <p>Description de la compétence</p>
              </li>
              <li>
                <h4>Compétence</h4>
                <p>Description de la compétence</p>
              </li>
              <li>
                <h4>Compétence</h4>
                <p>Description de la compétence</p>
              </li>
              <li>
                <h4>Compétence</h4>
                <p>Description de la compétence</p>
              </li>
            </ul>
          </div>
          <div className="grid__item">
            <h3>Compétences en développement</h3>
            <div className="progressbar">
              <div className="bar" data-width="95">HTML</div>
            </div>
            <div className="progressbar">
              <div className="bar" data-width="90">CSS</div>
            </div>
            <div className="progressbar">
              <div className="bar" data-width="85">JAVASCRIPT</div>
            </div>
            <div className="progressbar">
              <div className="bar" data-width="90">PHP</div>
            </div>
            <div className="progressbar">
              <div className="bar" data-width="85">NODE</div>
            </div>
            <div className="progressbar">
              <div className="bar" data-width="75">REACT</div>
            </div>
            <h3>Compétences en conception graphique</h3>
            <div className="progressbar">
              <div className="bar" data-width="90">PHOTOSHOP</div>
            </div>
            <div className="progressbar">
              <div className="bar" data-width="80">ILLUSTRATOR</div>
            </div>
            <div className="progressbar">
              <div className="bar" data-width="75">FIGMA</div>
            </div>
            <div className="progressbar">
              <div className="bar" data-width="65">AFTER EFFECT</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Skills;
