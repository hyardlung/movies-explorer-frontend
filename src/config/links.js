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

export {
  authLinks,
  navLinks,
};

