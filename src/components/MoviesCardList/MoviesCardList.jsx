import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import calculateMovieDuration from '../../utils/calculateMoviesDuration';
import './MoviesCardList.css'

const MoviesCardList = ({
                          movies,
                          savedMovies,
                          renderedMoviesList,
                          setRenderedMoviesList,
                          moviesVisibility,
                          setMoviesVisibility,
                          countInitialCards,
                          moviesCount,
                          setMoviesCount,
                          setMoreButtonVisibility,
                          addMovieToFavorites,
                          removeMovieFromFavorites,
                          loggedIn
                        }) => {
  const {pathname} = useLocation();
  const foundMovies = localStorage.getItem('foundMovies');
  const [emptyListNoticeVisibility, setEmptyListNoticeVisibility] = useState('');

  useEffect(() => {
    if (movies.length >= renderedMoviesList.length) {
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
                  renderedMoviesList.slice(0, moviesCount.startCards).map(movie => (
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
                          savedMovies={savedMovies}
                          addMovieToFavorites={addMovieToFavorites}
                          removeMovieFromFavorites={removeMovieFromFavorites}
                      />
                  ))
              )
              : (
                  savedMovies.map(movie => (
                      <MoviesCard
                          movie={movie}
                          key={movie._id}
                          movieTitle={movie.nameRU}
                          movieDuration={calculateMovieDuration(movie.duration)}
                          movieTrailer={movie.trailerLink}
                          movieImage={movie.image
                              ? movie.image
                              : 'https://imgur.com/j6h8g1O'
                          }
                          savedMovies={savedMovies}
                          addMovieToFavorites={addMovieToFavorites}
                          removeMovieFromFavorites={removeMovieFromFavorites}
                      />
                  ))
              )
          }
        </ul>
        {
          movies.length > renderedMoviesList.length || pathname !== '/saved-movies'
              ? (
                  <button type="button"
                          onClick={() => {
                            setMoviesCount({ ...moviesCount, startCards: moviesCount.startCards + moviesCount.moreCards })
                          }}
                          className={`movies-card-list__load-more movies-card-list__more-caption ${moviesCount.startCards < movies.length? "": "movies-card-list__load-more_hidden"}`}
                  >Ещё</button>
              )
              : ''
        }
      </div>
  );
}

export default MoviesCardList;
