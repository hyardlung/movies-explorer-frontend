import { useState } from 'react';
import { Switch, Route, NavLink, } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import { footerLinks } from '../../config/links';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route  path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
      </Switch>
      <Footer links={footerLinks}/>
    </div>
  );
}

export default App;
