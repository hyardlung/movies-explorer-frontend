class MoviesApi {
  constructor(params) {
    this._url = params._url;
    this._headers = params._headers;
  }


}

export const moviesApi = new MoviesApi({
  url: 'https://hyardlung-movies-explorer.nomoredomains.icu',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});
