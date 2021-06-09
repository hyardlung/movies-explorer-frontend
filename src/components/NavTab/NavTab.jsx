import React from 'react';
import ButtonedLink from '../ui/ButtonedLink/ButtonedLink';

import './NavTab.css';

const NavTab = ({link, heading}) => {
  return (
      <nav className="nav-tab">
        <ul className="nav-tab__list">
          <ButtonedLink
              heading={'О проекте'}
              link={'#'}
          />
          <ButtonedLink
              heading={'Технологии'}
              link={'#'}
          />
          <ButtonedLink
              heading={'Студент'}
              link={'#'}
          />
        </ul>
      </nav>
  )
}

export default NavTab;
