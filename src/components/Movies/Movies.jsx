import {useEffect, useMemo, useState} from 'react';
import {useLocation} from 'react-router-dom';
import SearchFilm from '../SearchFilm/SearchFilm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {footerLinks} from '../../config/links';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import shortMoviesHandler from '../../utils/shortMoviesHandler';
import {numberCardsFromScreenSize, screenSizeDefinition} from '../../utils/screenDefinition';
import {moviesApi} from '../../utils/MoviesApi';
import {mainApi} from'../../utils/MainApi';
import {MOBILE_RESOLUTION, TABLET_RESOLUTION, SHORT_MOVIE_DURATION} from '../../utils/constants';
import './Movies.css';

const Movies = ({loggedIn}) => {
  const {pathname} = useLocation();
  const [foundMovies, setFoundMovies] = useState([]);
  const [renderedMoviesList, setRenderedMoviesList] = useState([]);
  const [searchInputError, setSearchInputError] = useState('');
  const [moviesVisibility, setMoviesVisibility] = useState('');
  const [preloaderVisibility, setPreloaderVisibility] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);
  const [moreButtonVisibility, setMoreButtonVisibility] = useState('movies-card-list__load-more_hidden');
  const [loadMoreClickCounter, setLoadMoreClickCounter] = useState(1);
  const [isShortMovies, setIsShortMovies] = useState(false);

  useEffect(() => {
    mainApi.getSavedMovies()
        .then(res => {
          if (res) setSavedMovies(res);
        })
        .catch(err => console.log(err));
    if (pathname === '/saved-movies') setMoviesVisibility('movies-card-list_visible');
  }, []);

  const filterShortMovies = movies => {
    if (isShortMovies) {
      return shortMoviesHandler(movies);
    }
    return movies.filter(movie => movie.duration >= SHORT_MOVIE_DURATION);
  }

  const processedMovies = useMemo(
      () => filterShortMovies(foundMovies),
      [isShortMovies, foundMovies]
  );

  const processedRenderedMovies = useMemo(
      () => filterShortMovies(renderedMoviesList),
      [isShortMovies, renderedMoviesList]
  );

  const processedSavedMovies = useMemo(
      () => filterShortMovies(savedMovies),
      [isShortMovies, savedMovies]
  );

  const countInitialCards = () => {
    const viewportWidth = screenSizeDefinition();
    if (viewportWidth >= TABLET_RESOLUTION) return 16;
    if (viewportWidth > MOBILE_RESOLUTION && viewportWidth <= TABLET_RESOLUTION) return 8;
    return 5;
  }

  const loadMoreMoviesHandler = () => {
    const MoviesCards = countInitialCards();
    setRenderedMoviesList(processedMovies.slice(0, MoviesCards + loadMoreClickCounter * numberCardsFromScreenSize()));
    setLoadMoreClickCounter(loadMoreClickCounter + 1);
  };

  const filterMoviesByKeyword = (movies, query) => {
    const filteredMovies = movies.filter(movie => movie.nameRU.toLowerCase().includes(query.toLowerCase()));
    setFoundMovies(() => {
      localStorage.setItem('foundMovies', JSON.stringify(filteredMovies));
      return filteredMovies;
    });
  };

  const searchMovieHandler = query => {
    if (query === '') return setSearchInputError('Введите ключевое слово');
    setPreloaderVisibility('preloader_visible');
    setMoviesVisibility('');

    if (pathname === '/movies') {
      if (!localStorage.getItem('movies')) {
        setPreloaderVisibility('preloader_visible');
        moviesApi.getMovies()
            .then(movies => {
              localStorage.setItem('movies', JSON.stringify(movies));
              filterMoviesByKeyword(JSON.parse(localStorage.movies), query);
              setPreloaderVisibility('');
              setMoviesVisibility('movies-card-list_visible');
              setMoreButtonVisibility('');
            })
            .catch(err => console.log(err));
        return;
      }

      filterMoviesByKeyword(localStorage.getItem('movies')
          ? JSON.parse(localStorage.movies)
          : [],
          query
      );
      setPreloaderVisibility('');
      setMoviesVisibility('movies-card-list_visible');
      setMoreButtonVisibility('');

    } else {
      setSavedMovies(savedMovies.filter(movie => movie.nameRU.toLowerCase().includes(query.toLowerCase())));
      setMoviesVisibility('movies-card-list_visible');
      setPreloaderVisibility('');
    }
  };

  const addMovieToFavorites = movie => {
    mainApi.addMovieToFavorites(movie)
        .then(movieData => {
          setSavedMovies([movieData.data, ...savedMovies])
        })
        .catch(err => console.log(err));
  };

  const removeMovieFromFavorites = movieId => {
    mainApi.removeMovieFromFavorites(movieId)
        .then(() => {
          const updatedSavedMovies = savedMovies.filter(movie => movie._id !== movieId);
          setSavedMovies(updatedSavedMovies);
        })
        .catch(err => console.log(err));
  };

  return (
      <>
        <Preloader preloaderVisibility={preloaderVisibility} />
        <Header loggedIn={loggedIn} />
        <section className="movies">
          <div className="movies__container">
            <SearchFilm searchInputError={searchInputError}
                        setSearchInputError={setSearchInputError}
                        isShortMovies={isShortMovies}
                        setIsShortMovies={setIsShortMovies}
                        onSubmit={searchMovieHandler}
                        className={'movies__search-film'}
            />
            <MoviesCardList movies={processedMovies}
                            savedMovies={processedSavedMovies}
                            renderedMoviesList={processedRenderedMovies}
                            setRenderedMoviesList={setRenderedMoviesList}
                            moviesVisibility={moviesVisibility}
                            setMoviesVisibility={setMoviesVisibility}
                            countInitialCards={countInitialCards}
                            moreButtonVisibility={moreButtonVisibility}
                            setMoreButtonVisibility={setMoreButtonVisibility}
                            loadMoreMoviesHandler={loadMoreMoviesHandler}
                            addMovieToFavorites={addMovieToFavorites}
                            removeMovieFromFavorites={removeMovieFromFavorites}
                            loggedIn={loggedIn}
            />
          </div>
        </section>
        <Footer loggedIn={loggedIn}
                links={footerLinks}
        />
      </>
  );
}

export default Movies;
