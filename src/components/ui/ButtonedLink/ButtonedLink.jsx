import React from 'react';
import './ButtonedLink.css';

const ButtonedLink = ({
                        caption = '',
                        path = '',
                        className = ''

}) => {
  return (
      <a href={path} className={`buttoned-link ${className} `}>
        {caption}
      </a>
  )
}

export default ButtonedLink;
