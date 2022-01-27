import React from 'react';
import Hero from '../components/Hero/';
import About from '../components/About/';
import Services from '../components/Services/';
import Skills from '../components/Skills/';
import Portfolio from '../components/Portfolio/';
import Contact from '../components/Contact/';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  )
}

export default Home;
