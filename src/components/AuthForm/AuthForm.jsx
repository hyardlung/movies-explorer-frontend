import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import './AuthForm.css';

const AuthForm = ({
    formName,
    onRegister,
    onLogin,
    authTextsParams
                  }) => {
  const {values, errors, isValid, handleChange} = useFormWithValidation();
  const {name, email, password} = values;
  const pathname = useLocation().pathname;

  const handleSubmit = evt => {
    evt.preventDefault();
    pathname === '/signup'
        ? onRegister({name, email, password})
        : onLogin({email, password})
  };

  return (
      <form name={`${formName}-form`}
            className="auth-form"
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit}
      >
        <fieldset className="auth-form__fieldset">
          {pathname === '/signup' && (
              <label htmlFor="name" className="auth-form__label">
                Имя
                <input type="text"
                       id="name-input"
                       name="name"
                       minLength="2"
                       maxLength="30"
                       required
                       onChange={handleChange}
                       value={values.name || ''}
                       className={`
                          auth-form__input
                          ${errors.name && 'auth-form__input_state_falsy'}
                       `}
                />
                <span className="auth-form__error-message">
              {errors.name || ''}
            </span>
              </label>
            )}

          <label htmlFor="email" className="auth-form__label">
            E-mail
            <input type="email"
                   id="email-input"
                   name="email"
                   minLength="2"
                   maxLength="30"
                   required
                   onChange={handleChange}
                   value={values.email || ''}
                   className={`
                     auth-form__input 
                     ${errors.email && 'auth-form__input_state_falsy'}
                   `}
            />
            <span className="auth-form__error-message">
              {errors.email || ''}
            </span>
          </label>
          <label htmlFor="password" className="auth-form__label">
            Пароль
            <input type="password"
                   id="password-input"
                   name="password"
                   minLength="8"
                   maxLength="30"
                   required
                   onChange={handleChange}
                   value={values.password || ''}
                   className={`
                      auth-form__input
                      ${errors.password && 'auth-form__input_state_falsy'}
                   `}
            />
            <span className="auth-form__error-message">
              {errors.password || ''}
            </span>
          </label>
        </fieldset>{/* /.auth-form__fieldset */}

        <div className="auth-form__control-wrapper">
          <button type="submit"
                  disabled={!isValid && true}
                  className={`
                    auth-form__submit-button 
                    ${!isValid && 'auth-form__submit-button_disabled'}
                  `}
          >
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
