import React from 'react';
import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';

import './Register.css';

const Register = () => {
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
          }}>
            <label htmlFor="name" className="auth-form__label">
              Имя
              <input type="text"
                     id="name"
                     minLength="2"
                     maxLength="30"
                     className="auth-form__input"
                     required/>
              <span className="auth-form__error-message">Что-то пошло не так...</span>
            </label>
          </AuthForm>
        </div>
      </section>
  );
}

export default Register;
