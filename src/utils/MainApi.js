import {MAIN_API_URL, MOVIES_API_URL} from "./constants";

class MainApi {
  constructor(params) {
    this._url = params.url;
    this._headers = params.headers;
  }

  // ПРОВЕРКА ПРОМИСА: возврат json'а в случае резолва, возврат статуса ошибки в случае реджекта
  _getResponse(res) {
    return res.ok ?
        res.json() :
        Promise.reject(`Что-то пошло не так: ${res.status} ${res.statusText}`)
  }

  // GET: получение данных профиля
  getUserData(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      }
    }).then(this._getResponse)
  }

  // PATCH: редактирование данных профиля
  editUserData({name, email}, token) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name, email
      })
    }).then(this._getResponse)
  }

  // POST: регистрация пользователя
  register({name, email, password}) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        ...this._headers
      },
      body: JSON.stringify({
        name, email, password
      })
    }).then(this._getResponse)
  }

  // POST: авторизация пользователя
  authorize({email, password}) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({
        email, password
      })
    }).then(this._getResponse)
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      headers: this._headers,
    }).then(this._getResponse)
  }

  addMovieToFavorites(movie) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${MOVIES_API_URL}${movie.image.url}`,
        thumbnail: `${MOVIES_API_URL}${movie.image.url}`,
        trailer: movie.trailerLink,
        movieId: movie.id.toString(),
        nameRU: movie.nameRU,
        nameEN: movie.nameEN
      })
    }).then(this._getResponse)
  }

  removeMovieFromFavorites(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._getResponse)
  }
}

export const mainApi = new MainApi({
  // url: 'http://localhost:3005', // для локальной разработки
  url: `${MAIN_API_URL}`,   // для удалённой разработки
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});
