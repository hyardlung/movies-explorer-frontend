import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css'

const MoviesCardList = ({
                          movies,
                          savedMovies,
                          renderedMoviesList,
                          setRenderedMoviesList,
                          moviesVisibility,
                          setMoviesVisibility,
                          countInitialCards,
                          moreButtonVisibility,
                          setMoreButtonVisibility,
                          loadMoreMoviesHandler,
                          loggedIn
                        }) => {
  const {pathname} = useLocation();
  const foundMovies = localStorage.getItem('foundMovies');
  const [emptyListNoticeVisibility, setEmptyListNoticeVisibility] = useState('');

  const calculateMovieDuration = valueInMinutes => {
    const hours = Math.floor(valueInMinutes / 60);
    const minutes = valueInMinutes % 60;
    let durationInHours = `${hours}ч ${minutes}м`;
    if (hours === 0) durationInHours = `${minutes}м`;
    if (minutes === 0) durationInHours = `${hours}ч`;
    return durationInHours;
  }

  useEffect(() => {
    if (movies.length > renderedMoviesList.length) {
      setMoreButtonVisibility('')
    } else {
      setMoreButtonVisibility('movies-card-list__load-more_hidden')
    }
  }, [movies, renderedMoviesList]);

  useEffect(() => {
    const initialCards = countInitialCards();

    if (pathname === '/saved-movies') {
      setMoreButtonVisibility('movies-card-list__load-more_hidden');
      setEmptyListNoticeVisibility('movies-card-list__empty-text_hidden');
    } else {
      // setMoreButtonVisibility('');
      setEmptyListNoticeVisibility('');
    }
    if (loggedIn && foundMovies && JSON.parse(foundMovies).length > 0) setMoviesVisibility('movies-card-list_visible');
    if (loggedIn && foundMovies) setRenderedMoviesList(JSON.parse(foundMovies).slice(0, initialCards));
  }, [movies, setRenderedMoviesList, pathname]);

  return (
      <div className={`movies-card-list ${moviesVisibility}`}>
        {pathname === '/movies'
            ? (
                renderedMoviesList.length > 0
                    ? ''
                    : <p className={`movies-card-list__empty-text ${emptyListNoticeVisibility}`}>
                      Ничего не найдено
                    </p>
            )
            : (
                savedMovies.length > 0
                    ? ''
                    : <p className={`movies-card-list__empty-text ${emptyListNoticeVisibility}`}>
                      Ничего не найдено
                    </p>
            )
        }
        <ul className="movies-card-list__ul">
          {pathname === '/movies'
              ? (
                  renderedMoviesList.map(movie => (
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
                  ))
              )
              : (
                  savedMovies.map(movie => (
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
                  ))
              )
          }
        </ul>
        {
          movies.length > renderedMoviesList.length || pathname !== '/saved-movies'
              ? (
                  <button type="button"
                          onClick={loadMoreMoviesHandler}
                          className={`movies-card-list__load-more ${moreButtonVisibility}`}
                  >
                    <span className="movies-card-list__more-caption">Ещё</span>
                  </button>
              )
              : ''
        }
      </div>
  );
}

export default MoviesCardList;
