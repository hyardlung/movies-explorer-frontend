// ссылки навигации по авторизованным маршрутам
const navLinks = [
  {
    id: 'movies',
    caption: 'Фильмы',
    path: '/movies'
  },
  {
    id: 'saved-movies',
    caption: 'Сохранённые фильмы',
    path: '/saved-movies',
  },
];

// ссылки регистрации и авторизации
const authLinks = [
  {
    id: 'register',
    caption: 'Регистрация',
    path: '/register'
  },
  {
    id: 'login',
    caption: 'Войти',
    path: '/login',
  },
];

const navTabLinks = [
  {
    id: 'aboutProject',
    caption: 'О проекте',
    url: '#about-project',
  },
  {
    id: 'techs',
    caption: 'Технологии',
    url: '#techs'
  },
  {
    id: 'aboutMe',
    caption: 'Студент',
    url: '#about-me'
  },
];

const techs = [
  {
    id: 'html',
    caption: 'HTML',
    url: 'https://ru.wikipedia.org/wiki/HTML5'
  },
  {
    id: 'css',
    caption: 'CSS',
    url: 'https://ru.wikipedia.org/wiki/CSS'
  },
  {
    id: 'js',
    caption: 'JS',
    url: 'https://ru.wikipedia.org/wiki/JavaScript'
  },
  {
    id: 'react',
    caption: 'React',
    url: 'https://ru.wikipedia.org/wiki/React'
  },
  {
    id: 'git',
    caption: 'Git',
    url: 'https://ru.wikipedia.org/wiki/Git'
  },
  {
    id: 'express',
    caption: 'Express.js',
    url: 'https://ru.wikipedia.org/wiki/Express.js'
  },
  {
    id: 'mongo',
    caption: 'mongoDB',
    url: 'https://ru.wikipedia.org/wiki/MongoDB'
  },
];

const portfolioLinks = [
  {
    id: 1,
    caption: 'Статичный сайт',
    url: 'https://github.com/hyardlung/how-to-learn'
  },
  {
    id: 2,
    caption: 'Адаптивный сайт',
    url: 'https://github.com/hyardlung/russian-travel'
  },
  {
    id: 3,
    caption: 'Одностраничное приложение',
    url: 'https://github.com/hyardlung/react-mesto-api-full'
  },
];

const footerLinks = [
  {
    id: 'ya.pra-home',
    caption: 'Яндекс.Практикум',
    url: 'https://praktikum.yandex.ru'
  },{
    id: 'ya.pra-gh',
    caption: 'Github',
    url: 'https://github.com/yandex-praktikum'
  },{
    id: 'ya.pra-fb',
    caption: 'Facebook',
    url: 'https://www.facebook.com/yandex.praktikum'
  },
];

export {
  authLinks,
  navLinks,
  navTabLinks,
  techs,
  portfolioLinks,
  footerLinks
};

