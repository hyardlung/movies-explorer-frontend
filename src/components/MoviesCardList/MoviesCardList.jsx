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
      <ul className="movies__card-list">
        {links.map((item) => (
            <MoviesCard
                _id={item._id}
                url={item.url}
                title={item.title}
                duration={item.duration}
            />
        ))}
      </ul>
  );
}

export default MoviesCardList;
