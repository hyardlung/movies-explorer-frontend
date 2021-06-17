import React from 'react';
import ButtonedLink from '../ButtonedLink/ButtonedLink';

import './NavTab.css';

const NavTab = ({
                  links = [],
                  className = ''
}) => {
  return (
      <nav className="nav-tab">
        <ul className={ `nav-tab__list ${className}` }>
          {links.map(({ caption, path, name }) => (
              <li key={name}>
                <ButtonedLink
                  caption={caption}
                  path={path}
                  className={'nav-tab__item'}
                />
              </li>
          ))}
        </ul>
      </nav>
  );
}

export default NavTab;
