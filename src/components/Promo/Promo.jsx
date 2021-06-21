import React from 'react';
import NavTab from '../NavTab/NavTab';
import { navTabLinks } from '../../config/links';

import './Promo.css';

const Promo = () => {
  return (
      <section className="promo">
        <div className="promo__container">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <NavTab
              links={ navTabLinks }
          />
        </div>
      </section>
  )
}

export default Promo;
