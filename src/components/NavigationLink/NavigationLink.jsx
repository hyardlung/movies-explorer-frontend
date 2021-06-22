import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationLink.css';

const NavigationLink = ({
                          className = '',
                          caption = '',
                          path = '/'
}) => {
  return (
      <NavLink
          to={path}
          className={`navigation-link ${className}`}
          activeClassName='navigation-link_active'
      >
        {caption}
      </NavLink>
  );
}

export default NavigationLink;
