import React from 'react';
import { useLocation } from 'react-router-dom';
import savedCardIcon from '../../images/save-button_state_on.svg';
import unsavedCardIcon from '../../images/save-button_state_off.svg';
import deleteCardIcon from '../../images/delete-button.svg';
import './MoviesCard.css'

const MoviesCard = ({
                      _id,
                      url,
                      title,
                      duration
                    }) => {
  const { pathname } = useLocation();
  const isSelected = false;
  const сardIconSaveState = (isSelected ? savedCardIcon : unsavedCardIcon);
  const cardIconState = (pathname === '/movies' ? сardIconSaveState : deleteCardIcon);

  return (
      <li key={_id} className="movies-card">
        <img src={url}
             alt="Тестовая карточка"
             className="movies-card__img"
        />
        <div className="movies-card__description-wrapper">
          <p className="movies-card__title">{title}</p>
          <span className="movies-card__duration">{duration}</span>
          <img src={cardIconState} alt="тест" className="movies-card__icon"/>
        </div>
      </li>
  );
}

export default MoviesCard;
