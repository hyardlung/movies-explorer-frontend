import {useState} from 'react';
import {useLocation} from 'react-router-dom';
import SearchFilm from '../SearchFilm/SearchFilm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {footerLinks} from '../../config/links';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import {moviesApi} from '../../utils/MoviesApi';
import './Movies.css';

const Movies = ({loggedIn}) => {
  const {pathname} = useLocation();
  const [foundMovies, setFoundMovies] = useState([]);
  const [renderedMoviesList, setRenderedMoviesList] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchInputError, setSearchInputError] = useState('');
  const [moviesVisibility, setMoviesVisibility] = useState('');
  const [preloaderVisibility, setPreloaderVisibility] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [moreButtonVisibility, setMoreButtonVisibility] = useState('');

  const filterMoviesByKeyword = movies => {
    const filteredMovies = movies.filter(movie => movie.nameRU.includes(searchInputValue));
    setFoundMovies(() => {
      localStorage.setItem('foundMovies', JSON.stringify(filteredMovies));
      return filteredMovies;
    });
  };

  const searchMovieHandler = evt => {
    evt.preventDefault();
    if (searchInputValue === '') setSearchInputError('Введите ключевое слово');
    setPreloaderVisibility('preloader_visible');
    setMoviesVisibility('');

    if (pathname === '/movies') {
      if (!localStorage.getItem('movies')) {
        moviesApi.getMovies()
            .then(movies => {
              localStorage.setItem('movies', JSON.stringify(movies));
              filterMoviesByKeyword(JSON.parse(localStorage.movies));
              setMoviesVisibility('movies-card-list_visible');
              setMoreButtonVisibility('');
              setPreloaderVisibility('');
            })
            .catch(err => console.log(err));
        return;
      }

      filterMoviesByKeyword(localStorage.getItem('movies')
          ? JSON.parse(localStorage.movies)
          : []
      );
      setMoviesVisibility('movies-card-list_visible');
      setMoreButtonVisibility('');
      setPreloaderVisibility('');

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
                        onSubmit={searchMovieHandler}
                        className={'movies__search-film'}
            />
            <MoviesCardList movies={foundMovies}
                            renderedMoviesList={renderedMoviesList}
                            setRenderedMoviesList={setRenderedMoviesList}
                            moviesVisibility={moviesVisibility}
                            setMoviesVisibility={setMoviesVisibility}
                            moreButtonVisibility={moreButtonVisibility}


            />
          </div>

          <button className="movies__load-more">
            <span className="movies__more-caption">Ещё</span>
          </button>
        </section>
        <Footer loggedIn={loggedIn}
                links={footerLinks}
        />
      </>

  );
}

export default Movies;
