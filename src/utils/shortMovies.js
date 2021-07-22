import {SHORT_MOVIE_DURATION} from './constants';

const shortMovies = movies => {
  return movies.filter(movie => movie.duration <= SHORT_MOVIE_DURATION);
};

export default shortMovies;
