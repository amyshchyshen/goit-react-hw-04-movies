import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as moviesAPI from '../../services/moviesAPI';
import styles from './MovieCastPage.module.css';

const mapper = cast => {
  return cast.map(
    ({ cast_id: id, profile_path: imagePath, name, character }) => ({
      id,
      image: `https://image.tmdb.org/t/p/w300/${imagePath}`,
      name,
      character,
    }),
  );
};

class MovieCastPage extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieID: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    cast: [],
  };

  componentDidMount() {
    const { match } = this.props;

    moviesAPI
      .getMovieCredits(match.params.movieID)
      .then(({ data }) => this.setState({ cast: mapper(data.cast) }))
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    const { cast } = this.state;

    return (
      <>
        {cast.length > 0 ? (
          <ul className={styles.actorsList}>
            {cast.map(actor => (
              <li key={actor.id} className={styles.actorsListItem}>
                <img
                  src={actor.image}
                  alt="Actor"
                  className={styles.actorPicture}
                />
                <div className={styles.actorInfo}>
                  <h3>{actor.name}</h3>
                  <p>{actor.character}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noCast}>No information provided.</p>
        )}
      </>
    );
  }
}

export default MovieCastPage;
