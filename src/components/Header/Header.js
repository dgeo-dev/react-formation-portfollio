import React from 'react'
import "./Header.css";
import Navbar from '../Navbar/';
import Socials from '../Socials/';

function Header() {
  return (
    <header className="header">
      <div className="container d-flex">
        <div className="logo">
          John Doe
        </div>
        <Navbar />
        <Socials />
      </div>
    </header>
  )
}

export default Header
