import React from 'react';
import SearchFilm from '../SearchFilm/SearchFilm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {footerLinks, savedMovies} from '../../config/links';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './SavedMovies.css'

const SavedMovies = ({loggedIn}) => {
  return (
      <>
        <Header loggedIn={loggedIn} />
        <section className="saved-movies">
          <div className="saved-movies__container">
            <SearchFilm />
            <MoviesCardList links={savedMovies}/>
          </div>
        </section>
        <Footer loggedIn={loggedIn}
                links={footerLinks}
        />
      </>
  );
}

export default SavedMovies;
