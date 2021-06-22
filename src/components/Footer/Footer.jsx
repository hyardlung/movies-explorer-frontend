import React from 'react';
import './Footer.css';

const Footer = ({
    links = []
                }) => {
  return (
      <footer className="footer">
        <div className="footer__container">
          <p className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer__line" />
          <span className="footer__year">© {new Date().getFullYear()}</span>
          <nav className="footer__nav">
            <ul className="footer__nav-list">
              {links.map((item) => (
                  <li key={item.id} className="footer__list-item">
                    <a
                        href={item.url}
                        className="footer__link"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                      {item.caption}
                    </a>
                  </li>
              ))}
            </ul>
          </nav>
        </div>
      </footer>
  )
}

export default Footer;
