import React from 'react';
import './Navigation.css';
import NavigationLink from '../NavigationLink/NavigationLink';

const Navigation = ({ links = [] }) => {
  return (
      <nav className="navigation">
        <ul className="navigation__list">
          {links.map(({caption, path, id}) => (
              <li key={id} className="navigation__item">
                <NavigationLink
                    caption={caption}
                    path={path}
                />
              </li>
          ))}
        </ul>
      </nav>
  )
}

export default Navigation;
