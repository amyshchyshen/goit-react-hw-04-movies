import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import SearchBar from '../../components/SearchBar/SearchBar';
import * as moviesAPI from '../../services/moviesAPI';
import styles from './MoviesPage.module.css';

const MoviesList = lazy(() =>
  import(
    '../../components/MoviesList/MoviesList' /* webpackChunkName: "movies-list" */
  ),
);

const getQueryFromLocation = location =>
  queryString.parse(location.search).query;

class MoviesPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({}).isRequired,
  };

  state = {
    movies: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const query = getQueryFromLocation(location);
    if (query) {
      moviesAPI
        .getMoviesByQuery(query)
        .then(({ data }) => this.setState({ movies: data.results }));
    }
  }

  onSearch = query => {
    moviesAPI
      .getMoviesByQuery(query)
      .then(({ data }) => this.setState({ movies: data.results }))
      .then(
        this.props.history.push({
          ...this.props.location,
          search: `?query=${query}`,
        }),
      );
  };

  render() {
    const { movies } = this.state;

    return (
      <div className={styles.container}>
        <SearchBar onSubmit={this.onSearch} />
        <Suspense>
          {movies.length > 0 && <MoviesList movies={movies} />}
        </Suspense>
      </div>
    );
  }
}

export default MoviesPage;
