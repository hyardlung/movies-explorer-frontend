import React from 'react';
import './Techs.css';
import SectionTitle from '../SectionTitle/SectionTitile';
import TechStack from '../TechStack/TechStack';
import { techs } from '../../config/links';

const Techs = () => {
  return (
      <section className="techs">
          <div className="techs__container">
          <SectionTitle title={'Технологии'} />
          <div className="techs__content-wrapper">
            <p className="techs__title">7 технологий</p>
            <p className="techs__text">
              На курсе веб-разработки мы освоили технологии, которые применили
              в дипломном проекте.
            </p>
            <TechStack links={techs} />
          </div>
          </div>
      </section>
  )
}

export default Techs;
