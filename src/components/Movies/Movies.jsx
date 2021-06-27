import React from 'react';
import SearchFilm from '../SearchFilm/SearchFilm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {movies, footerLinks} from '../../config/links';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Movies.css';

const Movies = ({loggedIn}) => {
  return (
      <>
        <Header loggedIn={loggedIn} />
        <section className="movies">
          <div className="movies__container">
            <SearchFilm className={'movies__search-film'}/>
            <MoviesCardList links={movies}/>
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
