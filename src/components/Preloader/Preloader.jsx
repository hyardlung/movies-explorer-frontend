import React from 'react'
import './Preloader.css'

const Preloader = ({preloaderVisibility}) => {
  return (
      <div className={`preloader ${preloaderVisibility}`}>
        <div className="preloader__container">
          <span className="preloader__round"></span>
        </div>
      </div>
  )
};

export default Preloader;
