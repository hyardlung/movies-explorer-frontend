import React, {useContext, useState} from 'react';
import { useLocation } from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/currentUserContext';
import savedCardIcon from '../../images/save-button_state_on.svg';
import unsavedCardIcon from '../../images/save-button_state_off.svg';
import deleteCardIcon from '../../images/delete-button.svg';
import './MoviesCard.css'

const MoviesCard = ({
                      movie,
                      movieTitle,
                      movieDuration,
                      movieTrailer,
                      movieImage
                    }) => {
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);

  const { pathname } = useLocation();
  const currentUser = useContext(CurrentUserContext);

  const сardIconSaveState = (isAddedToFavorites ? savedCardIcon : unsavedCardIcon);
  const cardIconState = (pathname === '/movies' ? сardIconSaveState : deleteCardIcon);

  return (
      <li key={movie.id} className="movies-card">
        <img src={movieImage}
             alt={movieTitle}
             className="movies-card__img"
        />
        <div className="movies-card__description-wrapper">
          <p className="movies-card__title">{movieTitle}</p>
          <span className="movies-card__duration">{movieDuration}</span>
          <img src={cardIconState}
               alt="иконка кнопки, которая добавляет фильм в Сохранённые фильмы"
               className="movies-card__icon"
          />
        </div>
      </li>
  );
}

export default MoviesCard;
