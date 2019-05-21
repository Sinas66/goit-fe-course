import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieGridItem.module.css';

const MovieGridItem = ({ posterUrl, title, overview }) => {
  return (
    <div className={styles['movie-card']}>
      <img src={posterUrl} alt="" />
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieGridItem;

MovieGridItem.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};
