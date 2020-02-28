import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieDetails.module.css';

const MovieDetails = ({ title, imageUrl, userScore, overview, genres }) => {
  return (
    <>
      <h2>{title}</h2>
      <div className={styles.wrapper}>
        <img src={imageUrl} alt={title} className={styles.movieImg} />
        <div className={styles.innerWrapper}>
          <p>
            User score:{' '}
            <span className={styles.userScorePercentage}>{userScore}</span>
          </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul className={styles.genresList}>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

MovieDetails.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  userScore: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieDetails;
