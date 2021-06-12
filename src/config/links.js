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
    path: '#',
    name: 'aboutProject',
  },
  {
    id: 'techs',
    caption: 'Технологии',
    path: '#',
    name: 'techs',
  },
  {
    id: 'aboutMe',
    caption: 'Студент',
    path: '#',
    name: 'aboutMe',
  },
]

const techs = [
  {
    // id: 1,
    caption: 'HTML',
  },
  {
    // id: 2,
    caption: 'CSS',
  },
  {
    // id: 3,
    caption: 'JS',
  },
  {
    // id: 4,
    caption: 'React',
  },
  {
    // id: 5,
    caption: 'Git',
  },
  {
    // id: 6,
    caption: 'Express.js',
  },
  {
    // id: 7,
    caption: 'mongoDB',
  },
]

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
]

export {
  authLinks,
  navLinks,
  navTabLinks,
  techs,
  portfolioLinks,
};

