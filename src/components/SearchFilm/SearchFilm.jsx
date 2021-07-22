import React, {useRef} from 'react';
import ShortFilmFilter from '../ShortFilmFilter/ShortFilmFilter';
import './SearchFilm.css'

const SearchFilm = ({// searchInputError,
                      setSearchInputError,
                      isShortMovies,
                      setIsShortMovies,
                      onSubmit,
                      className
}) => {

  const inputElement = useRef(null);

  const handleFormSubmit = evt => {
    evt.preventDefault();
    onSubmit(inputElement.current.value);
  };

  return (
      <section className={`search-film search-film_position ${className}`}>
        <form className="search-film__form"
              onSubmit={handleFormSubmit}
        >
          <div className="search-film__input-wrapper">
            <svg className="search-film__icon"
                 width="13"
                 height="14"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.8 8.26a3.67 3.67 0 11-5.2-5.18 3.67 3.67 0 015.2 5.18zm.43 1.39a5 5 0 11.95-.95l3.56 3.57-.94.94-3.57-3.56z"
                    fill="#8b8b8b80"/>
            </svg>
            <input type="text"
                   placeholder="Фильм"
                   className="search-film__input"
                   required
                   ref={inputElement}
                   onClick={() => setSearchInputError('')}
            />
          </div>
          <button className="search-film__button">
            <svg width="7"
                 height="14"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13l5-6-5-6"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"/>
            </svg>
        </button>
        </form>
        <div className="search-film__divider" />
        <ShortFilmFilter isShortMovies={isShortMovies}
                         setIsShortMovies={setIsShortMovies}
        />
      </section>
  );
}

export default SearchFilm;
