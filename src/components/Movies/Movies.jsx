import React from 'react';
import './Movies.css';
import SearchFilm from '../SearchFilm/SearchFilm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {movies} from '../../config/links';

const Movies = () => {
  return (
      <section className="movies">
        <div className="movies__container">
          <SearchFilm className={'movies__search-film'}/>
          <MoviesCardList links={movies}/>
        </div>

        <button className="movies__load-more">
          <span className="movies__more-caption">Ещё</span>
        </button>
      </section>
  );
}

export default Movies;
