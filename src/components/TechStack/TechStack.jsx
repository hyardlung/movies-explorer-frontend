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
          {links.map(({ id, caption, url }) => (
              <li key={id} className="tech-stack__list-item">
                <ButtonedLink
                    caption={caption}
                    href={url}
                    rel={'noopener noreferrer'}
                    target={'_blank'}
                    className={'tech-stack__link'}
                />
              </li>
          ))}
        </ul>
      </nav>
  );
}

export default TechStack;
