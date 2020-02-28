import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink } from 'react-router-dom';
import * as moviesAPI from '../../services/moviesAPI';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import Loader from '../../components/Loader/Loader';
import styles from './MovieDetailsPage.module.css';

const MovieCastPage = lazy(() =>
  import(
    '../MovieCastPage/MovieCastPage' /* webpackChunkName: "movie-cast-page" */
  ),
);

const MovieReviewsPage = lazy(() =>
  import(
    '../MovieReviewsPage/MovieReviewsPage' /* webpackChunkName: "movie-reviews-page" */
  ),
);

const getIdFromProps = props => props.match.params.movieID;

const activeStyle = {
  color: '#f5963d',
};

const createMovieObject = movie => {
  return {
    title: movie.original_title,
    imageUrl: `https://image.tmdb.org/t/p/w300/${movie.poster_path}`,
    userScore: `${movie.vote_average * 10}%`,
    overview: movie.overview,
    genres: movie.genres,
  };
};

class MovieDetailsPage extends Component {
  static propTypes = {
    match: PropTypes.shape({
      url: PropTypes.string,
      path: PropTypes.string,
      params: PropTypes.shape({
        movieID: PropTypes.string,
      }),
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.shape({}),
      }),
    }).isRequired,
  };

  state = {
    movie: null,
    prevLocation: '',
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    const { location } = this.props;

    if (location.state) {
      return moviesAPI
        .getMovieById(id)
        .then(({ data }) => this.setState({ movie: createMovieObject(data) }))
        .then(this.setState({ prevLocation: location.state.from }))
        .catch(err => {
          throw new Error(err);
        });
    }

    return moviesAPI
      .getMovieById(id)
      .then(({ data }) => this.setState({ movie: createMovieObject(data) }))
      .catch(err => {
        throw new Error(err);
      });
  }

  onGoBack = () => {
    const { prevLocation } = this.state;
    const { history } = this.props;

    history.push(prevLocation);
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;

    return (
      <>
        {movie && (
          <>
            <div className={styles.container}>
              <button
                type="button"
                onClick={this.onGoBack}
                className={styles.goBackBtn}
              >
                <span className={styles.goBackBtnIcon}>
                  <i className="fas fa-long-arrow-alt-left" />
                </span>
                Go back
              </button>
              <MovieDetails
                title={movie.title}
                imageUrl={movie.imageUrl}
                userScore={movie.userScore}
                overview={movie.overview}
                genres={movie.genres}
              />
            </div>
            <ul className={styles.detailsNav}>
              <li>
                <NavLink
                  to={`${match.url}/cast`}
                  activeStyle={activeStyle}
                  className={styles.detailsNavItem}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${match.url}/reviews`}
                  activeStyle={activeStyle}
                  className={styles.detailsNavItem}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Suspense fallback={<Loader />}>
              <Route path={`${match.path}/cast`} component={MovieCastPage} />
              <Route
                path={`${match.path}/reviews`}
                component={MovieReviewsPage}
              />
            </Suspense>
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
