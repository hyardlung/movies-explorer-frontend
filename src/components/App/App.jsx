import {useEffect, useState} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import {footerLinks} from '../../config/links';
import {CurrentUserContext} from '../../contexts/currentUserContext';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import {mainApi} from '../../utils/MainApi';

const App = () => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const getToken = () => {
    return localStorage.getItem('token');
  };

  const tokenCheck = () => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.getContent(token)
          .then(res => {
            if (res) setLoggedIn(true);
          })
          .catch(err => console.log(err));
    }
  };

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
          localStorage.setItem('token', data.token);
          setLoggedIn(true);
          history.push('/movies');
        })
        .catch(err => console.log(err));
  };

  //обработчик выхода из аккаунта
  const handleSignOut = () => {
    localStorage.removeItem('token');
    history.push('/');
    setLoggedIn(false);
  };

  // обработчик редактирования профиля
  const handleUpdateUser = ({name, email}) => {
    mainApi.editUserData({name, email}, getToken())
        .then(res => {
          setCurrentUser(res);
          alert('Данные успешно обновлены')
        })
        .catch(err => console.log(err));
  };

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
          .then(([userData]) => {
            setCurrentUser(userData);
          })
          .catch(err => console.log(err));
    }
  }, [loggedIn]);

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
              <Profile onSignOut={handleSignOut}
                       onUpdateUser={handleUpdateUser}
              />
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
