class MoviesApi {
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

  // GET: получение массива с фильмами
  getMovies() {
    return fetch(`${this._url}`, {
      headers: {
        ...this._headers
      }
    }).then(this._getResponse)
  }
}

export const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});
