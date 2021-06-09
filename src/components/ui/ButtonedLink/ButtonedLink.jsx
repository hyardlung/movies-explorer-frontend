import React from 'react';

import './ButtonedLink.css';

const ButtonedLink = ({link, heading}) => {
  return (
      <li className="buttoned-link__list-item">
        <a href={link} className="buttoned-link">{heading}</a>
      </li>
  )
}

export default ButtonedLink;
