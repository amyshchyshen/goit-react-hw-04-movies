import axios from 'axios';

const API_KEY = 'dbdd1ab6424364ad2035a86ae92c774c';

export const getTrendingMovies = () =>
  axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
  );

export const getMoviesByQuery = query =>
  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
  );

export const getMovieById = id =>
  axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);

export const getMovieCredits = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`,
  );

export const getMovieReviews = id =>
  axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`,
  );
