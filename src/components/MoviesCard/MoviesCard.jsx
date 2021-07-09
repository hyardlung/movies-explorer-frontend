import React from 'react';
import { useLocation } from 'react-router-dom';
import savedCardIcon from '../../images/save-button_state_on.svg';
import unsavedCardIcon from '../../images/save-button_state_off.svg';
import deleteCardIcon from '../../images/delete-button.svg';
import './MoviesCard.css'

const MoviesCard = ({
                      movie,
                      movieTitle,
                      movieDuration,
                      movieTrailer,
                      movieImage,
                      savedMovies,
                      addMovieToFavorites,
                      removeMovieFromFavorites
                    }) => {
  const { pathname } = useLocation();

  // проверяет, добавлен ли фильм в сохранённые
  const isMovieAdded = movie => savedMovies.some(item => item.movieId === movie.id);

  const isAddedToFavorites = (pathname === '/saved-movies' ? true : isMovieAdded(movie));

  const сardIconSaveState = (isAddedToFavorites ? savedCardIcon : unsavedCardIcon);
  const cardIconState = (pathname === '/movies' ? сardIconSaveState : deleteCardIcon);

  const savedMoviesHandler = () => {
    if (!isAddedToFavorites) {
      addMovieToFavorites(movie);
    } else {
      const deletedMovie = savedMovies.find(movie => movie.id = movie.movieId);
      removeMovieFromFavorites(deletedMovie._id);
    }
  };

  const deleteButtonHandler = () => {
    removeMovieFromFavorites(movie._id);
  };

  const movieIconBehaviorToggle = (pathname === '/movies'
          ? savedMoviesHandler
          : deleteButtonHandler
  );

  return (
      <li key={movie.id} className="movies-card">
        <a href={movieTrailer}
           rel="noopener noreferrer"
           target="_blank"
           className="movie-card__trailer-link">
          <img src={movieImage}
               alt={movieTitle}
               className="movies-card__img"
          />
        </a>
        <div className="movies-card__description-wrapper">
          <p className="movies-card__title">{movieTitle}</p>
          <span className="movies-card__duration">{movieDuration}</span>
          <img src={cardIconState}
               alt="иконка кнопки, которая добавляет фильм в Сохранённые фильмы"
               className="movies-card__icon"
               onClick={movieIconBehaviorToggle}
          />
        </div>
      </li>
  );
}

export default MoviesCard;
