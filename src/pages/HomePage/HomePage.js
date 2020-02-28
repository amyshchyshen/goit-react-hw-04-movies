import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as moviesAPI from '../../services/moviesAPI';
import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    moviesAPI
      .getTrendingMovies()
      .then(({ data }) => this.setState({ movies: data.results }))
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Trending today</h1>
        <ul className={styles.moviesList}>
          {movies.map(movie => (
            <li key={movie.id}>
              <span className={styles.movieIcon}>
                <i className="fas fa-film" />
              </span>
              <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
