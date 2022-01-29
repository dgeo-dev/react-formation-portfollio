import React from 'react';
import Hero from '../components/Hero/';
import About from '../components/About/';
import Services from '../components/Services/';
import Skills from '../components/Skills/';
import Portfolios from '../components/Portfolios/';
import Contact from '../components/Contact/';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Portfolios />
      <Contact />
    </>
  )
}

export default Home;
