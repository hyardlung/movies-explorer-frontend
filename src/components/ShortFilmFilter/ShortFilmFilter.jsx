import React from 'react';
import './ShortFilmFilter.css';

const ShortFilmFilter = ({
                           isShortMovies,
                           setIsShortMovies
                         }) => {
  return (
      <div className="shortfilm-filter">
        <label htmlFor="shortfilm-checkbox" className="shortfilm-filter__label">
          <input type="checkbox"
                 id="shortfilm-checkbox"
                 className="shortfilm-filter__real"
                 onClick={() => {setIsShortMovies(!isShortMovies)}}
          />
          <span className="shortfilm-filter__fake"/>
        </label>
        <span className="shortfilm-filter__caption">Короткометражки</span>
      </div>
  );
}

export default ShortFilmFilter;
