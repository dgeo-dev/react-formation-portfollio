import React from 'react';
import './Services.css';
import Service from './Service';
import IconLightbulb from '../../icons/icon-lightbulb.svg';
import IconCheck from '../../icons/icon-check.svg';
import IconEdit from '../../icons/icon-edit.svg';
import IconMobile from '../../icons/icon-mobile.svg';
import IconPencil from '../../icons/icon-pencil.svg';
import IconSync from '../../icons/icon-sync.svg';
import IconTools from '../../icons/icon-tools.svg';
import IconUser from '../../icons/icon-user.svg';

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mes services</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius eos dolore obcaecati perspiciatis. Eos neque
            similique placeat doloremque cupiditate, ut vero autem officia repellat explicabo, doloribus vel? Culpa, fuga
            quod!</p>
        </div>
        <div className="grid">
          <div className="grid__item">

            <Service title="GESTION DE PROJETS WEB" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Molestiae vero sed similique" icon={IconLightbulb} />

            <Service title="INTÉGRATION WEB" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Molestiae vero sed similique" icon={IconEdit} />

            <Service title="DÉVELOPPEMENTS SPÉCIFIQUES" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Molestiae vero sed similique" icon={IconTools} />

            <Service title="RÉFÉRENCEMENT NATUREL" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Molestiae vero sed similique" icon={IconCheck} />

          </div>
          <div className="grid__item">

            <Service title="CONCEPTION GRAPHIQUE & WEBDESIGN" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Molestiae vero sed similique" icon={IconPencil} />

            <Service title="DYNAMISME DES PAGES" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Molestiae vero sed similique" icon={IconSync} />

            <Service title="INTERFACE D'ADMINISTRATION" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Molestiae vero sed similique" icon={IconUser} />

            <Service title="RESPONSIVE DESIGN" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Molestiae vero sed similique" icon={IconMobile} />

          </div>
        </div>
      </div>

    </section>
  );
}

export default Services;
