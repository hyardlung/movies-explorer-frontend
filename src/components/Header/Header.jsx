import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavigationLink from '../NavigationLink/NavigationLink';
import profileIcon from '../../images/profile-icon.svg'
import { navLinks } from '../../config/links';
import './Header.css';

const Header = ({ isLoggedIn = true }) => {

  const [burgerVisible, setBurgerVisible] = useState(false);

  const burgerVisibilityHandler = () => {
    setBurgerVisible(!burgerVisible);
  }

  return (
      <header className="header">
        <Logo />
        {/* навигация авторизованного пользователя */}
        <div className="header__loggedin-nav-wrapper">
          { isLoggedIn ? <Navigation links={navLinks}/> : ('') }
        </div>
        {/* навигация неавторизованного пользователя */}
        { !isLoggedIn ? (
            <nav className="header__auth-nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <NavigationLink
                    path={'/signup'}
                    caption={'Регистрация'}
                  />
                </li>
                <li className="header__nav-item">
                  <NavigationLink
                    path={'/signin'}
                    caption={'Войти'}
                    className={'navigation-link_login'}
                  />
                </li>
              </ul>
            </nav>
        ) : (<NavLink to='/profile'   /* ссылка на страницу редактирования профиля */
                      className="header__profile-link"
                      activeClassName="header__profile-link_active">
              Аккаунт
              <img src={profileIcon}
                   alt="Иконка профиля"
                   className="header__profile-icon"/>
            </NavLink>)
        }

        <div className={`header__burger-icon 
        ${burgerVisible ? 'header__burger-icon_active' : ('')}`}
             onClick={burgerVisibilityHandler}>
          <div className="header__burger-line" />
        </div>
      </header>
  )
}

export default Header;
