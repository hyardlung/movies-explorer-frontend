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

  getContent(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        ...this._headers,
        'Authorization': `Bearer ${token}`
      }
    })
  }
}

export const mainApi = new MainApi({
  url: 'http://localhost:3005', // для локальной разработки
  // url: 'https://hyardlung-movies-explorer.nomoredomains.icu',   // для удалённой разработки
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});
