import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({
    links =[],
    _id = Number,
    url = '',
    title = '',
    duration = ''
                        }) => {
  return (
      <div  className="movies-card-list">
        <p className="movies-card-list__empty-text">Здесь пока ничего нет</p>
        <ul className="movies-card-list__ul">
          {links.map((item) => (
              <MoviesCard
                  _id={item._id}
                  url={item.url}
                  title={item.title}
                  duration={item.duration}
              />
          ))}
        </ul>
      </div>
  );
}

export default MoviesCardList;
