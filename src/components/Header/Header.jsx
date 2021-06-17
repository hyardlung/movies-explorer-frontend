import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Header.css';

import { navLinks, authLinks } from '../../config/links';

const Header = ({
    isLoggedIn = false
                }) => {
  return (
      <header className="header">
        <Logo />

        <div className="header__nav-wrapper">
          <Navigation links={ isLoggedIn ? authLinks : navLinks }/>
          {  }
        </div>
      </header>
  )
}

export default Header;
