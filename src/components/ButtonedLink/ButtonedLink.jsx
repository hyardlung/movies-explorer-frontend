import React from 'react';

import './ButtonedLink.css';

const ButtonedLink = ({
                        caption = '',
                        href = '',
                        rel = '',
                        target = '',
                        className = ''

}) => {
  return (
      <a href={href}
         rel={rel}
         target={target}
         className={`buttoned-link ${className} `}
      >
        {caption}
      </a>
  )
}

export default ButtonedLink;
