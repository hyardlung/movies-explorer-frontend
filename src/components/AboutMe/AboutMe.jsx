import React from 'react';
import './AboutMe.css';
import SectionTitle from '../ui/SectionTitle/SectionTitile';
import photo from '../../images/photo-min.jpeg'
import Portfolio from '../Portfolio/Portfolio';
import {portfolioLinks} from '../../config/links';

const AboutMe = () => {
  return (
      <section className="about-me">
        <div className="about-me__container">
          <SectionTitle title={'Студент'}/>
          <div className="bio">
            <div className="bio__description">
              <p className="bio__name">Дмитрий</p>
              <p className="bio__job">Веб-разработчик, 33 года</p>
              <p className="bio__text">
                Родился в Хакасии, живу в Красноярске, в прошлой жизни электромонтёр по эксплуатации
                распределительных сетей, сейчас — выпускник курса по веб-разработке Яндекс.Практикума.
                Я люблю слушать музыку, ходить в походы с большим рюкзаком, лазать по скалам, кататься
                на велосипеде по ночному городу.
              </p>

              <ul className="bio__links">
                <li className="bio__list-item">
                  <a href="#!" className="bio__external-link">Facebook</a>
                </li>
                <li className="bio__list-item">
                  <a href="#!" className="bio__external-link">Github</a>
                </li>
              </ul>
            </div>

              <img src={photo}
                   alt="Фото студента"
                   className="bio__photo"
              />
          </div>

          <Portfolio links={portfolioLinks} className={'portfolio__about-me'}/>
        </div>
      </section>
  )
}

export default AboutMe;
