import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.css';
import ProfileLink from '../ProfileLink/ProfileLink';

const BurgerMenu = () => {
  const [burgerVisible, setBurgerVisible] = useState(false);

  const burgerVisibilityHandler = () => {
    setBurgerVisible(!burgerVisible);
  }

  return (
      <>
        <div className={`burger-menu__icon ${burgerVisible ? 'burger-menu__icon_active' : ('')}`}
             onClick={burgerVisibilityHandler}>
          <div className="burger-menu__line" />
        </div>

        <div className={`burger-menu__overlay ${burgerVisible ? 'burger-menu__overlay_active' : ('')}`}
             onClick={burgerVisibilityHandler}>
          <div className="burger-menu">
            <nav className="burger-menu__nav">
              <ul className="burger-menu__nav-list">
                <li className="burger-menu__list-item">
                  <NavLink exact to='/'
                           className="burger-menu__link"
                           activeClassName="burger-menu__link_active"
                  >
                    Главная
                  </NavLink>
                </li>
                <li className="burger-menu__list-item">
                  <NavLink to='/movies'
                           className="burger-menu__link"
                           activeClassName="burger-menu__link_active"
                  >
                    Фильмы
                  </NavLink>
                </li>
                <li className="burger-menu__list-item">
                  <NavLink to='/saved-movies'
                           className="burger-menu__link"
                           activeClassName="burger-menu__link_active"
                  >
                    Сохранённые фильмы
                  </NavLink>
                </li>

                <li className="burger-menu__list-item">
                  <ProfileLink className={'burger-menu__profile-link'} />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </>
  );
}

export default BurgerMenu;
