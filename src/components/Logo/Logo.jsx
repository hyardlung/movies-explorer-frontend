import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Logo.css';

const Logo = ({
    className = ''
              }) => {
  return (
      <Link to="/" className={`logo ${className}`}>
        <img
            src={logo}
            alt="Логотип сервиса Movie Explorer"
            className="logo__img"
        />
      </Link>
  );
}

export default Logo;
