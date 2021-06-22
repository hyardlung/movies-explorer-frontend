import React from 'react';
import './AuthForm.css';
import {NavLink} from "react-router-dom";

const AuthForm = ({
    children,
    authTextsParams
                  }) => {
  return (
      <form autocomplete="off" className="auth-form">
        <div className="auth-form__inputs-wrapper">
          {children}
          <label htmlFor="email" className="auth-form__label">
            E-mail
            <input type="email"
                   id="email"
                   minLength="2"
                   maxLength="30"
                   className="auth-form__input"
                   required/>
            <span className="auth-form__error-message">Что-то пошло не так...</span>
          </label>
          <label htmlFor="password" className="auth-form__label">
            Пароль
            <input type="password"
                   id="password"
                   minLength="2"
                   maxLength="30"
                   className="auth-form__input"
                   required/>
            <span className="auth-form__error-message">Что-то пошло не так...</span>
          </label>
        </div>{/* /.auth-form__inputs-wrapper */}

        <div className="auth-form__control-wrapper">
          <button type="submit"
                  className="auth-form__submit-button">
          <span className="auth-form__button-caption">
            {authTextsParams.buttonCaption}
          </span>
          </button>
          <p className="auth-form__redirect-question">
            {authTextsParams.question}
            <NavLink to={authTextsParams.path}
                     className="auth-form__redirect-link">
              {authTextsParams.linkCaption}
            </NavLink>
          </p>
        </div>{/* /.auth-form__control-wrapper */}
      </form>
  );
}

export default AuthForm;
