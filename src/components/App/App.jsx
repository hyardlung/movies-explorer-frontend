import {useEffect, useState} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import {footerLinks} from '../../config/links';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import {mainApi} from '../../utils/MainApi';
import {CurrentUserContext} from '../../contexts/currentUserContext';

const App = () => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const getToken = () => {
    return localStorage.getItem('token');
  };

  const tokenCheck = () => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.getContent(token)
          .then(res => {
            if (res) {
              setCurrentUser(res.data);
              setLoggedIn(true);
            }
          })
          .catch(err => console.log(err));
    }
  }

  useEffect(() => {
    tokenCheck()
  }, []);

  useEffect(() => {
    if (loggedIn) history.push('/movies');
  }, [history, loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      const token = localStorage.getItem('token');
      Promise.all([mainApi.getUserData(token)])
          .then(userData => {
            setCurrentUser(userData);
          })
          .catch(err => console.log(err));
    }
  }, [loggedIn])

  // обработчик регистрации пользователя
  const handleRegister = ({name, email, password}) => {
    return mainApi.register({name, email, password})
        .then(data => {
          if (data) {
            handleLogin({email, password});
            alert('Вы успешно зарегистрировались!');
            history.push('/movies');
          }
        })
        .catch(err => console.log(err));
  };

  // обработчик авторизации пользователя
  const handleLogin = ({email, password}) => {
    mainApi.authorize({email, password})
        .then(data => {
          if (data) {
            setLoggedIn(true);
            alert('Вы успешно авторизовались!');
            history.push('/movies');
          }
        })
        .catch(err => console.log(err));
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setUserData('');
    history.push('/');
  }

  return (
      <div className="app">
        <CurrentUserContext.Provider value={currentUser}>
          <Switch>
            <Route exact path="/">
              <Header loggedIn={loggedIn} />
              <Main/>
              <Footer links={footerLinks}/>
            </Route>
            <Route path="/movies">
              <Header loggedIn={loggedIn}/>
              <Movies/>
              <Footer links={footerLinks}/>
            </Route>
            <Route path="/saved-movies">
              <Header loggedIn={loggedIn}/>
              <SavedMovies/>
              <Footer links={footerLinks}/>
            </Route>
            <Route path="/signup">
              <Register onRegister={handleRegister} />
            </Route>
            <Route path="/signin">
              <Login onLogin={handleLogin} />
            </Route>
            <Route path="/profile">
              <Header loggedIn={loggedIn}/>
              <Profile handleSignOut={handleSignOut}/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </CurrentUserContext.Provider>
      </div>
  );
}

export default App;
