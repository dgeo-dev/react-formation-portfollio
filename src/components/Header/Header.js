import React from 'react'
import { useState } from 'react'
import "./Header.css";
import Navbar from '../Navbar/';
import Socials from '../Socials/';

function Header() {

  const [openMenu, setOpenMenu] = useState(false);  

  const handleClick = () => {
    
    /*if(openMenu) {
      setOpenMenu(false)
    } else {
      setOpenMenu(true)
    }*/

    // openMenu ? setOpenMenu(false) : setOpenMenu(true)
    setOpenMenu(!openMenu)
  }

  return (
    <header className={`header ${openMenu ? "show-nav" : "hide-nav"}`}>
      <div className="container d-flex">
        <div className="logo">
          John Doe
        </div>
        <Navbar />
        <div className="right">
        <Socials />       
        <button className="burger" onClick={handleClick}><span className="bar"></span></button>
        </div>
      </div>
    </header>
  )
}

export default Header
