import React from 'react';
import ButtonedLink from '../ButtonedLink/ButtonedLink';

import './TechStack.css';

const TechStack = ({
                  links = [],
                  className = ''
                }) => {
  return (
      <nav className="tech-stack">
        <ul className={ `tech-stack__list ${className}` }>
          {links.map(({ caption }) => (
              <li key={ caption }>
                <ButtonedLink
                    caption={caption}
                    className={'tech-stack__item'}
                />
              </li>
          ))}
        </ul>
      </nav>
  );
}

export default TechStack;
