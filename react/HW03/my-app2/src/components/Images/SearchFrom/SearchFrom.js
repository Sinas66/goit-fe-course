import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchFrom.module.css';

const SearchFrom = ({ onInput }) => (
  <form onSubmit={e => e.preventDefault()} className={styles[`search-form`]}>
    <input
      type="text"
      autoComplete="off"
      placeholder="Search images..."
      onInput={onInput}
    />
  </form>
);

export default SearchFrom;

SearchFrom.propTypes = {
  onInput: PropTypes.func.isRequired,
};
