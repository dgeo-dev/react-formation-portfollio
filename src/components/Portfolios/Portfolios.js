import React from 'react';
import { useEffect, useState } from 'react';
import './Portfolios.css';
import Portfolio from'./Portfolio';
import data from'../../data/portfolios/data';

function Portfolios() {

  /* 
  https://medium.com/@lualmeida_90776/portfolio-filter-with-reactjs-and-react-hooks-b056f136bdba
  */

  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(data);
  }, []);

  useEffect(() => {
    setProjects([]);
    const filtered = data.map(p => ({ ...p, filtered: p.category_slug.includes(filter) }));
    setProjects(filtered);
  }, [filter]);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Porfolio</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius eos dolore obcaecati perspiciatis. Eos neque
            similique placeat doloremque cupiditate, ut vero autem officia repellat explicabo, doloribus vel? Culpa, fuga
            quod!</p>
        </div>

        <ul className="grid portfolio-filters list-unstyled">
          <li className="grid__item">
            <button className="active" data-filter="all">Tous les projets</button>
          </li>
          <li className="grid__item">
            <button data-filter="web">Développement web</button>
          </li>
          <li className="grid__item">
            <button data-filter="design">Refonte Graphique</button>
          </li>
          <li className="grid__item">
            <button data-filter="app">Applications</button>
          </li>
        </ul>

        <button active={filter === 'all'} onClick={() => setFilter('all')}>All</button>
        <button active={filter === 'web'} onClick={() => setFilter('web')}>Frontend</button>
        <button active={filter === 'app'} onClick={() => setFilter('app')}>Mobile</button>
        <button  active={filter === 'design'} onClick={() => setFilter('design')}>UX/UI</button>

        <div className="grid">   

        {/*data.map(portfolio => (
          <Portfolio key={portfolio.id} id={portfolio.id} categorySlug={portfolio.category_slug} /> 
        ))*/}  

        {projects.map(portfolio => portfolio.filtered === true ? (
            <Portfolio key={portfolio.id} data={portfolio} /> 
          ) : '')}
          
        </div>
      </div>

    </section>
  );
}

export default Portfolios;
