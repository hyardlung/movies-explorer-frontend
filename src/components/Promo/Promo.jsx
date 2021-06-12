import React from 'react';
import './Promo.css';

import NavTab from '../NavTab/NavTab';
import { navTabLinks } from '../../config/links';

const Promo = ({ links = [] }) => {
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
