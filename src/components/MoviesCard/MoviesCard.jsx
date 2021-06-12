import React from 'react';
import './MoviesCard.css'

const MoviesCard = ({
                      _id,
                      url,
                      title,
                      duration
                    }) => {
  return (
      <li key={_id} className="movies-card">
        <img src={url}
             alt="Тестовая карточка"
             className="movies-card__img"
        />
        <div className="movies-card__description-wrapper">
          <p className="movies-card__title">{title}</p>
          <span className="movies-card__duration">{duration}</span>
          <button
              className="movies-card__save-button"
          />
        </div>
      </li>
  );
}

export default MoviesCard;
