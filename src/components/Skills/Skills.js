import React from 'react';
import './Skills.css';
import Skill from './Skill';
import ProgressBar from './ProgressBar';

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
              <Skill skill="Domaine de compétence"/>
              <Skill skill="Domaine de compétence"/>
              <Skill skill="Domaine de compétence"/>
              <Skill skill="Domaine de compétence"/>
              <Skill skill="Domaine de compétence"/>
              <Skill skill="Domaine de compétence"/>
              <Skill skill="Domaine de compétence"/>
              <Skill skill="Domaine de compétence"/>
            </ul>
          </div>
          <div className="grid__item">

            <h3>Compétences en développement</h3>

            <ProgressBar skill="HTML" lvl="95" />
            <ProgressBar skill="CSS" lvl="90" />
            <ProgressBar skill="JAVASCRIPT" lvl="85" />
            <ProgressBar skill="PHP" lvl="90" />
            <ProgressBar skill="NODE" lvl="85" />
            <ProgressBar skill="REACT" lvl="75" />
            
            <h3>Compétences en conception graphique</h3>

            <ProgressBar skill="PHOTOSHOP" lvl="90" />
            <ProgressBar skill="ILLUSTRATOR" lvl="80" />
            <ProgressBar skill="FIGMA" lvl="75" />
            <ProgressBar skill="AFTER EFFECT" lvl="65" />
            
          </div>
        </div>
      </div>

    </section>
  );
}

export default Skills;
