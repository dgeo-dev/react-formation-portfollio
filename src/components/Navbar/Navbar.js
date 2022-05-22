import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar ">
      <ul className="menu list-unstyled">
         
        <li><a href="/">Accueil</a></li>
        <li><a href="/#about">A propos</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#skills">Compétences</a></li>
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><a href="/#contact">Contact</a></li>
        <li><Link to="/admin/CreatePortfolio">Create Portfolio</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
