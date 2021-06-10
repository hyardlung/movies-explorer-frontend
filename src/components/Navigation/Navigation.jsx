import React from 'react';
import './Navigation.css';
import NavigationLink from '../ui/NavigationLink/NavigationLink';

const Navigation = ({links = []}) => {
  return (
      <nav className="navigation">
        <ul className="navigation__list">
          {links.map(({caption, path, id}) => (
              <li key={id}>
                <NavigationLink
                    className='navigation__item'
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
