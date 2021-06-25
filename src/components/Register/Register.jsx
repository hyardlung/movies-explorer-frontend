import {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';
import {mainApi} from '../../utils/MainApi';
import './Register.css';



const Register = () => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    if(loggedIn) {
      history.push('/movies')
    }
  }, [history, loggedIn])

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setUserData({
      ...userData,
      [name]: value
    });
  }

  const handleRegister = ({name, email, password}) => {
    return mainApi.register(name, email, password)
        .then(() => {
          alert('Вы успешно зарегистрировались!');
          history.push('/signin');
        })
  }

  const handleSubmit = (evt) => {
    let {name, email, password} = userData;
    evt.preventDefault();
    handleRegister({name, email, password})
        .catch(err => console.log(err.message || 'Что-то пошло не так'));
  }

  return (
      <section className="register">
        <div className="register__container">
          <Logo className={'register__logo'}/>
          <h1 className="register__title">Добро пожаловать!</h1>

          <AuthForm authTextsParams={{
            buttonCaption: 'Зарегистрироваться',
            question: 'Уже зарегистрированы?',
            linkCaption: 'Войти',
            path: '/signin'
            }}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    userData={userData}

          >
            <label htmlFor="name" className="auth-form__label">
              Имя
              <input type="text"
                     id="name"
                     name="name"
                     minLength="2"
                     maxLength="30"
                     className="auth-form__input"
                     required
                     onChange={handleChange}
                     value={userData.name}
              />
              <span className="auth-form__error-message">
                Что-то пошло не так...
              </span>
            </label>
          </AuthForm>
        </div>
      </section>
  );
}

export default Register;
