import React from 'react';
import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {movies} from '../../config/links';

const Movies = () => {
  return (
      <section className="movies">
        <div className="movies__container">
          <MoviesCardList links={movies}/>
        </div>
      </section>
  );
}

export default Movies;
