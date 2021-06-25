import React from 'react';
import './Profile.css';

const Profile = ({handleSignOut}) => {
  return (
      <section className="profile">
        <div className="profile__container">
          <h1 className="profile__title">Привет, username!</h1>
          <form className="profile__edit-form">
            <label htmlFor="profile-name" className="profile__label">
              Имя
              <input type="text"
                     id="profile-name"
                     className="profile__input"
              />
            </label>
            <div className="profile__divider"/>
            <label htmlFor="profile-email" className="profile__label">
              E-mail
              <input type="text"
                     id="profile-email"
                     className="profile__input"
              />
            </label>
            <div className="profile__control">
              <button type="submit"
                      className="profile__button profile__button_edit-confirm"
              >
                Редактировать
              </button>
              <button type="button"
                      className="profile__button profile__button_logout"
                      onClick={handleSignOut}
              >
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </div>
      </section>
  );
}

export default Profile;
