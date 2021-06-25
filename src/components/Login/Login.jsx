import {useState} from 'react';
import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';
import './Login.css';

const Login = ({onLogin}) => {
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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(userData);
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
