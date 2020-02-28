import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as moviesAPI from '../../services/moviesAPI';
import styles from './MovieReviewsPage.module.css';

class MovieReviewsPage extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        movieID: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    reviews: [],
  };

  componentDidMount() {
    const { match } = this.props;

    moviesAPI
      .getMovieReviews(match.params.movieID)
      .then(({ data }) => this.setState({ reviews: data.results }))
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length > 0 ? (
          <ul className={styles.reviewsList}>
            {reviews.map(review => (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noReviews}>
            We don&#039;t have any reviews for this movie.
          </p>
        )}
      </>
    );
  }
}

export default MovieReviewsPage;
