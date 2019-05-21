import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const Input = ({ search }) => (
  <input type="text" className={styles.input} onChange={search} />
);

export default Input;

Input.propTypes = {
  search: PropTypes.func.isRequired,
};
