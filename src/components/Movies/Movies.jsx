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
import {DESKTOP_RESOLUTION, MOBILE_RESOLUTION, SHORT_MOVIE_DURATION, TABLET_RESOLUTION} from '../../utils/constants';
import './Movies.css';

const Movies = ({loggedIn}) => {
  const {pathname} = useLocation();
  const [foundMovies, setFoundMovies] = useState([]);
  const [renderedMoviesList, setRenderedMoviesList] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchInputError, setSearchInputError] = useState('');
  const [moviesVisibility, setMoviesVisibility] = useState('');
  const [preloaderVisibility, setPreloaderVisibility] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);
  const [moreButtonVisibility, setMoreButtonVisibility] = useState('movies-card-list__load-more_hidden');
  const [loadMoreClickCounter, setLoadMoreClickCounter] = useState(1);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    mainApi.getSavedMovies(token)
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
    if (viewportWidth >= DESKTOP_RESOLUTION
        || (viewportWidth > TABLET_RESOLUTION && viewportWidth < DESKTOP_RESOLUTION)) return 16;
    if (viewportWidth >= MOBILE_RESOLUTION && viewportWidth < TABLET_RESOLUTION)return 8;
    return 5;
  }

  const loadMoreMoviesHandler = () => {
    const MoviesCards = countInitialCards();
    setRenderedMoviesList(processedMovies.slice(0, MoviesCards + loadMoreClickCounter * numberCardsFromScreenSize()));
    setLoadMoreClickCounter(loadMoreClickCounter + 1);
  };

  const filterMoviesByKeyword = movies => {
    const filteredMovies = movies.filter(movie => movie.nameRU.toLowerCase().includes(searchInputValue));
    setFoundMovies(() => {
      localStorage.setItem('foundMovies', JSON.stringify(filteredMovies));
      return filteredMovies;
    });
  };

  const searchMovieHandler = evt => {
    evt.preventDefault();
    if (searchInputValue === '') return setSearchInputError('Введите ключевое слово');
    setPreloaderVisibility('preloader_visible');
    setMoviesVisibility('');

    if (pathname === '/movies') {
      if (!localStorage.getItem('movies')) {
        moviesApi.getMovies()
            .then(movies => {
              localStorage.setItem('movies', JSON.stringify(movies));
              filterMoviesByKeyword(JSON.parse(localStorage.movies));
              setPreloaderVisibility('');
              setMoviesVisibility('movies-card-list_visible');
              setMoreButtonVisibility('');
            })
            .catch(err => console.log(err));
        return;
      }

      filterMoviesByKeyword(localStorage.getItem('movies')
          ? JSON.parse(localStorage.movies)
          : []
      );
      setPreloaderVisibility('');
      setMoviesVisibility('movies-card-list_visible');
      setMoreButtonVisibility('');

    } else {
      setSavedMovies(savedMovies.filter(movie => movie.nameRU.includes(searchInputValue)));
      setMoviesVisibility('movies-card-list_visible');
      setPreloaderVisibility('');
    }
  };

  return (
      <>
        <Preloader preloaderVisibility={preloaderVisibility} />
        <Header loggedIn={loggedIn} />
        <section className="movies">
          <div className="movies__container">
            <SearchFilm searchInputValue={searchInputValue}
                        setSearchInputValue={setSearchInputValue}
                        searchInputError={searchInputError}
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
