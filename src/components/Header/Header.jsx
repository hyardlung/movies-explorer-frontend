import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import './Header.css';

import { navLinks, authLinks } from '../../config/links';

const Header = ({
    isLoggedIn = false
                }) => {
  return (
      <header className="header">
        <NavLink to="/">
          <img
              src={logo}
              alt="Логотип сервиса Movie Explorer"
              className="header__logo"
          />
        </NavLink>

        <div className="header__nav-wrapper">
          <Navigation links={ isLoggedIn ? authLinks : navLinks }/>
          {  }
        </div>
      </header>
  )
}

export default Header;
