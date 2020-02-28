import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './MoviesList.module.css';

const MoviesList = ({ movies, match, location }) => {
  return (
    <ul className={styles.moviesList}>
      {movies.map(movie => (
        <li key={movie.id}>
          <span className={styles.movieIcon}>
            <i className="fas fa-film" />
          </span>
          <Link
            to={{
              pathname: `${match.path}/${movie.id}`,
              state: { from: location },
            }}
            className={styles.movieLink}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default withRouter(MoviesList);
