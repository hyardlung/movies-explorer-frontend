import React from 'react';
import { useHistory } from 'react-router-dom';
import './NonFound.css';

const NotFound = () => {
  const history = useHistory();

  return (
      <section className="not-found">
        <div className="not-found__container">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__text">Страница не найдена</p>
          <span
              onClick={() => history.goBack()}
              className="not-found__go-back">
            Назад
          </span>
        </div>
      </section>
  );
}

export default NotFound;
