import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavigationLink from '../NavigationLink/NavigationLink';
import ProfileLink from '../ProfileLink/ProfileLink';
import { navLinks } from '../../config/links';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = ({ isLoggedIn = false}) => {

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
        ) : <ProfileLink className={'header__profile-link'} />
        }
        {/* бургер-меню */}
        { isLoggedIn ? <BurgerMenu/> : ('') }
      </header>
  );
}

export default Header;
