import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieGrid.module.css';
import MovieGridItem from './MovieGridItem/MovieGridItem';

const MovieGrid = ({ data }) => (
  <div className={styles.movieGrid}>
    {data.map(el => (
      <MovieGridItem key={el.id} {...el} />
    ))}
  </div>
);

export default MovieGrid;

MovieGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
