import {SHORT_MOVIE_DURATION} from './constants';

const shortMoviesHandler = movies => {
  return movies.filter(movie => movie.duration <= SHORT_MOVIE_DURATION);
};

export default shortMoviesHandler;
