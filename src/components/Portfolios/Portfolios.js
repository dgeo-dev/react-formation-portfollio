import React from 'react';
import { useEffect, useState } from 'react';
import './Portfolios.css';
import Portfolio from'./Portfolio';
import data from'../../data/portfolios/data';
/* Node part */
// const axios = require('axios');

function Portfolios() {
  
  const [projects, setProjects] = useState(data);
  const [filter, setFilter] = useState('all');
  
  const handleFilter = (cat) => {    
    setFilter(cat);   
    console.log(cat)
  }

  /* Node part */
  
  /*useEffect(() => {
    axios.get('http://localhost:9000/api/v1/portfolios')
    .then(function (response) {
      const data = response.data;
      const filtered = data.map(p => ({ ...p, filtered: p.category_slug.includes(filter) }));
      setProjects(filtered);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [filter]);
  */ 

  useEffect(() => {   
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
            <button className={`${filter === 'all' ? "active" : "inactive" }`} onClick={() => handleFilter('all')}>Tous les projets</button>
          </li>
          <li className="grid__item">
            <button className={`${filter === 'web' ? "active" : "inactive" }`} onClick={() => handleFilter('web')}>Développement web</button>
          </li>
          <li className="grid__item">
            <button className={`${filter === 'design' ? "active" : "inactive" }`} onClick={() => handleFilter('design')}>Refonte Graphique</button>
          </li>
          <li className="grid__item">
            <button className={`${filter === 'app' ? "active" : "inactive" }`} onClick={() => handleFilter('app')}>Applications</button>
          </li>          
        </ul>       

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
