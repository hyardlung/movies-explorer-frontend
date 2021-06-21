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
          {links.map(({ id, caption, url }) => (
              <li key={id} className="nav-tab__list-item">
                <ButtonedLink
                  caption={caption}
                  href={url}
                  className={'nav-tab__link'}
                />
              </li>
          ))}
        </ul>
      </nav>
  );
}

export default NavTab;
