import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ counter, length }) => (
  <p className={styles.counter}>
    {counter + 1}/{length}
  </p>
);

export default Counter;

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};
