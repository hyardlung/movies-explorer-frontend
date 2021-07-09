import React, {useContext, useEffect} from 'react';
import {CurrentUserContext} from '../../contexts/currentUserContext';
import useFormWithValidation from '../../hooks/useFormWithValidation';
import './Profile.css';
import Header from "../Header/Header";

const Profile = ({loggedIn,
                   onUpdateUser,
                   onSignOut,
                   isUpdateSuccess,
                   isUpdateFail
}) => {
  const currentUser = useContext(CurrentUserContext);


  const {values, setValues, handleChange, errors, isValid} = useFormWithValidation();
  const {name, email} = values;

  const handleSubmitUpdateUser = evt => {
    evt.preventDefault();
    onUpdateUser({name, email});
  };

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email
    })
  }, [setValues, currentUser]);

  return (
      <>
        <Header loggedIn={loggedIn}/>
        <section className="profile">
          <div className="profile__container">
            <h1 className="profile__title">
              Привет, {currentUser.name}!
            </h1>
            <form name="update-profile-form"
                  className="profile__edit-form"
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmitUpdateUser}
            >
              <label htmlFor="profile-name" className="profile__label">
                Имя
                <input type="text"
                       name="name"
                       id="profile-name"
                       className="profile__input"
                       required
                       minLength="2"
                       maxLength="30"
                       value={values.name || ''}
                       onChange={handleChange}
                />
                <span className="profile__error-message ">
                {errors.name || ''}
              </span>
              </label>
              <div className="profile__divider"/>
              <label htmlFor="profile-email" className="profile__label">
                E-mail
                <input type="email"
                       name="email"
                       id="profile-email"
                       className="profile__input"
                       required
                       minLength="2"
                       maxLength="30"
                       value={values.email || ''}
                       onChange={handleChange}
                />
                <span className="profile__error-message">
                {errors.email || ''}
              </span>
              </label>
              {isUpdateSuccess && <p className="profile__update-message profile__update-message_success">Редактирование завершено!</p>}
              {isUpdateFail && <p className="profile__update-message profile__update-message_fail">Ошибка при редактировании профиля</p>}
              <div className="profile__control">
                <button type="submit"
                        className={`
                      profile__button 
                      profile__button_edit-confirm 
                      ${!isValid && 'profile__button_disabled'}`}
                        disabled={!isValid && true}
                >
                  Редактировать
                </button>
                <button type="button"
                        className="profile__button profile__button_logout"
                        onClick={onSignOut}
                >
                  Выйти из аккаунта
                </button>
              </div>
            </form>
          </div>
        </section>
      </>
  );
}

export default Profile;
