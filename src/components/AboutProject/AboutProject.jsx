import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitile';

import './AboutProject.css';

const AboutProject = () => {
  return (
      <section id="about-project" className="about-project">
        <div className="about-project__container">
          <SectionTitle title={'О проекте'} />
          <div className="about-project__description">
            <div className="about-project__column">
              <p className="about-project__subtitle">
                Дипломный проект включал 5 этапов
              </p>
              <p className="about-project__text">
                Составление плана, работу над бэкендом, вёрстку, добавление
                функциональности и финальные доработки.
              </p>
            </div>
            <div className="about-project__column">
              <p className="about-project__subtitle">
                На выполнение диплома ушло 5 недель
              </p>
              <p className="about-project__text">
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                соблюдать, чтобы успешно защититься.
              </p>
            </div>
          </div>

          <div className="about-project__scale">
            <div className="about-project__col-1">
              <p className="about-project__back-point">1 неделя</p>
              <p className="about-project__col-caption">Back-end</p>
            </div>
            <div className="about-project__col-2">
              <p className="about-project__front-point">4 недели</p>
              <p className="about-project__col-caption">Front-end</p>
            </div>
          </div>
        </div>

      </section>
  )
}

export default AboutProject;
