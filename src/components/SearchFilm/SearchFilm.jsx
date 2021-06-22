import React from 'react';
import './SearchFilm.css'
import ShortFilmFilter from '../ShortFilmFilter/ShortFilmFilter';

const SearchFilm = ({
    className = ''
                    }) => {
  return (
      <section className={`search-film search-film_position ${className}`}>
        <form action="" className="search-film__form">
          <div className="search-film__input-wrapper">
            <svg className="search-film__icon"
                width="13"
                 height="14"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.8 8.26a3.67 3.67 0 11-5.2-5.18 3.67 3.67 0 015.2 5.18zm.43 1.39a5 5 0 11.95-.95l3.56 3.57-.94.94-3.57-3.56z"
                    fill="#8b8b8b80"/>
            </svg>
            <input
                type="text"
                placeholder="Фильм"
                className="search-film__input"
            />
          </div>
          <button className="search-film__button">
            <svg width="7"
                 height="14"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13l5-6-5-6"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
        </button>
        </form>
        <div className="search-film__divider" />
        <ShortFilmFilter />
      </section>
  );
}

export default SearchFilm;
