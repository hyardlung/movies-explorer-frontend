import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';

import './Login.css';
import {mainApi} from "../../utils/MainApi";

const Login = () => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setUserData({
      ...userData,
      [name]: value
    });
  }

  const handleLogin = ({email, password}) => {
    mainApi.authorize({email, password})
        .then(() => {
          setLoggedIn(true);
          history.push('/movies');
          alert('Вы успешно авторизовались!');
        })
        .catch(err => console.log(err));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(userData);
  }

  return (
      <section className="login">
        <div className="login__container">
          <Logo className={'login__logo'}/>
          <h1 className="login__title">Рады видеть!</h1>

          <AuthForm authTextsParams={{
            buttonCaption: 'Войти',
            question: 'Ещё не зарегистрированы?',
            linkCaption: 'Регистрация',
            path: '/signup'
            }}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    userData={userData}
          />
        </div>
      </section>
  );
}

export default Login;
