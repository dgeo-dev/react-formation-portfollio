import React from 'react'
import "./Navbar.css"


function Navbar() {
  return (
    <nav className="navbar ">
      <ul className="menu list-unstyled">
        <li><a href="#hero">Accueil</a></li>
        <li><a href="#about">A propos</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#skills">Compétences</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
