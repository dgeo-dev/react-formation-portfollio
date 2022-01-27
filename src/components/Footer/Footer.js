import React from 'react';
import './Footer.css'
import Socials from '../Socials/';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="grid">
          <div className="grid__item">
            <p>Johm Doe</p>
          </div>
          <div className="grid__item">
            <Socials />
          </div>
          <div className="grid__item">
            <p>Copyright © 2021 nomdusite. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
