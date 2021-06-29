import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css'

const MoviesCardList = ({
                          movies,
                          renderedMoviesList,
                          setRenderedMoviesList,
                          moviesVisibility,
                          setMoviesVisibility,
                        }) => {
  const {pathname} = useLocation();
  const foundMovies = localStorage.getItem('movies');
  const [emptyListNoticeVisibility, setEmptyListNoticeVisibility] = useState('');

  const calculateMovieDuration = valueInMinutes => {
    const hours = Math.floor(valueInMinutes / 60);
    const minutes = valueInMinutes % 60;
    const durationInHours = `${hours}ч ${minutes}м`;
    return durationInHours;
  }

  useEffect(() => {
    if (foundMovies && JSON.parse(foundMovies).length > 0) setMoviesVisibility('movies-card-list_visible');
    if (foundMovies) setRenderedMoviesList(JSON.parse(foundMovies));
  }, [foundMovies, setMoviesVisibility, setRenderedMoviesList]);

  return (
      <div  className={`movies-card-list ${moviesVisibility}`}>
        <p className="movies-card-list__empty-text">Здесь пока ничего нет</p>
        <ul className="movies-card-list__ul">
          {renderedMoviesList.map((movie) => (
              <MoviesCard
                  movie={movie}
                  key={movie.id}
                  movieTitle={movie.nameRU}
                  movieDuration={calculateMovieDuration(movie.duration)}
                  movieTrailer={movie.trailerLink}
                  movieImage={movie.image
                      ? `https://api.nomoreparties.co${movie.image.url}`
                      : 'https://imgur.com/j6h8g1O'
                  }
              />
          ))}
        </ul>
      </div>
  );
}

export default MoviesCardList;
