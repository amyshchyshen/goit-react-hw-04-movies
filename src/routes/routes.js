import { lazy } from 'react';
import HomePage from '../pages/HomePage/HomePage';

const MoviesPage = lazy(() =>
  import(
    '../pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */
  ),
);

const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

export default {
  HOME_PAGE: {
    path: '/',
    component: HomePage,
  },
  MOVIES_PAGE: {
    path: '/movies',
    component: MoviesPage,
  },
  MOVIE_DETAILS_PAGE: {
    path: '/movies/:movieID',
    component: MovieDetailsPage,
  },
};
